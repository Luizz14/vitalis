import { BlurView } from 'expo-blur'
import { Image, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text } from './Text'
import { Avatar } from './Avatar'

export function Header() {
  const insets = useSafeAreaInsets()

  return (
    <BlurView
      style={{ paddingTop: insets.top + 12 }}
      className='absolute z-50 w-full flex-row items-center justify-between border-b-2 border-neutral-100 px-4 pb-2 dark:border-neutral-700'
    >
      <View>
        <Text>Olá,</Text>
        <Text type='headline' size='2xl'>
          Amauri!
        </Text>
      </View>

      <Avatar size='sm' />
    </BlurView>
  )
}
