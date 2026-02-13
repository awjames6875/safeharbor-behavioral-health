'use client'

import { useState, useEffect } from 'react'

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    // Show chat bubble after 5 seconds
    const timer = setTimeout(() => setShowChat(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const actions = [
    {
      icon: '📞',
      label: 'Call Now',
      href: 'tel:918-553-5746',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '💬',
      label: 'Live Chat',
      onClick: () => alert('Chat feature coming soon!'),
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: '📅',
      label: 'Schedule',
      href: '/contact',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🆘',
      label: 'Crisis Help',
      href: '/resources/crisis-help',
      color: 'from-red-500 to-orange-500'
    }
  ]

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Action Items */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 space-y-3">
            {actions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                onClick={action.onClick}
                className="flex items-center justify-end group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {action.label}
                </span>
                <div className={`w-14 h-14 bg-gradient-to-br ${action.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95`}>
                  <span className="text-2xl">{action.icon}</span>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white relative overflow-hidden group hover:scale-110 active:scale-95 transition-transform ${isOpen ? 'rotate-45' : ''}`}
        >
          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full animate-ping" />
          
          {/* Icon */}
          <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Chat Bubble */}
      {showChat && !isOpen && (
        <div className="fixed bottom-28 right-6 z-40">
          <div className="relative animate-bounce">
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs">
              <button
                onClick={() => setShowChat(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs hover:bg-gray-300"
              >
                ✕
              </button>
              <p className="text-sm font-semibold text-gray-800 mb-1">
                Need help? We're here! 💚
              </p>
              <p className="text-xs text-gray-600">
                Click to chat, call, or schedule
              </p>
            </div>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45" />
          </div>
        </div>
      )}
    </>
  )
}