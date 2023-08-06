import { Flex, Icon, Text, Divider, Button, Hide } from "@chakra-ui/react";
import { paddingX } from "../styles/styles";
import { GrStatusGood } from "react-icons/gr";
import {
    BiSolidChevronRightCircle,
    BiPhoneCall,
    BiTimeFive, BiSend,
} from "react-icons/bi";
import { headingIcons } from "../Data/index"






const Header = () => {
    return (
        <>
            <Hide below="md">
                <Flex
                    width="100%"
                    height="80px"
                    bg="primary.100"
                    paddingX={paddingX}
                    alignItems="center"
                    justifyContent="space-between"
                >

                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        width="480px"
                    >

                        <Button

                            height="50px"
                            bg="font.100"
                            color="#FF4C01"
                            _hover={{

                                backgroundColor: "blackAlpha.900",
                                color: "white"
                            }}
                            rightIcon={<BiPhoneCall />}
                        >
                            Call me
                        </Button>
                        <Flex
                            alignItems="center"
                            gap={2}
                        >
                            <Icon width="20px" height="20px" color="font.100" as={BiTimeFive} />
                            <Text
                                display="inline"
                                fontFamily="font"
                                fontSize="sm"
                                color="font.100" >Mon - Fri 09:00 - 17:00 </Text>
                        </Flex>



                        <Flex
                            alignItems="center"
                            gap={2}
                        >
                            <Icon width="20px" height="20px" color="font.100" as={BiSend} />
                            <Text
                                display="inline"
                                fontFamily="font"
                                fontSize="sm"
                                color="font.100" >Mon - Fri 09:00 - 17:00 </Text>
                        </Flex>





                    </Flex>

                    <Flex
                        width="150px"
                        justifyContent="space-between"
                    >
                        {headingIcons.map(({ id, icon }) => (
                            <Icon key={id} width="20px" height="20px" color="font.100" as={icon} />
                        ))}
                    </Flex>
                </Flex>





                <Flex
                    width="100%"
                    height="100px"
                    alignItems="center"
                    paddingX={paddingX}
                    bg="font.100"
                >
                    <Flex
                        width="100px"
                        position="relative"
                        height="100%"
                        alignItems='center'

                    >

                        <Text fontFamily="font" fontSize="3xl" fontWeight="bold">
                            <Text color="primary.100" as="span">
                                Dr.
                            </Text>
                            Clean
                        </Text>
                    </Flex>


                    <Flex
                        position="relative"
                        height="100%"
                        width={"100%"}
                        flexDir="row"
                        alignItems="center"
                        justifyContent="end"

                    >
                        <Flex
                            width="140px"
                            height="50%"
                            padding="3"
                            justifyContent="space-between"
                        >
                            <Icon width="20px" height="20px" as={GrStatusGood} />

                            <Flex
                                justifyContent="space-around"
                                flexDir="column"
                            >
                                <Text fontSize="md" color="black" fontFamily="font" fontWeight="bold">The best</Text>
                                <Text textAlign="end" fontSize="smaller" color="font.200">ISO 9001:2008</Text>

                            </Flex>



                        </Flex>
                        <Divider marginX={3} h="50px" orientation='vertical' />
                        <Flex
                            width="140px"

                            height="50%"
                            padding="3"
                            justifyContent="space-between"

                        >
                            <Icon width="20px" height="20px" as={GrStatusGood} />

                            <Flex
                                justifyContent="space-around"
                                flexDir="column"
                            >
                                <Text fontSize="md" color="black" fontFamily="font" fontWeight="bold">The best</Text>
                                <Text textAlign="end" fontSize="smaller" color="font.200">ISO 9001:2008</Text>

                            </Flex>



                        </Flex>
                        <Divider marginX={3} h="50px" orientation='vertical' />

                        <Flex
                            width="140px"

                            height="50%"
                            padding="3"
                            justifyContent="space-between"

                        >
                            <Icon width="20px" height="20px" as={GrStatusGood} />

                            <Flex
                                justifyContent="space-around"
                                flexDir="column"
                            >
                                <Text fontSize="md" color="black" fontFamily="font" fontWeight="bold">The best</Text>
                                <Text textAlign="end" fontSize="smaller" color="font.200">ISO 9001:2008</Text>

                            </Flex>



                        </Flex>



                        <Button
                            marginLeft="25px"
                            height="50px"
                            bg="font.100"
                            color="#FF4C01"
                            _hover={{
                                background: "#FF4C01",
                                color: "white"
                            }}
                            rightIcon={<BiSolidChevronRightCircle />}
                        >
                            Learn More
                        </Button>


                    </Flex>


                </Flex>
            </Hide>

        </>
    )
}

export default Header



