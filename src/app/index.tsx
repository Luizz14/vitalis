import { View, Image } from 'react-native'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { MotiView } from 'moti'
import { FadeInDown, FadeInUp } from 'react-native-reanimated'
import { Link } from 'expo-router'

export default function OnBoarding() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/vitalis.png')}
          className='absolute bottom-0 h-[200px] w-[318px] self-center'
        />
      }
    >
      <MotiView entering={FadeInDown.springify().damping(18)}>
        <View className='items-center'>
          <Text size='4xl' type='headline'>
            Vitalis
          </Text>

          <Text size='base' type='subtitle'>
            Sua saude, nossa prioridade
          </Text>
          {/* <Text size='xl' type='subtitle'>
            nossa prioridade
          </Text> */}

          <Text className='my-6'>
            Monitore sua saúde, gerencie seu dia e mantenha-se conectado com
            facilidade.
          </Text>
        </View>

        <Link href={'/(auth)/signin'} asChild>
          <Button>
            <Text type='title' size='xl' className='text-neutral-50'>
              Começar
            </Text>
          </Button>
        </Link>
      </MotiView>
    </ParallaxScrollView>
  )
}
