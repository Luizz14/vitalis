import { MotiView, View, Image, MotiImage } from 'moti'
import { Button } from './Button'
import { Text } from './Text'

import { useState } from 'react'
import { FadeIn, FadeOut, LinearTransition } from 'react-native-reanimated'
import clsx from 'clsx'
import { MotiPressable } from 'moti/interactions'

export function MedicineCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <MotiPressable onPress={() => setIsExpanded(!isExpanded)}>
      <MotiView
        layout={LinearTransition.springify().damping(20)}
        className={clsx(
          !isExpanded
            ? 'flex-row justify-between'
            : 'flex-1 items-center space-y-4',
          'rounded-3xl border-blue-600 bg-blue-500 px-4 py-3 transition-all ease-in-out dark:border-blue-700 dark:bg-blue-600'
        )}
      >
        <MotiView
          layout={LinearTransition.springify().damping(18)}
          className='flex-1 pr-4'
        >
          <View>
            <Text type='headline' size='2xl' className='text-neutral-50'>
              Losartanna
            </Text>
            <Text type='paragraph' size='sm' className='text-neutral-200'>
              14 hr 30 min
            </Text>
          </View>

          {!isExpanded && (
            <MotiView
              entering={FadeIn.springify().damping(18)}
              exiting={FadeOut.springify().damping(18)}
              className='mt-2 flex-row justify-between'
            >
              {Array.from({ length: 7 }).map((_, index) => (
                <View className='rounded-full bg-blue-400 px-2 py-1 dark:bg-blue-500'>
                  <Text className='text-neutral-200'>S</Text>
                </View>
              ))}
            </MotiView>
          )}
        </MotiView>

        <MotiImage
          layout={LinearTransition.springify().damping(18)}
          source={require('@/assets/images/recipeMedicine.png')}
          //   width={isExpanded ? 126 : 100}
          //   height={isExpanded ? 126 : 100}
          className={clsx(
            'rounded-xl',
            !isExpanded ? 'h-28 w-28' : 'h-40 w-40'
          )}
        />

        {isExpanded && (
          <MotiView
            entering={FadeIn.springify().damping(18)}
            exiting={FadeOut.springify().damping(18)}
          >
            <Button>
              <Text>Tomei o remedio</Text>
            </Button>
          </MotiView>
        )}
      </MotiView>
    </MotiPressable>
  )
}
