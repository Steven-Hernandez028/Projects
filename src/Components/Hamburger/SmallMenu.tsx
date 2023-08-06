import {
  Button,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Text,
  Box,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HamburgerMenuMenuData } from "../../Data";
import { Fragment } from "react";
import { OpenCollapse } from "../../Types/Types"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const HamburgerMenu = ({
  ToggleMultilineMenuItems,
  openCollapse,
}: OpenCollapse ) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bg="transparent"
        height="22px"
        width="22px"
        color="black"
        _hover={{
          background: "transparent",
        }}
        onClick={onOpen}
      >
        <Icon
          height="22px"
          _active={{
            background: "transparent",
          }}
          width="22px"
          as={RxHamburgerMenu}
        />
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody>
            {HamburgerMenuMenuData.map(({ objectName, name, menuItems }) => (
              <>
        
                <Text
                  fontFamily="font"
                  fontSize="2xl"
                  onClick={() => ToggleMultilineMenuItems(objectName)}
                >
                  {name}
                </Text>

                <Collapse in={openCollapse[objectName]} animateOpacity>

                  <Box width="260px" height="90px">
                    {menuItems.map(({ name, url }) => (
                      <Fragment key={url}>
                        <Text>{name}</Text>
                        <Text>{url}</Text>
                      </Fragment>
                    ))}
                  </Box>
                </Collapse>
              </>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
