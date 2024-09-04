import { Text } from '@/components/Text'
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { tv } from 'tailwind-variants'

const myBadgeContent = tv({
  base: 'flex-row rounded-2xl border px-4 py-2 transition-all ease-linear',
  variants: {
    isSelected: {
      true: 'border-blue-200 bg-blue-400',
      false: 'border-neutral-200 bg-neutral-100',
    },
  },
})

const myBadgeText = tv({
  variants: {
    isSelected: {
      true: 'text-blue-50',
      false: 'text-blue-700',
    },
  },
})

interface HourBadgeProps extends TouchableOpacityProps {
  hour: string
  isSelected?: boolean
}

export function HourBadge({
  hour,
  isSelected = false,
  ...props
}: HourBadgeProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={myBadgeContent({ isSelected })}
      {...props}
    >
      <Text size='lg' className={myBadgeText({ isSelected })}>
        {hour}
      </Text>
    </TouchableOpacity>
  )
}
