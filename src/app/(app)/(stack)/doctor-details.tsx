import { Calendar, toDateId } from '@marceloterreiro/flash-calendar'

import { Button } from '@/components/Button'
import { Text } from '@/components/Text'
import { Link } from 'expo-router'
import { ChevronLeft, MessageCircle, Phone } from 'lucide-react-native'
import { Image, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useState } from 'react'
import HeaderDetails from '@/components/HeaderDetails'

export default function DoctorDetails() {
  const insets = useSafeAreaInsets()

  return (
    <View className='flex-1 bg-blue-400'>
      <HeaderDetails type='secondary' />

      <View className='items-center gap-4 py-8'>
        <Image
          source={{
            uri: 'https://github.com/luizz14.png',
          }}
          width={142}
          height={142}
          className='rounded-full'
        />

        <View className='items-center'>
          <Text type='title' className='text-neutral-50 dark:text-neutral-100'>
            Dr. Albert Cunha
          </Text>

          <Text type='span' className='text-neutral-100 dark:text-neutral-200'>
            Ortopedista
          </Text>
        </View>

        <View className='flex-row space-x-8'>
          <TouchableOpacity activeOpacity={0.8} className='items-center'>
            <View className='rounded-full bg-neutral-50 p-4'>
              <Phone color={'#252525'} />
            </View>

            <Text className='text-neutral-100 dark:text-neutral-200'>
              Ligar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} className='items-center'>
            <View className='rounded-full bg-neutral-50 p-4'>
              <MessageCircle color={'#252525'} />
            </View>

            <Text className='text-neutral-100 dark:text-neutral-200'>
              Mensagem
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className='-mt-6 flex-1 rounded-3xl bg-neutral-50 p-4 pt-6 dark:bg-neutral-900'>
        <View className='flex-1'>
          <Text type='title' size='xl'>
            Sobre o médico
          </Text>

          <Text type='paragraph' size='base'>
            Dr. Albert Cunha é um cardiologista experiente que cuida da saúde do
            seu coração. Ele oferece orientação para manter a pressão arterial e
            o colesterol em níveis saudáveis.
          </Text>

          <Text type='headline' size='lg' className='mt-4'>
            Consultas
          </Text>

          <Text type='paragraph' size='base'>
            Disponível para consultas domiciliares e no consultório.
          </Text>
        </View>

        <Link href={'/schedule-consult'} asChild>
          <Button className='mb-4'>
            <Text type='title' className='text-neutral-50'>
              Agendar consulta
            </Text>
          </Button>
        </Link>
      </View>
    </View>
  )
}
