import { LucideIcon } from 'lucide-react-native'
import { styled } from 'nativewind'
import { ReactNode } from 'react'

interface IconProps {
  icon: LucideIcon
  size?: number
  strokeWidth?: number
  className?: string
  color?: string
}

export function Icon({
  icon: Icon,
  className = 'text-neutral-500',
  size = 24,
  strokeWidth = 2,
  color,
}: IconProps) {
  return (
    <Icon
      strokeWidth={strokeWidth}
      size={size}
      className={className}
      color={color}
    />
  )
}
