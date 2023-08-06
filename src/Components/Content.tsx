import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { BiSolidChevronRightCircle } from "react-icons/bi";


import { ContentCard } from "./ContentCard";
import { ContentData } from '../Data/index';

import { paddingX } from "../styles/styles"



const Content = () => {
  return (
    <Flex flexDir={"column"}
    marginTop={{base:"70px", md: 0}}
    padding={{ base: "6", md: "" }}

>
      <Flex
        position="relative"
        background={"white"}
        padding={{ base: "6", md: "60px" }}
        paddingX={paddingX}
    
      >
        <Flex
        
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "30px", md: "70px" }}
        >
          <Box
            padding={{ base: 5, md: 8 }}
            bg="#FF4C01"
            width={{ base: "100%", md: "70%" }}
          >
            <Text color="font.100" fontFamily="font">
              WHO WE ARE
            </Text>
            <Text
              color="font.100"
              fontFamily="font"
              fontWeight="bold"
              fontSize="3xl"
            >
              ALL Types Of Electricity Service Provide Firm
            </Text>
          </Box>

          <Box>
            <Text fontSize="3xl" fontFamily="font" fontWeight="bold" mb={2}>
              Our Successful History
            </Text>

            <Text color="font.200" lineHeight="30px" fontFamily="font" mb={2}>
              Established in 1986, Mr. Handy is a global franchise organization
              providing electrical installation and repair services.
              <b> Recognized by Entrepreneur</b> among its Franchise. Mr. Handy
              provide services to both residential and commercial almost 200
              locations worldwide.
            </Text>

            <Button
              height="50px"
              background="transparent"
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
          </Box>
        </Flex>


      </Flex>

      <Flex
        position="relative"
        width="100%"
        height="100%"
        background="white"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={5}
        paddingX={paddingX}
      >
     
        {ContentData.map(({ id, title, image, description, link, icon }) => 
        (
          <ContentCard
          key={id}
          image={image}
          title={title}
          description={description}
          link={link}
          icon={icon}
        />
        )
        )}
      </Flex>




    </Flex>
  );
};

export default Content;
