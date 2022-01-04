import { useContext } from "react"

import { ProductsContext } from "../../contexts/ProductsContext";

import { Header } from "../../components/Header";
import { Filter } from "../../components/Products/Filter";
import { ProductItem } from "../../components/Products/ProductItem";

import { Flex, SimpleGrid } from '@chakra-ui/react'

export function Store() {

    const { products } = useContext(ProductsContext)

    return (
        <>
            <Header />
            <Filter />
            <Flex w="100%" my="10" maxW="1280px" mx="auto" px="10" >
                <SimpleGrid columns={3} spacing={8}>
                    {products.map(product => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    )
}


