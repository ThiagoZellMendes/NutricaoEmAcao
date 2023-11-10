import React from "react"

import { SocialButtonProps } from "./props"
import { Button, Icon, Text } from "./styles"

export function ButtonComponent({
  title,
  nameIcon,
  onPress,
  type,
}: SocialButtonProps) {
  return (
    // <ShadownButton>
    //   <>
        <Button onPress={onPress} type={type}>
          <Text>{title}</Text>
          <Icon name={nameIcon} />
        </Button>
    //   </>
    // </ShadownButton>
  )
}
