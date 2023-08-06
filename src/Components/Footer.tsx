import {
  Flex,
  Icon,
  Box,
  Text,
  Divider,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";

import { paddingX } from "../styles/styles";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoFlickr,
  BiLogoVimeo,
  BiLogoInstagram,
  BiSolidChevronRightCircle,
} from "react-icons/bi";
import { ButtonMotion } from "./MotionComponent";
import { BsChevronRight } from "react-icons/bs";

const FooterIconData = [
  {
    id: 1,
    icon: BiLogoFacebook,
  },
  {
    id: 2,
    icon: BiLogoTwitter,
  },
  {
    id: 3,
    icon: BiLogoFlickr,
  },
  {
    id: 4,
    icon: BiLogoVimeo,
  },
  {
    id: 5,
    icon: BiLogoInstagram,
  },
];
const Footer = () => {
  return (
    <Flex flexDir="column" bg="blackAlpha.800" paddingX={paddingX}>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        padding="5"
      >
        <Flex gap="2">
          {FooterIconData.map(({ id, icon }) => (
            <Icon
            key={id}
              width="32px"
              height="32px"
              padding="5px"
              bg="blackAlpha.400"
              borderRadius="full"
              color="font.200"
              transition="all"
              _hover={{
                background: "#FF4C01",
              }}
              as={icon}
            />
          ))}
        </Flex>

        <Flex
          width={{ base: "350px", md: "450px" }}
          justifyContent="space-around"
          padding={{ base: 5, md: 0 }}
        >
          <Text color="font.200" fontFamily="font" display="inline">
            Page
          </Text>
          <Text color="font.200" fontFamily="font" display="inline">
            |
          </Text>
          <Text color="font.200" fontFamily="font" display="inline">
            Terms of use
          </Text>
          <Text color="font.200" fontFamily="font" display="inline">
            |
          </Text>
          <Text color="font.200" fontFamily="font" display="inline">
            Site Map
          </Text>
        </Flex>

        <Flex height="100%" alignItems="center">
          <Text
            fontFamily="font"
            fontSize="3xl"
            fontWeight="bold"
            color="font.100"
          >
            <Text color="primary.100" as="span">
              Dr.
            </Text>
            Clean
          </Text>
        </Flex>
      </Flex>

      <Divider />

      <Flex
        width="100%"
        padding="5"
        justifyContent="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex
          width="250px"
          flexDir="column"
          justifyContent="space-around"
          height="290px"
        >
          <Text
            color="font.100"
            fontFamily="font"
            fontWeight="Bold"
            fontSize="xl"
          >
            About Company
          </Text>

          <Text color="font.200" fontFamily="font">
            M one-call solution for a wide range of home maintenance and repair
            needs. We are fully insured professional team job right. We
            arearrive on time in uniform.
          </Text>

          <ButtonMotion
            height="10px"
            width="120px"
            color="#FF4C01"
            textAlign="start"
            bg="transparent"
            _hover={{
              color: "white",
            }}
            rightIcon={<BiSolidChevronRightCircle />}
          >
            More About
          </ButtonMotion>
        </Flex>

        <Flex
          width="250px"
          flexDir="column"
          justifyContent="space-around"
          height="290px"
        >
          <Text
            color="font.100"
            fontFamily="font"
            fontWeight="Bold"
            fontSize="xl"
          >
            About Company
          </Text>

          <List
            display="flex"
            height="auto"
            flexDir="column"
            justifyContent="space-between"
            alignItems="start"
            spacing={2}
          >
            <ListItem
              color="font.200"
              _hover={{
                color: "#FF4C01",
              }}
            >
              <ListIcon as={BsChevronRight} color="font.200" />
              Lorem ipsum dolor
            </ListItem>
            <ListItem
              color="font.200"
              _hover={{
                color: "#FF4C01",
              }}
            >
              <ListIcon as={BsChevronRight} color="font.200" />
              Assumenda, quia
            </ListItem>
            <ListItem
              color="font.200"
              _hover={{
                color: "#FF4C01",
              }}
            >
              <ListIcon as={BsChevronRight} color="font.200" />
              Quidem, ipsam
            </ListItem>
            <ListItem
              color="font.200"
              _hover={{
                color: "#FF4C01",
              }}
            >
              <ListIcon as={BsChevronRight} color="font.200" />
              Quidem, ipsam illum
            </ListItem>
          </List>

          <ButtonMotion
            height="10px"
            width="120px"
            color="#FF4C01"
            textAlign="start"
            bg="transparent"
            _hover={{
              color: "white",
            }}
            rightIcon={<BiSolidChevronRightCircle />}
          >
            More About
          </ButtonMotion>
        </Flex>

        <Flex
          width="250px"
          flexDir="column"
          justifyContent="space-around"
          height="290px"
        >
          <Text
            color="font.100"
            fontFamily="font"
            fontWeight="Bold"
            fontSize="xl"
          >
            About Company
          </Text>

          <Text color="font.200" fontFamily="font">
            s your one-call solution for a wide range of home maintenance and
            repair needs. We are fully insured professional team job right. We
            arearrive on time in uniform.
          </Text>

          <ButtonMotion
            height="10px"
            width="120px"
            color="#FF4C01"
            textAlign="start"
            bg="transparent"
            _hover={{
              color: "white",
            }}
            rightIcon={<BiSolidChevronRightCircle />}
          >
            More About
          </ButtonMotion>
        </Flex>

        <Flex
          width="250px"
          flexDir="column"
          justifyContent="space-around"
          height="290px"
        >
          <Text
            color="font.100"
            fontFamily="font"
            fontWeight="Bold"
            fontSize="xl"
          >
            Contact us
          </Text>

          <Text color="font.200" fontFamily="font">
            s your one-call solution for a wide range of home maintenance and
            repair needs. We are fully insured professional team job right. We
            arearrive on time in uniform.
          </Text>

          <ButtonMotion
            height="10px"
            width="120px"
            color="#FF4C01"
            textAlign="start"
            bg="transparent"
            _hover={{
              color: "white",
            }}
            rightIcon={<BiSolidChevronRightCircle />}
          >
            More About
          </ButtonMotion>
        </Flex>
      </Flex>

      <Divider />

      <Box padding="5">
        <Text textAlign="center" color="font.200">
          Copyright © 2023. By Steven Hernandez
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
