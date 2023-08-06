import { Flex, Box, Container, Icon, Text, Button } from "@chakra-ui/react";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export const ContentCard = ({ image, icon, title, description, link }) => {
  return (
    <Flex
      height="350px"
      width={{base: "330px", md: "390px"}} //{{base: "340px", md: "320px"}}
      flexDir={"column"}
      padding={0}
      position={"relative"}
      marginBottom={"20"}

    >
      <Box
        bg="blue"
        height="80%"
        backgroundImage={image}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      ></Box>
      <Flex
        bg="white"
        boxShadow="1px 1px 10px rgba(0,0,0,.3)"
        alignSelf="end"
        width="80%"
        position="absolute"
        height="70%"
        top="160"
        flexDir="column"
        padding={5}
        justifyContent="space-around"
        alignItems="start"
      >
        <Icon color="primary.100" width="45px" height="45px" as={icon} />
        <Text fontWeight="bold" fontFamily="font">
          {title}
        </Text>
        <Text color="color.200" fontFamily="font">
          {description}
        </Text>
        <Button
          background={"transparent"}
          fontFamily="font"
          color="#222222"
          rightIcon={<BiSolidChevronRightCircle />}
          padding={0}
          _hover={{
            color: "#FF4C01",
          }}
        >
          Learn More
        </Button>
      </Flex>
    </Flex>
  );
};
