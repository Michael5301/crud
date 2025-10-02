import {
    Box,
    Container,
    VStack,
    Heading,
    useColorModeValue,
    Input,
    Button,
    useToast
} from "@chakra-ui/react"
import { useState } from "react"
import { useProductStore } from "../store/product.js"


export const Createpage = () => {

    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    // creating product function
    const { createProduct } = useProductStore()
    const handleAddProduct = async() => {
        const { success, message } = await createProduct(newProduct)
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        }
        // reset form
        setNewProduct({
            name: "",
            price: "",
            image: "",
        })
    };


    const toast = useToast()

  return (
      <Box maxW={1140} margin={"auto"} p={4} py={20}>
          <Container maxW={"container.sm"}>
              <VStack spacing={8} w={"md"} margin={"auto"}>
                  
                  <Heading as={"h1"} size={"2xl"} textAlign={"center"}>
                      Create Product
                  </Heading>

                  <Box
                      w={"full"}
                      bg={useColorModeValue("white", "gray.700")}
                      p={4}
                      shadow={"md"}
                      rounded={"md"}
                  >
                      
                      <VStack spacing={4}>
                          <Input
                              placeholder="Product Name"
                              name="name"
                              value={newProduct.name}
                              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                          <Input
                              placeholder="Price"
                              name="price"
                              type="number"
                              value={newProduct.price}
                              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
                          <Input
                              placeholder="Product Image Url"
                              name="image"
                              value={newProduct.image}
                              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
                          <Button
                              colorScheme={"blue"}
                              w={"full"}
                              onClick={handleAddProduct}
                          >
                              Add Product
                          </Button>
                      </VStack>
                  </Box>

              </VStack>
          </Container>
    </Box>
  )
}
