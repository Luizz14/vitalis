import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Text } from '@/components/Text'
import { Link } from 'expo-router'
import { AtSign, LockKeyhole } from 'lucide-react-native'
import { MotiView } from 'moti'
import { TouchableOpacity, View } from 'react-native'
import { FadeInDown } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function SignIn() {
  const insets = useSafeAreaInsets()

  return (
    <View
      className='flex-1 bg-neutral-50 px-4 dark:bg-neutral-900'
      style={{ paddingTop: insets.top + 12 }}
    >
      <MotiView entering={FadeInDown.springify().damping(18)}>
        <View className='my-4'>
          <View className='flex-row items-center gap-4'>
            <Text type='headline' size='3xl'>
              Login
            </Text>

            <View className='h-1 flex-1 rounded-full bg-blue-500' />
          </View>

          <Text size='sm'>Acesse sua conta e mantenha sua saúde em ordem.</Text>
        </View>

        <View>
          <Input
            label='Email'
            inputIcon={AtSign}
            placeholder='email@email.com'
          />

          <Input
            label='Senha'
            inputIcon={LockKeyhole}
            placeholder='Sua senha aqui'
          />
        </View>

        <View className='py-4'>
          <Link asChild href={'/(tabs)/'}>
            <Button>
              <Text type='title' size='xl' className='text-neutral-50'>
                Entrar
              </Text>
            </Button>
          </Link>

          <View className='my-4 items-center'>
            <Text>Esqueceu sua senha?</Text>

            <Text className='mt-4'>
              Ainda não tem uma conta?{' '}
              <TouchableOpacity activeOpacity={0.8} className='-mt-1'>
                <Text type='link'>Cadastre-se</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </MotiView>
    </View>
  )
}
