import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { View } from 'react-native'
import { useUserStore } from '@/stores/user-store'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  })

  const { loadUser } = useUserStore()

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  useEffect(() => {
    loadUser()
  }, [])

  if (!loaded) {
    return null
  }

  return (
    <View className='flex-1 bg-neutral-50 dark:bg-neutral-900'>
      <Stack
        screenOptions={{ headerShown: false }}
        initialRouteName='OnBoarding'
      >
        <Stack.Screen name='(app)' options={{ headerShown: false }} />
        <Stack.Screen name='+not-found' />
      </Stack>
    </View>
  )
}
