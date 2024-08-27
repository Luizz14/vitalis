import { icons } from 'lucide-react-native'
import { styled } from 'nativewind'

interface IconProps {
  name: string
  color?: string
  size?: number
}

// const IconStyled = styled

export function Icon({ name, color, size }: IconProps) {
  const LucideIcon = icons[name]

  return <LucideIcon color={color} size={size} />
}
