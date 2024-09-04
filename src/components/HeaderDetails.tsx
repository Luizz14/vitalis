import { Link } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'
import { TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Text } from './Text'
import { tv, VariantProps } from 'tailwind-variants'

const headerVariants = tv({
  variants: {
    type: {
      primary: 'text-yellow-500',
      secondary: 'text-neutral-50',
    },
  },
})

type HeaderVariantsProps = VariantProps<typeof headerVariants>

interface HeaderDetailsProps extends HeaderVariantsProps {}

export default function HeaderDetails({
  type = 'primary',
}: HeaderDetailsProps) {
  const insets = useSafeAreaInsets()

  return (
    <View
      className='flex-row items-center justify-between px-4 py-2'
      style={{ paddingTop: insets.top + 12 }}
    >
      <Link href={'..'} asChild>
        <TouchableOpacity activeOpacity={0.8} className='flex-row items-center'>
          <ChevronLeft
            className={
              type === 'primary' ? 'text-yellow-500' : 'text-neutral-50'
            }
          />

          <Text size='sm' type='body' className={headerVariants({ type })}>
            Voltar
          </Text>
        </TouchableOpacity>
      </Link>

      {/* <Text type='headline' className='text-blue-800'>
          Detalhes do médico
        </Text> */}
    </View>
  )
}
