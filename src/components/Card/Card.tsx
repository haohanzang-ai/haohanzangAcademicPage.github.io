import React from 'react'

interface CardProps {
  children: React.ReactNode
  padding?: 'sm' | 'md' | 'lg'
  variant?: 'elevated' | 'outlined' | 'plain'
  hoverable?: boolean
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  variant = 'elevated',
  hoverable = false,
  className = '',
}) => {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const variantStyles = {
    elevated: 'bg-white shadow-md rounded-lg',
    outlined: 'bg-white border-2 border-neutral-200 rounded-lg',
    plain: 'bg-transparent rounded-lg',
  }

  const hoverStyles = hoverable ? 'hover:shadow-lg transition-shadow duration-200' : ''

  return (
    <div
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      role="region"
    >
      {children}
    </div>
  )
}
