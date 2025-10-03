import { Flex, Spacer, Box, Text, HStack, Button, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


export const Navbar = () => {

    const  {colorMode, toggleColorMode}  = useColorMode();

    return (
        <Box maxW={1140} margin={"auto"}>

            <Flex p={4} height={16}>

                <Box>
                    <Text fontSize={{base: 20, md: 28}} fontWeight={600} textTransform={"uppercase"} textAlign={"center"} bgGradient={"linear(to-r, #7928CA, #FF0080)"} bgClip={"text"}>
                    <Link to={"/"}>Online Store 🛒</Link>
                    </Text>
                </Box>

                <Spacer />
                
                <HStack>
                    <Button>
                        <Link to={"/create"}>
                            <CiSquarePlus fontSize={20} />
                        </Link>
                    </Button>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <IoMoon size={20}/> : <LuSun size={20}/>}
                    </Button>
                </HStack>
            </Flex>
        </Box>
  )
}
