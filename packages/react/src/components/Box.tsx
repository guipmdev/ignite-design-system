import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  backgroundColor: '$gray800',

  padding: '$6',
  border: '1px solid $gray600',
  borderRadius: '$md',
})

export type BoxProps = ComponentProps<typeof Box>

Box.displayName = 'Box'
