
import './App.css';
import { Flex, Spacer } from '@chakra-ui/react'
import { Box, Square, Center } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'
import * as React from 'react'
import { 
  ChakraProvider, 
  Input, InputGroup,
  Stack,
  InputLeftAddon,
  InputRightAddon,
  Avatar, AvatarBadge, AvatarGroup,
  Wrap, WrapItem,
  Checkbox, CheckboxGroup,
  Card, CardHeader, CardBody, CardFooter,
  Image, Heading,
  Button, ButtonGroup,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
    } from '@chakra-ui/react'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <ChakraProvider>
      

    
      <button type="button" color="white" fontFamily= "Arial">Click Me!</button>
      <Text
  bgGradient='linear(to-l, #E95400, #2D379D)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
><center>
  WELCOME to the GT BSO CALENDAR</center>
</Text>
<center><img src= "https://1000logos.net/wp-content/uploads/2019/08/Georgia-Tech-Yellow-Jackets-basketball-logo.jpg" width={300} height={30}></img></center>
      <Box w='100%' h='200px' bgGradient='linear(to-l, #2D379D, #E95400)' />

      

      <Text fontSize='md'></Text>
      <Box height ="10px"></Box>
      <Text fontSize={40} color={'white'} fontFamily={'Calibri'} fontWeight={"extrabold"}><center>Welcome</center></Text>
      
      <Text fontSize={40} color={'white'} fontFamily={'Calibri'} fontWeight={"extrabold"}><center>to the new organized page to sort through your favorite BSO GT Clubs!</center></Text>
      <Box maxW="70PX" mx="auto" />
      
      <Flex color='white'>
  <Center w='100%' bg='#E95400'>
    <Text color = 'white' fontWeight='extrabold' fontSize={'24px'}>With all the numerous events provided by the Georgia Tech's Black Student Organizations, organizing this with your life may be difficult. Stop the hassle of the constant emails of the BSO's and use BSO Search.</Text>
  </Center>
</Flex>

      
    </ChakraProvider>
    
  );
}

export default App;
