import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  display: 'inline-block',

  width: '$16',
  height: '$16',
  overflow: 'hidden',

  borderRadius: '$full',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '$gray600',
  color: '$gray800',

  width: '100%',
  height: '100%',

  svg: {
    width: '$6',
    height: '$6',
  },
})
