'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { motion, AnimatePresence } from 'framer-motion';
import { SAFEHARBOR_KNOWLEDGE, SYSTEM_PROMPT, GREETING_MESSAGE } from '@/data/voiceAgentKnowledge';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

// Initialize Gemini (will be null if no API key)
const getGeminiModel = () => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
        return null;
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    return genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
};

export default function VoiceAgent() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voiceEnabled, setVoiceEnabled] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const synthRef = useRef<SpeechSynthesis | null>(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Initialize speech recognition and synthesis
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Speech Synthesis
            synthRef.current = window.speechSynthesis;

            // Speech Recognition
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognitionRef.current = new SpeechRecognition();
                recognitionRef.current.continuous = false;
                recognitionRef.current.interimResults = false;
                recognitionRef.current.lang = 'en-US';

                recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
                    const transcript = event.results[0][0].transcript;
                    setInputText(transcript);
                    setIsListening(false);
                };

                recognitionRef.current.onerror = () => {
                    setIsListening(false);
                    setError('Voice recognition failed. Please try again or type your message.');
                };

                recognitionRef.current.onend = () => {
                    setIsListening(false);
                };
            }
        }
    }, []);

    // Add greeting message when chat opens for the first time
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ role: 'assistant', content: GREETING_MESSAGE }]);
            if (voiceEnabled && synthRef.current) {
                speak(GREETING_MESSAGE);
            }
        }
    }, [isOpen, messages.length, voiceEnabled]);

    const speak = useCallback((text: string) => {
        if (synthRef.current && voiceEnabled) {
            // Cancel any ongoing speech
            synthRef.current.cancel();

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1.0;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;

            // Try to find a natural-sounding voice
            const voices = synthRef.current.getVoices();
            const preferredVoice = voices.find(v =>
                v.name.includes('Samantha') ||
                v.name.includes('Google') ||
                v.name.includes('Natural')
            ) || voices[0];

            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);

            synthRef.current.speak(utterance);
        }
    }, [voiceEnabled]);

    const toggleListening = () => {
        if (!recognitionRef.current) {
            setError('Voice recognition is not supported in your browser. Please type your message.');
            return;
        }

        if (isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        } else {
            setError(null);
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

    const stopSpeaking = () => {
        if (synthRef.current) {
            synthRef.current.cancel();
            setIsSpeaking(false);
        }
    };

    const sendMessage = async (text: string) => {
        if (!text.trim()) return;

        const userMessage: Message = { role: 'user', content: text };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);
        setError(null);

        try {
            const model = getGeminiModel();

            if (!model) {
                // Demo mode without API key
                const demoResponse = getDemoResponse(text);
                const assistantMessage: Message = { role: 'assistant', content: demoResponse };
                setMessages(prev => [...prev, assistantMessage]);
                if (voiceEnabled) {
                    speak(demoResponse);
                }
                setIsLoading(false);
                return;
            }

            // Build context with knowledge base
            const context = `
${SYSTEM_PROMPT}

KNOWLEDGE BASE:
${JSON.stringify(SAFEHARBOR_KNOWLEDGE, null, 2)}

CONVERSATION HISTORY:
${messages.map(m => `${m.role}: ${m.content}`).join('\n')}

USER: ${text}

Respond as SafeHarbor's AI assistant. Be concise, warm, and helpful.`;

            const result = await model.generateContent(context);
            const response = result.response.text();

            const assistantMessage: Message = { role: 'assistant', content: response };
            setMessages(prev => [...prev, assistantMessage]);

            if (voiceEnabled) {
                speak(response);
            }
        } catch (err) {
            console.error('Error generating response:', err);
            setError('I apologize, but I encountered an issue. Please try again or call us at (918) 553-5746.');
        } finally {
            setIsLoading(false);
        }
    };

    // Demo responses when no API key is configured
    const getDemoResponse = (input: string): string => {
        const lower = input.toLowerCase();

        if (lower.includes('crisis') || lower.includes('suicide') || lower.includes('hurt myself') || lower.includes('end my life')) {
            return "I'm here for you. If you're in crisis, please call 988 (Suicide & Crisis Lifeline) immediately - they're available 24/7. You can also reach SafeHarbor during business hours at (918) 553-5746. You're not alone, and help is available right now.";
        }

        if (lower.includes('book') || lower.includes('appointment') || lower.includes('schedule')) {
            return "I'd be happy to help you schedule an appointment! The fastest way is to call us at (918) 553-5746 - we often have same-week availability. You can also fill out the form on our contact page. Do you have any questions about our services before booking?";
        }

        if (lower.includes('body') && lower.includes('brain')) {
            return "The Body & Brain program is our revolutionary movement therapy for ages 5-18! It combines yoga, dance therapy, martial arts, and adventure activities to help with ADHD, anxiety, depression, and trauma. We've seen 89% reduction in anxiety symptoms after just 8 weeks. Would you like to learn more or schedule an assessment?";
        }

        if (lower.includes('insurance') || lower.includes('medicaid') || lower.includes('soonercare')) {
            return "Great news! We accept Medicaid, SoonerCare, and most major insurance plans. We also offer sliding scale fees for families who need financial assistance. Same-week appointments are often available for Medicaid patients. Would you like to schedule an appointment?";
        }

        if (lower.includes('service') || lower.includes('offer') || lower.includes('help with')) {
            return "We offer individual child therapy (ages 5-12), teen counseling, family therapy, crisis intervention, medication management, group therapy, behavioral assessments, trauma treatment, and the Body & Brain movement program. We specialize in anxiety, ADHD, depression, trauma, and autism. What concerns are you looking to address?";
        }

        if (lower.includes('hour') || lower.includes('open') || lower.includes('when')) {
            return "We're open Monday-Friday 8:00 AM - 6:00 PM and Saturday 9:00 AM - 2:00 PM. For 24/7 crisis support, call 988 (Suicide & Crisis Lifeline).";
        }

        if (lower.includes('location') || lower.includes('where') || lower.includes('address')) {
            return "We're located at 2510 East 15th Street in Tulsa, OK 74104. We serve all Tulsa neighborhoods including Downtown, Midtown, South Tulsa, Brookside, and more. Call (918) 553-5746 for directions!";
        }

        if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
            return "Hello! I'm glad you're here. Whether you're looking for information about our services, the Body & Brain program, or want to schedule an appointment, I'm here to help. What would you like to know?";
        }

        return "I'm here to help! I can tell you about our therapy services, the Body & Brain movement program, insurance options, or help you book an appointment. What would you like to know more about?";
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(inputText);
    };

    return (
        <>
            {/* Floating button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open AI Assistant"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L2 22l5.71-.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5 14l-1.41-1.41-2.59 2.3V10h-2v6.89l-2.59-2.3L7 16l5 5 5-5z" />
                    </svg>
                )}
            </motion.button>

            {/* Chat modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-40 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-4 text-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">SafeHarbor Assistant</h3>
                                        <p className="text-xs text-teal-100">AI-powered support</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                                    className={`p-2 rounded-full transition-colors ${voiceEnabled ? 'bg-white/20 text-white' : 'bg-white/10 text-white/50'}`}
                                    title={voiceEnabled ? 'Disable voice' : 'Enable voice'}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        {voiceEnabled ? (
                                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                        ) : (
                                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="bg-amber-50 border-b border-amber-100 px-4 py-2 text-xs text-amber-800">
                            <strong>Note:</strong> I'm an AI assistant, not a therapist. For professional help, please contact our team.
                        </div>

                        {/* Messages */}
                        <div className="h-[300px] overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${message.role === 'user'
                                                ? 'bg-teal-600 text-white rounded-br-md'
                                                : 'bg-white text-gray-800 shadow-sm rounded-bl-md border border-gray-100'
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
                                        <div className="flex gap-1.5">
                                            <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {error && (
                                <div className="bg-red-50 text-red-700 text-sm px-4 py-2 rounded-lg">
                                    {error}
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Speaking indicator */}
                        {isSpeaking && (
                            <div className="bg-teal-50 border-t border-teal-100 px-4 py-2 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-teal-700">
                                    <div className="flex gap-0.5">
                                        <span className="w-1 h-3 bg-teal-500 rounded-full animate-pulse" />
                                        <span className="w-1 h-4 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
                                        <span className="w-1 h-2 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                                    </div>
                                    Speaking...
                                </div>
                                <button
                                    onClick={stopSpeaking}
                                    className="text-teal-600 hover:text-teal-800 text-sm font-medium"
                                >
                                    Stop
                                </button>
                            </div>
                        )}

                        {/* Input area */}
                        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 bg-white">
                            <div className="flex gap-2 items-center">
                                <button
                                    type="button"
                                    onClick={toggleListening}
                                    disabled={isLoading}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isListening
                                            ? 'bg-red-500 text-white animate-pulse'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    title={isListening ? 'Stop listening' : 'Start voice input'}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
                                    </svg>
                                </button>
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder={isListening ? 'Listening...' : 'Type a message...'}
                                    disabled={isLoading || isListening}
                                    className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !inputText.trim()}
                                    className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </div>
                        </form>

                        {/* Quick actions */}
                        <div className="px-3 pb-3 bg-white">
                            <div className="flex gap-2 overflow-x-auto pb-1">
                                {['Book appointment', 'Body & Brain', 'Services', 'Insurance'].map((action) => (
                                    <button
                                        key={action}
                                        onClick={() => sendMessage(action)}
                                        disabled={isLoading}
                                        className="px-3 py-1.5 bg-gray-100 hover:bg-teal-50 hover:text-teal-700 text-gray-600 text-xs rounded-full whitespace-nowrap transition-colors disabled:opacity-50"
                                    >
                                        {action}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
