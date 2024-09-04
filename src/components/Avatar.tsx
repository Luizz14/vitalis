import { useUserStore } from '@/stores/user-store'
import { User } from 'lucide-react-native'
import { Image, View } from 'react-native'

interface AvatarProps {
  size: 'sm' | 'lg'
}

enum AvatarSize {
  sm = 48,
  lg = 128,
}

enum IconSize {
  sm = 16,
  lg = 68,
}

export function Avatar({ size }: AvatarProps) {
  const { user } = useUserStore()

  return (
    <View className='items-center justify-center'>
      {user?.avatar ? (
        <Image
          source={{
            uri: user.avatar,
          }}
          width={AvatarSize[size]}
          height={AvatarSize[size]}
          className='rounded-full'
        />
      ) : (
        <View
          className={`items-center justify-center rounded-full bg-neutral-200 p-4`}
          style={{ height: AvatarSize[size], width: AvatarSize[size] }}
        >
          <User size={IconSize[size]} className='text-blue-500' />
        </View>
      )}
    </View>
  )
}
