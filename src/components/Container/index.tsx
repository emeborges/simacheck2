import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const color = { light: 'black', dark: 'white' }

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      color={color[colorMode]}
      {...props}
    />
  )
}

export default Container
