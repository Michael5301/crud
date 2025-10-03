import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage.jsx'
import { Createpage } from './pages/Createpage.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Box, useColorModeValue } from '@chakra-ui/react'


function App() {

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} minH={"100vh"}>

                <Navbar />

                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/create" element={<Createpage />} />
                </Routes>
            </Box>
        </>
    )
}

export default App

