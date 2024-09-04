import { Text } from '@/components/Text'
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

export default function Notifications() {
  const insets = useSafeAreaInsets()

  return (
    <View className='flex-1 bg-neutral-50 dark:bg-neutral-900'>
      <MotiView
        className='flex-1 px-4'
        style={{ paddingTop: insets.top + 12 }}
        entering={FadeInDown.springify().damping(18)}
      >
        <ScrollView
          className='flex-1 gap-6 pt-20'
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <View>
            <View className='mb-4 flex-row items-center gap-4'>
              <Text size='xl' type='title'>
                Alertas
              </Text>

              <View className='h-1 flex-1 rounded-full bg-yellow-300' />
            </View>

            <View className='gap-4'>
              {Array.from({ length: 7 }).map((_, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  className='flex-1 flex-row items-center rounded-2xl bg-blue-100 px-2 py-4 dark:bg-blue-950'
                >
                  <Image
                    source={require('@/assets/images/consult.png')}
                    width={42}
                    height={42}
                    className='rounded-full'
                  />

                  <View>
                    <View className='flex-row items-center justify-between'>
                      <Text type='subtitle' size='sm'>
                        Lembrete de medicação
                      </Text>
                      <Text size='xs' type='span'>
                        Hoje
                      </Text>
                    </View>

                    <View className=''>
                      <Text size='xl' type='title'>
                        Remédio: Losartanna
                      </Text>
                      <Text size='sm' type='paragraph'>
                        Hora de tomar sua medicação, Amauri.
                      </Text>
                      <Text size='sm' type='paragraph'>
                        Mantenha sua saúde em dia!
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </MotiView>
    </View>
  )
}
