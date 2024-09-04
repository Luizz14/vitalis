import {
  Text as TextPrimitive,
  TextProps as TextPrimitiveProps,
} from 'react-native'

import { tv, VariantProps } from 'tailwind-variants'

const textStyles = tv({
  base: 'text-neutral-800 dark:text-neutral-100',
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-sm'],
      base: ['text-base'],
      lg: ['text-lg'],
      xl: ['text-xl'],
      '2xl': ['text-2xl'],
      '3xl': ['text-3xl'],
      '4xl': ['text-4xl'],
      '5xl': ['text-5xl'],
    },

    type: {
      headline: ['font-bold text-blue-800 dark:text-blue-400'],
      title: ['font-bold text-neutral-600 dark:text-neutral-100'],
      subtitle: ['font-bold text-blue-500 dark:text-blue-500'],
      body: ['font-semibold text-neutral-500 dark:text-neutral-300'],
      paragraph: ['font-normal text-neutral-600 dark:text-neutral-300'],
      link: ['font-normal text-blue-500 dark:text-blue-400'],
      defaultSemiBold: ['font-semibold'],
      span: ['font-light text-neutral-500 dark:text-neutral-400'],
    },
  },
})

type TextVariants = VariantProps<typeof textStyles>

interface TextProps extends TextVariants, TextPrimitiveProps {}

export function Text({ size = 'base', type = 'body', ...props }: TextProps) {
  return <TextPrimitive className={textStyles({ size, type })} {...props} />
}
