import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',

  boxSizing: 'border-box',
  resize: 'vertical',
  minHeight: 80,
  padding: '$3 $4',

  border: '2px solid $gray900',
  borderRadius: '$sm',

  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',

  '&:focus': {
    borderColor: '$ignite300',
    outline: 0,
  },

  '&:disabled': {
    opacity: 0.5,

    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = 'TextArea'
