import {
    Box,
    Text,
    HStack,
    Button,
    useColorModeValue,
    useToast,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    VStack,
    Input,
} from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { useProductStore } from "../store/product.js"
import { useState } from "react"




const ProductCard = ({ product }) => {

    //editing product, modal etc
    const toast = useToast();
    const { updateProduct, deleteProduct } = useProductStore();
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleUpdateProduct = async (pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        if (success) {
            onClose();
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }

     }


    // deleting product logic & notification
    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        if (success) {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
    }




    return (
        <Box
            shadow={'lg'}
            overflow={'hidden'}
            transition={'all 0.3s ease-in-out'}
            rounded={'lg'}
            _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
            bg={useColorModeValue('white', 'gray.800')}
            textColor={useColorModeValue('gray.600', 'gray.200')}
        >
            <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'} />
            <Box p={4}>
                <Text as={'h3'}>{product.name}</Text>
                <Text>{product.price} kr</Text>
            </Box>
            <HStack pl={4} pb={4}>
                <Button onClick={onOpen} >Edit 🖋️</Button>
                <Button onClick={() => handleDeleteProduct(product._id)}>Delete 🗑️</Button>
            </HStack>

            {/* modal for editing */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    bg={useColorModeValue("white", "gray.700")}
                    textColor={useColorModeValue("gray.600", "gray.100")}
                    shadow={"md"}
                    rounded={"md"}
                >
                    <ModalHeader>Update Product information</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        
                        <Box w={"full"} p={4} >
                            <VStack spacing={4}>
                                <Input
                                    placeholder="Product Name"
                                    name="name"
                                    value={updatedProduct.name}
                                    onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value,})}

                                    />
                                <Input
                                    placeholder="Price"
                                    name="price"
                                    type="number"
                                    value={updatedProduct.price}
                                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value, })}
                                     />
                                <Input
                                    placeholder="Product Image Url"
                                    name="image"
                                    value={updatedProduct.image}
                                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value, })}
                                     />
                            </VStack>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={() => handleUpdateProduct(product._id, updatedProduct)} >
                            Save
                        </Button>
                    </ModalFooter>

                </ModalContent>
            </Modal>

        </Box>
    )
}

export default ProductCard