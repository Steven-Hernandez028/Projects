import { Box, Hide, Show, Flex, Text } from "@chakra-ui/react";

import { useState } from "react";
import { HamburgerMenu } from "./Hamburger/SmallMenu";
import { paddingX } from "../styles/styles"
import { NavBar } from "./Hamburger/BigMenu";



const Navbar = () => {
  const [openCollapse, setOpenCollapse] = useState({
    Aboutus: false,
    Pages: false,
    Services: false,
    Portfolio: false,
    Blog: false,
    Contactus: false
  });


  const ToggleMultilineMenuItems = (key: String) => {

    setOpenCollapse((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));

  };


  return (
    <Box
      position="sticky"
      top="0"
      display="flex"
      alignItems="center"
      justifyContent={{ base: "space-between", md: "start" }}
      gap={5}
      height="80px"
      zIndex="sticky"
      bgColor="white"
      boxShadow="md"
      paddingX={paddingX}
    >


      <Hide below="md">


        <NavBar />

      </Hide>

      <Show below="md" >
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

        <HamburgerMenu openCollapse={openCollapse} ToggleMultilineMenuItems={ToggleMultilineMenuItems} />
      </Show>

    </Box>

  )
};


export default Navbar;
