import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Text } from '@/components/Text'
import { useUserStore } from '@/stores/user-store'
import { Redirect } from 'expo-router'
import { AtSign, Phone, User } from 'lucide-react-native'
import { MotiView } from 'moti'
import {
  StyleSheet,
  Image,
  Platform,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { FadeInDown } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as ImagePicker from 'expo-image-picker'
import { saveUserStorage } from '@/storage/user-storage'

export default function Profile() {
  const insets = useSafeAreaInsets()
  const { user, logout, loadUser } = useUserStore()

  function handleLogout() {
    logout()
    return <Redirect href={'/'} />
  }

  async function handleChangeProfilePicture() {
    await pickImage()
    loadUser()
  }

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled && user) {
      await saveUserStorage({
        ...user,
        avatar: result.assets[0].uri,
      })
    }
  }

  return (
    <View className='flex-1 bg-neutral-50 dark:bg-neutral-900'>
      <MotiView
        className='flex-1 p-4'
        style={{ paddingTop: insets.top + 12 }}
        entering={FadeInDown.springify().damping(18)}
      >
        <ScrollView
          className='flex-1 pt-20'
          showsVerticalScrollIndicator={false}
        >
          <View className='items-center justify-center space-y-2'>
            <Avatar size='lg' />

            <TouchableOpacity
              onPress={handleChangeProfilePicture}
              activeOpacity={0.8}
            >
              <Text type='link'>Editar foto</Text>
            </TouchableOpacity>
          </View>

          <Input
            inputIcon={User}
            label='Nome'
            value={user?.firstName + ' ' + user?.lastName}
          />

          <Input
            inputIcon={AtSign}
            label='Email'
            placeholder='email@email.com'
            value={user?.email}
          />

          <Input inputIcon={Phone} label='Telefone' value={user?.phone} />
        </ScrollView>

        <Button
          onPress={handleLogout}
          className='rounded-2xl border-red-500 bg-transparent py-2'
        >
          <Text type='title' size='xl' className='text-red-500'>
            Sair
          </Text>
        </Button>
      </MotiView>
    </View>
  )
}
