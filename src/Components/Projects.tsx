import { paddingX } from "../styles/styles"
import { HeadingMotion, TextMotion } from "./MotionComponent"
import { Box, Button, Center, Flex, HStack, Hide, VStack, Wrap, WrapItem, useRadio, useRadioGroup } from "@chakra-ui/react"

import { Link } from '@chakra-ui/react'


function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)

    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'


                _checked={{
                    color: 'primary.100'
                }}
                // _focus={{
                //     boxShadow: 'outline',
                // }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}


const Projects = () => {

    const options = ['All', 'Industrial Objects', 'Offices', "Residences", "Retail Objects"];



    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
        onChange: console.log,
    })



    return (
        <Flex
            width="100%"
            paddingX={paddingX}
            flexDir="column"
            alignItems="center"
            padding={{ base: "6", md: "60px" }}
            bg="blackAlpha.100"

            marginTop={{base:"70px", md: 0}}

        >
            <HeadingMotion
                fontFamily="font"
                fontSize="3xl"
                textAlign="center"
                marginBottom={5}

            >
                Our Projects
            </HeadingMotion>

            <TextMotion
                fontFamily="font"
                fontSize="md"
                textAlign="center"
                color="font.200"
                width={{ base: "100%", md: "50%" }}
                marginBottom={5}
            >
                To keep things simple we’ve created one website builder
                package that includes everything you need to get online
                & start growing your business.
            </TextMotion>


            <Wrap gap={6} flexDir={{ base: "column", md: "row" }} marginBottom={10}>

                    {options.map((value) => {
                        const radio = getRadioProps({ value })
                        return (
                            <WrapItem>




                                <RadioCard key={value} {...radio}>
                                    {value}
                                </RadioCard>

                            </WrapItem>
                        )
                    })}

            </Wrap>



            <Flex gap={6} flexDir={{ base: "column", md: "row" }} justifyContent="center" flexWrap="wrap" >
                <Box width="250px" height="350px" bg="blackAlpha.500"></Box>
                <Box width="250px" height="350px" bg="blackAlpha.500"></Box>
                <Box width="250px" height="350px" bg="blackAlpha.500"></Box>
                <Box width="250px" height="350px" bg="blackAlpha.500"></Box>


            </Flex>







        </Flex>

    )
}

export default Projects

