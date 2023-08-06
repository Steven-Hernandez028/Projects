import {
    Button, Collapse, Drawer, DrawerBody,
    DrawerCloseButton, DrawerContent, DrawerHeader, Text, Box, DrawerOverlay, Icon, useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { HamburgerMenuMenuData } from '../../Data'


export const HamburgerMenu = ({ ToggleMultilineMenuItems, openCollapse }
    : { ToggleMultilineMenuItems: Function, openCollapse: Object }) => {

    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

    const btnRef = useRef()

    return (

        <>
            <Button ref={btnRef}

                bg="transparent"
                height="22px"
                width="22px"
                color="black"
                _hover={{
                    background: "transparent"

                }}


                onClick={onOpen} >
                <Icon height="22px"
                    _active={{
                        background: "transparent"
                    }}
                    width="22px" as={RxHamburgerMenu} />


            </Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>

                    <DrawerHeader  >

                        <DrawerCloseButton />

                    </DrawerHeader>

                    <DrawerBody>
                        {HamburgerMenuMenuData.map(({ id, objectName, name, menuItems }) => (
                            (
                                <>

                                    <Text fontFamily="font" fontSize="2xl" onClick={() => ToggleMultilineMenuItems(objectName)}>{name}</Text>

                                    <Collapse in={openCollapse[objectName]} animateOpacity>

                                        <Box
                                            width="260px"
                                            height="90px"
                                        >
                                            {menuItems.map(({ name, url }) => (
                                                <>

                                                    <Text>{name}</Text>
                                                    <Text>{url}</Text>
                                                </>

                                            ))}
                                        </Box>

                                    </Collapse>

                                </>

                            )))

                        }





                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>

    )


}
