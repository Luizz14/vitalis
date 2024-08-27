import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  LinearTransition,
  interpolateColor,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import * as Haptics from 'expo-haptics'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useColorScheme } from 'nativewind'
import { Text } from './Text'

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity)

export const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const tabWidth = state.routes.length > 4 ? 60 : 80
  const insets = useSafeAreaInsets()
  const { colorScheme } = useColorScheme()

  const borderInativeColor = colorScheme === 'dark' ? '#1e1e1e' : '#f6f6f6'
  const borderActiveColor = colorScheme === 'dark' ? '#454545' : '#e7e7e7'

  const selectedIndex = useSharedValue(state.index)

  const handlePress = (index: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)

    selectedIndex.value = index
    navigation.navigate(state.routes[index].name)
  }

  const paddingBottom = insets.bottom > 0 ? insets.bottom + 8 : 16

  return (
    <Animated.View
      layout={LinearTransition.springify(18)}
      className={'flex-row rounded-2xl bg-gray-100 pt-4 dark:bg-neutral-700'}
      style={[
        {
          paddingBottom,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index

        const animatedIconStyle = useAnimatedStyle(() => ({
          transform: [
            { scale: withTiming(isFocused ? 1.2 : 1, { duration: 200 }) },
          ],
        }))

        const animatedLabelStyle = useAnimatedStyle(() => ({
          opacity: withTiming(isFocused ? 1 : 0.5, { duration: 200 }),
          // transform: [
          //   { translateY: withTiming(isFocused ? 0 : 8, { duration: 200 }) },
          // ],
        }))

        return (
          <AnimatedTouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={[styles.tabItem, { width: tabWidth }]}
            onPress={() => handlePress(index)}
          >
            <Animated.View
              className='flex-row items-center justify-center gap-2 overflow-hidden rounded-xl p-2 px-4'
              layout={LinearTransition.springify().damping(18)}
            >
              <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
                {options.tabBarIcon?.({
                  color: isFocused ? '#0b688a' : '#A0A0A0',
                  size: 24,
                  focused: isFocused,
                })}
              </Animated.View>

              <Text>{options.tabBarLabel as string}</Text>
            </Animated.View>
          </AnimatedTouchableOpacity>
        )
      })}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 4,
    overflow: 'hidden',
  },
})
