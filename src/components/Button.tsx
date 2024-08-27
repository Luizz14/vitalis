import { Pressable } from 'react-native'
import { MotiPressable, MotiPressableProps } from 'moti/interactions'
import { useMemo } from 'react'
import { styled } from 'nativewind'

interface ButtonProps extends MotiPressableProps {
  className?: string
}
const MotiPressableStyled = styled(MotiPressable)

export function Button({ children, ...props }: ButtonProps) {
  return (
    <MotiPressableStyled
      className='items-center rounded-3xl border-blue-600 bg-blue-500 px-4 py-3 dark:border-blue-700 dark:bg-blue-600'
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
