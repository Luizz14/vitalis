import { Image, ScrollView, TouchableOpacity, View } from 'react-native'

import { MotiView } from 'moti'
import { FadeInDown } from 'react-native-reanimated'
import { Text } from '@/components/Text'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Button } from '@/components/Button'
import { BlurView } from 'expo-blur'

export default function HomeScreen() {
  const insets = useSafeAreaInsets()

  return (
    <View className='flex-1 bg-neutral-50 dark:bg-neutral-900'>
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

        <Image
          source={{
            uri: 'https://github.com/luizz14.png',
          }}
          width={42}
          height={42}
          className='rounded-full'
        />
      </BlurView>

      <MotiView
        className='flex-1 px-4'
        style={{ paddingTop: insets.top + 12 }}
        entering={FadeInDown.springify().damping(18)}
      >
        <ScrollView
          className='flex-1 gap-6 pt-20'
          showsVerticalScrollIndicator={false}
        >
          <View>
            <View className='mb-4 flex-row items-center gap-4'>
              <Text size='xl' type='title'>
                Serviços
              </Text>

              <View className='h-1 flex-1 rounded-full bg-yellow-300' />
            </View>

            <View className='flex-row gap-4'>
              <TouchableOpacity
                activeOpacity={0.8}
                className='flex-1 items-center justify-between rounded-2xl border-2 border-neutral-200 px-2 py-4 dark:border-neutral-700 dark:bg-neutral-800'
              >
                <Image
                  source={require('@/assets/images/consult.png')}
                  width={42}
                  height={42}
                  className='rounded-full'
                />
                <Text size='sm'>Consultas</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                className='flex-1 items-center justify-between rounded-2xl border-2 border-neutral-200 px-2 py-4 dark:border-neutral-700 dark:bg-neutral-800'
              >
                <Image
                  source={require('@/assets/images/medicine.png')}
                  width={42}
                  height={42}
                  className='rounded-full'
                />
                <Text size='sm'>Remédios</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                className='flex-1 items-center justify-between rounded-2xl border-2 border-neutral-200 px-2 py-4 dark:border-neutral-700 dark:bg-neutral-800'
              >
                <Image
                  source={require('@/assets/images/results.png')}
                  width={42}
                  height={42}
                  className='rounded-full'
                />
                <Text size='sm'>Resultados</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View className='mb-4 flex-row items-center gap-4'>
              <Text size='xl' type='title'>
                Próximo remédio
              </Text>

              <View className='h-1 flex-1 rounded-full bg-yellow-300' />
            </View>

            <Button className='flex-row justify-between'>
              <View className='flex-1 pr-4'>
                <View>
                  <Text type='headline' size='2xl' className='text-neutral-50'>
                    Losasrtanna
                  </Text>
                  <Text type='paragraph' size='sm' className='text-neutral-200'>
                    14 hr 30 min
                  </Text>
                </View>

                <View className='mt-2 flex-row justify-between'>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <View className='rounded-full bg-blue-400 px-2 py-1 dark:bg-blue-500'>
                      <Text className='text-neutral-200'>S</Text>
                    </View>
                  ))}
                </View>
              </View>

              <Image
                source={require('@/assets/images/recipeMedicine.png')}
                width={93}
                height={93}
                className='rounded-xl'
              />
            </Button>
          </View>

          <View>
            <View className='mb-4 flex-row items-center gap-4'>
              <View>
                <Text className='-mb-2' size='lg' type='title'>
                  Próximos
                </Text>
                <Text size='xl' type='title'>
                  Compromissos
                </Text>
              </View>

              <View className='h-1 flex-1 rounded-full bg-yellow-300' />
            </View>

            <Button className='flex-row justify-between'>
              <View className='flex-1 pr-4'>
                <View>
                  <Text type='headline' size='2xl' className='text-neutral-50'>
                    Neurologista
                  </Text>
                  <Text type='paragraph' size='sm' className='text-neutral-200'>
                    30/08/2024 ás 14:30
                  </Text>

                  <Text type='body' size='base' className='text-neutral-200'>
                    Dr. José da Silva
                  </Text>
                </View>
              </View>

              <Image
                source={require('@/assets/images/doctor.png')}
                width={93}
                height={93}
                className='rounded-xl'
              />
            </Button>
          </View>
        </ScrollView>
      </MotiView>
    </View>
  )
}
