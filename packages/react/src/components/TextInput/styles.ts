import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'baseline',

  backgroundColor: '$gray900',

  boxSizing: 'border-box',

  padding: '$3 $4',
  border: '2px solid $gray900',
  borderRadius: '$sm',

  '&:focus-within': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  color: '$gray400',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  background: 'transparent',

  width: '100%',

  border: 0,

  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: 'regular',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
