import { AtSign } from 'lucide-react-native'
import { MotiView } from 'moti'

import { TextInput, TextInputProps } from 'react-native'
import { Icon } from '@/components/Icon'

interface InputProps extends TextInputProps {}

export function Input({ ...props }: InputProps) {
  return (
    <MotiView className='flex-row border-2 border-blue-600 rounded-3xl px-6 py-3'>
      {/* <Icon size={24} /> */}
      <TextInput className='' {...props} />
    </MotiView>
  )
}
