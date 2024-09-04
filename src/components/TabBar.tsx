import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
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

  const selectedIndex = useSharedValue(state.index)

  const handlePress = (index: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)

    selectedIndex.value = index
    navigation.navigate(state.routes[index].name)
  }

  const paddingBottom = insets.bottom > 0 ? insets.bottom + 8 : 16

  return (
    <View
      className={'flex-row rounded-2xl bg-gray-200 pt-4 dark:bg-neutral-700'}
      style={{
        paddingBottom,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index

        const animatedIconStyle = useAnimatedStyle(() => ({
          transform: [
            { scale: withTiming(isFocused ? 1.2 : 1, { duration: 200 }) },
          ],
        }))

        return (
          <AnimatedTouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={[styles.tabItem, { width: tabWidth }]}
            onPress={() => handlePress(index)}
          >
            <Animated.View
              className='items-center justify-center overflow-hidden rounded-xl px-4 pt-1'
              layout={LinearTransition.springify().damping(18)}
            >
              <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
                {options.tabBarIcon?.({
                  color: isFocused ? '#0b688a' : '#A0A0A0',
                  size: 24,
                  focused: isFocused,
                })}
              </Animated.View>

              <Text size='sm'>{options.title}</Text>
            </Animated.View>
          </AnimatedTouchableOpacity>
        )
      })}
    </View>
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
