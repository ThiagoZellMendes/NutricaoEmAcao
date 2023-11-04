import React from 'react';


import { Button, Icon, Text} from './styles'
import { SocialButtonProps } from './props';

export function ButtonComponent ({
  title,
  nameIcon,
  onPress,
}: SocialButtonProps) {
  return (
    <Button onPress={onPress}>
      <Text>
        {title}
      </Text>
      <Icon name={nameIcon} />
    </Button>
  )
}