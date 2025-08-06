'use client'

import { motion, AnimatePresence } from 'framer-motion'
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
      href: 'tel:918-391-3606',
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
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        {/* Action Items */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute bottom-20 right-0 space-y-3">
              {actions.map((action, index) => (
                <motion.a
                  key={index}
                  href={action.href}
                  onClick={action.onClick}
                  initial={{ opacity: 0, x: 50, scale: 0 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-end group"
                >
                  <span className="mr-3 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {action.label}
                  </span>
                  <div className={`w-14 h-14 bg-gradient-to-br ${action.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}>
                    <span className="text-2xl">{action.icon}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
        >
          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full"
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.7, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Icon */}
          <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Chat Bubble */}
      <AnimatePresence>
        {showChat && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            className="fixed bottom-28 right-6 z-40"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}