import { Button } from '@/components/Button'
import HeaderDetails from '@/components/HeaderDetails'
import { Text } from '@/components/Text'
import { Calendar, toDateId } from '@marceloterreiro/flash-calendar'
import { Link } from 'expo-router'

import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { HourBadge } from './components/HourBadge'

const today = toDateId(new Date())

export default function ScheduleConsult() {
  const [selectedDate, setSelectedDate] = useState(today)
  const [selectedHour, setSelectedHour] = useState('')

  const hours = ['10:20', '11:00', '12:20', '13:20', '14:20', '15:20']

  return (
    <View className='flex-1 bg-neutral-50 dark:bg-neutral-900'>
      <HeaderDetails />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className='flex-1 space-y-4 p-4'
      >
        <View>
          <Text type='headline' size='xl'>
            Nova consulta
          </Text>
          <Text type='paragraph' size='sm'>
            Selecione uma data e horário disponível para realizar uma consulta.
          </Text>
        </View>

        <View className='rounded-3xl border border-blue-200 bg-blue-100 p-4'>
          <Calendar
            calendarActiveDateRanges={[
              {
                startId: selectedDate,
                endId: selectedDate,
              },
            ]}
            calendarMonthId={today}
            calendarMinDateId='2024-08-05'
            calendarMaxDateId='2024-09-20'
            onCalendarDayPress={setSelectedDate}
            calendarFormatLocale='pt-BR'
          />
        </View>

        <View className='space-y-2'>
          <Text type='title' size='xl'>
            Horários disponíveis
          </Text>

          <View className='flex-row flex-wrap gap-2'>
            {hours.map((hour) => (
              <HourBadge
                key={hour}
                hour={hour}
                isSelected={selectedHour === hour}
                onPress={() => setSelectedHour(hour)}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <View className='p-4'>
        <Link href={'/schedule-consult'} asChild>
          <Button className='bottom-0 mb-4'>
            <Text type='title' className='text-neutral-50'>
              Marcar consulta
            </Text>
          </Button>
        </Link>
      </View>
    </View>
  )
}
