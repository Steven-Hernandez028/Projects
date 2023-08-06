import {
  Divider,
  Flex,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  Box,
  Button
} from "@chakra-ui/react";
import { paddingX } from "../styles/styles";
import { HeadingMotion, TextMotion } from "./MotionComponent";
import { GiElectric, GiAutoRepair } from "react-icons/gi";
import { BsCheckLg } from "react-icons/bs";
import { BiSolidChevronRightCircle } from "react-icons/bi"
const Pricing = () => {
  return (
    <Flex
      width="100%"
      paddingX={paddingX}
      bg="blackAlpha.100"
      flexDir="column"
      alignItems="center"
      padding={{ base: "6", md: "60px" }}
      marginTop={{ base: "70px", md: 0 }}
    >
      <TextMotion
        fontFamily="font"
        fontSize="md"
        textAlign="center"
        color="primary.100"
        fontWeight="bold"
        width={{ base: "100%", md: "350px", lg: "550px" }}
      >
        Our pricing & plans
      </TextMotion>
      <HeadingMotion
        fontFamily="font"
        fontSize="3xl"
        textAlign="center"
        marginBottom={{ base: "10px", md: "40px" }}
      >
        Best Maintenance Plans
      </HeadingMotion>

      <Flex
        gap={{ base: 20, lg: 5 }}
        flexDir={{ base: "column", lg: "row" }}
        alignItems="center"
      >
        <Flex
          width={{ base: "350px", md: "460px" }}
          height="200px"
          bg="font.100"
          boxShadow="md"
          justifyContent="space-between"
          padding={7}
        >
          <Flex
            flexDir="column"
            justifyContent="space-between"
            alignItems="start"
          >
            <Icon
              width="50px"
              color="primary.100"
              height="50px"
              as={GiElectric}
            />
            <Text
              fontFamily="font"
              fontSize="xl"
              textAlign="center"
              fontWeight="600"
            >
              Industries
            </Text>

            <Text
              fontFamily="font"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              fontWeight="bold"
            >
              $ 220
            </Text>
          </Flex>

          <Divider orientation="vertical" />

          <List
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            alignItems="start"
            width={{ base: "auto", md: "220px" }}
            spacing={2}
          >
            <ListItem color="font.200">
              <ListIcon as={BsCheckLg} color="font.200" />
              Lorem ipsum dolor
            </ListItem>
            <ListItem color="font.200">
              <ListIcon as={BsCheckLg} color="font.200" />
              Assumenda, quia
            </ListItem>
            <ListItem color="font.200">
              <ListIcon as={BsCheckLg} color="font.200" />
              Quidem, ipsam
            </ListItem>
            <ListItem color="font.200">
              <ListIcon as={BsCheckLg} color="font.200" />
              Quidem, ipsam illum
            </ListItem>
          </List>
        </Flex>

        <Flex
          width={{ base: "350px", md: "460px" }}
          height="200px"
          bg="font.100"
          boxShadow="md"
          justifyContent="space-between"
          padding={7}
          position="relative"
        >
          <Box
            width="98px"
            height="40px"
            bg="primary.100"
            position="absolute"
            left={{ base: "72.5%", md: "79%" }}
            top="-20%"
            padding={3}
          >
            <Text
              fontSize="sm"
              color="font.100"
              fontWeight="bold"
              fontFamily="font"
            >
              POPULAR
            </Text>
          </Box>
          <Flex
            flexDir="column"
            justifyContent="space-between"
            alignItems="start"
          >
            <Icon
              width="50px"
              color="primary.100"
              height="50px"
              as={GiAutoRepair}
            />
            <Text
              fontFamily="font"
              fontSize="xl"
              textAlign="center"
              fontWeight="600"
            >
              Industries
            </Text>

            <Text
              fontFamily="font"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              fontWeight="bold"
            >
              $ 220
            </Text>
          </Flex>

          <Divider orientation="vertical" />

          <List
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            alignItems="start"
            width={{ base: "auto", md: "220px" }}
            spacing={2}
          >
            <ListItem color="font.200">
              <ListIcon as={BsCheckLg} color="font.200" />
              Lorem ipsum dolor
            </ListItem>
            <ListItem color="font.200">
              <ListIcon as={BsCheckLg} color="font.200" />
              Assumenda, quia
            </ListItem>
            <ListItem color="font.200">
              <ListIcon as={BsCheckLg} color="font.200" />
              Quidem, ipsam
            </ListItem>
            <ListItem color="font.200">
              <ListIcon as={BsCheckLg} color="font.200" />
              Quidem, ipsam illum
            </ListItem>
          </List>
        </Flex>
      </Flex>
      <Flex 
      flexDir="column"
      marginTop={10} 
      alignItems="center"
      width={{ base: "100%", md: "60%" }}>
        <Text
          color="font.200"
          lineHeight="30px"
          fontFamily="font"
          textAlign="center"
          marginBottom={10}
          >
          To keep things simple we’ve created one <b>website builder package</b>{" "}
          that includes everything you need to get online & start growing your
          business. We also offer 3 days workmanship guarantee
        </Text>

        <Button
          height="50px"
          width="140px"
          bg="primary.100"
          color="font.100"
          _hover={{
            background: "blackAlpha.900",
            color: "white",
          }}
          rightIcon={<BiSolidChevronRightCircle />}
        >
          Learn More
        </Button>
      </Flex>
    </Flex>
  );
};

export default Pricing;

