import { Tabs } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { CustomTabBar } from '@/components/TabBar'
import { Icon } from '@/components/Icon'
import { Bell, Home, UserCircle } from 'lucide-react-native'
import { Image, View } from 'react-native'
import { BlurView } from 'expo-blur'
import { Text } from '@/components/Text'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Header } from '@/components/Header'

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const insets = useSafeAreaInsets()

  return (
    <View className='flex-1 bg-neutral-50 dark:bg-neutral-900'>
      <Header />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Início',
            tabBarIcon: ({ color, focused }) => (
              <Icon icon={Home} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name='notifications'
          options={{
            title: 'Alertas',
            tabBarIcon: ({ color, focused }) => (
              <Icon icon={Bell} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name='profile'
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, focused }) => (
              <Icon icon={UserCircle} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  )
}
