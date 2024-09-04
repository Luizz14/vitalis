import { useUserStore } from '@/stores/user-store'
import { Redirect, Stack } from 'expo-router'
import { useEffect } from 'react'
import { View } from 'react-native'

export default function AppLayout() {
  const { isSession } = useUserStore()

  if (!isSession) return <Redirect href='/signin' />

  return (
    <View className='flex-1 bg-blue-300'>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'ios',
        }}
      />
    </View>
  )
}
