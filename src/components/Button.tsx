import { Pressable } from 'react-native'
import { MotiPressable, MotiPressableProps } from 'moti/interactions'
import { useMemo } from 'react'
import { styled } from 'nativewind'

interface ButtonProps extends MotiPressableProps {}

const MotiPressableStyled = styled(MotiPressable)

export function Button({ children, ...props }: ButtonProps) {
  return (
    <MotiPressableStyled
      className='bg-blue-500 dark:bg-blue-600 px-4 py-3 rounded-3xl items-center flex-1 border-blue-600 dark:border-blue-700'
      animate={useMemo(
        () =>
          ({ pressed }) => {
            'worklet'

            return {
              borderWidth: 3,
              borderBottomWidth: pressed ? 3 : 5,
              marginTop: pressed ? 2 : 0,
            }
          },
        []
      )}
      {...props}
    >
      {children}
    </MotiPressableStyled>
  )
}
