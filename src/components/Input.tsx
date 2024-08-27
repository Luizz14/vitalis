import { AtSign, Home, LucideIcon } from 'lucide-react-native'
import { MotiView } from 'moti'

import { TextInput, TextInputProps, View } from 'react-native'
import { Icon } from '@/components/Icon'
import { Text } from './Text'

interface InputProps extends TextInputProps {
  inputIcon?: LucideIcon
  label?: string
}

export function Input({ inputIcon: InputIcon, label, ...props }: InputProps) {
  return (
    <View>
      {label && <Text className='ml-2 font-semibold'>{label}</Text>}
      <MotiView className='flex-row space-x-2 rounded-3xl border-2 border-blue-600 px-4 py-3'>
        {InputIcon && <Icon icon={InputIcon} size={20} />}
        <TextInput className='font-semibold text-neutral-600' {...props} />
      </MotiView>
    </View>
  )
}
