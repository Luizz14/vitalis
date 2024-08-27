import { Tabs } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { CustomTabBar } from '@/components/TabBar'
import { Icon } from '@/components/Icon'
import { Home, UserCircle } from 'lucide-react-native'
import { View } from 'react-native'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <View className='flex-1 bg-neutral-50 dark:bg-neutral-900'>
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
          name='explore'
          options={{
            title: 'Explore',
            tabBarIcon: ({ color, focused }) => (
              <Icon icon={UserCircle} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  )
}
