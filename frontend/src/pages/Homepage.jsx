import {
    VStack,
    Container,
    Text,
    Grid,
    
} from "@chakra-ui/react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useProductStore } from "../store/product.js"
import ProductCard from "../components/ProductCard.jsx"

export const Homepage = () => {
    // fetching products
    const { fetchProducts, products } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])
    console.log(products);


    return (
        <Container maxW={1140} margin={"auto"} py={12}>

            <VStack spacing={8}>

                {/* heading of home page */}
                <Text
                    fontSize={"30"}
                    fontWeight={600}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, #751ad0ff, #FF0080)"}
                    bgClip={"text"}
                >
                    Product in Stock
                </Text>

                
                {/* if products array is empty show specific text */}
                {products.length === 0 && (
                    <Text
                        fontSize={"xl"}
                        fontWeight={600}
                        textAlign={"center"}

                    >
                        No product found🪹. {" "}
                        <Text
                            color={"blue.400"}
                            as={"span"}
                            _hover={{
                                textDecoration: "underline",
                                cursor: "pointer",
                            }}
                        >

                            <Link to={"/create"}>
                                Create a Product
                            </Link>
                        </Text>
                    </Text>
                )}
                
    
                {/* products display  */}
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap="6" w={"full"}>
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                    
                </Grid>


            </VStack>
        </Container>
    )
}
