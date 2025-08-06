'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

interface AnimatedButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: React.ReactNode
  animate?: boolean
}

export default function AnimatedButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  animate = true
}: AnimatedButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) onClick()
    
    if (animate) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()
      
      setRipples([...ripples, { x, y, id }])
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== id))
      }, 1000)
    }
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#EE6C4D] to-[#F38375] text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-[#0A9396] to-[#005F73] text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-teal-500 text-teal-600 hover:bg-teal-50',
    ghost: 'text-gray-700 hover:bg-gray-100'
  }

  const buttonContent = (
    <motion.span
      className={`relative inline-flex items-center justify-center font-bold rounded-full overflow-hidden transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ width: 300, height: 300, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      ))}

      {/* Content */}
      <span className="relative z-10 flex items-center">
        {children}
        {icon && (
          <motion.span
            className="ml-2"
            animate={animate ? { x: [0, 3, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {icon}
          </motion.span>
        )}
      </span>

      {/* Glow Effect */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#EE6C4D] to-[#F38375] rounded-full blur-xl opacity-50"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.span>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}