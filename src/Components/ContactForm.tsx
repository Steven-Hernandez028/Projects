import {
  Flex,
  Box,
  Icon,
  Text,
  Input,
  Grid,
  GridItem,
  InputLeftElement,
  Textarea,
  InputGroup,
  Select
} from "@chakra-ui/react";
import { RiStarSFill } from "react-icons/ri";
import { BoxMotion, ButtonMotion } from "./MotionComponent";
import { BiUser } from "react-icons/bi";
import { AiOutlinePhone, AiOutlineMail, AiOutlineCheck } from "react-icons/ai";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import contactus from "../assets/man.jpg";

function Background() {
  return (
    <BoxMotion
      backgroundImage={`url(${contactus})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      filter="blur(.5px) " //grayscale(40%) brightness(.1)"
      position="absolute"
      boxShadow="inset 10px 10px 50px rgba(0, 0, 0, .5)"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="-1"
    ></BoxMotion>
  );
}

const ContactForm = () => {
  return (
    <Flex
      justifyContent="center"
      flexDir={{ base: "column", md: "row" }}
      position="relative"
      top={{base:0, md:-20}}
    >
      <Flex
        position="relative"
        width={{ base: "100%", md: "550px" }}
        height="560px"
        flexDir="column"
        alignItems="start"

        bg="rgba(255,76,1,.86)"
        padding={10}
        gap={2}
        order={{ base: 2, md: 1 }}
      >
        <Background />
        <Box>
          <Icon as={RiStarSFill} color="white" />
          <Icon as={RiStarSFill} color="white" />
          <Icon as={RiStarSFill} color="white" />
          <Icon as={RiStarSFill} color="white" />
          <Icon as={RiStarSFill} color="white" />
        </Box>

        <Box>
          <Text color="font.100">
            I received a cost a time estimate for installing a ceiling fan i a
            bedroom with no existing fan and changing the light switch. They
            were very professional, kept to their cost and time estiamte and
            cleaed up well before leaving. And most love of what we doing with
            your hard work.
          </Text>
        </Box>

        <Box marginTop={10}>
          <Text color="font.100" fontWeight="bold">
            Denis Aeronic
          </Text>
          <Text color="font.100" fontSize="sm">
            Senior Electrician
          </Text>
        </Box>

        <Box marginTop={10}>
          <Text color="font.100" fontSize="sm">
            Need a service & ready to book? Call us
          </Text>
          <Text color="font.100" fontSize="xl" fontWeight="bold">
            Toll Free Number: 1800 1245 7890
          </Text>
        </Box>
      </Flex>

      <Flex
        padding={{base:3, md: 10}}
        bg="white"
        paddingY={{base: 10, md: 10}}
        width={{ base: "100%", md: "500px" }}
        height={{base: "770px", md:"560px"}}
        flexDir="column"
        order={{ base: 1, md: 2 }}
        gap={2}
      >
        <Text fontFamily="font" fontWeight="bold" fontSize="xl">
          Request A Quote
        </Text>
        <Text fontFamily="font" fontSize="sm" color="font.200">
          Like what you’ve seen so far? What you’ve seen on our website is only
          the tip! To know more about us kindly drop us request.
        </Text>
        {/* <Stack marginTop={5}> */}

        <Grid
          marginTop={5}
          marginBottom={10}
          templateRows="repeat(1fr,3)"
          templateColumns="repeat(1fr,2)"
          gap={{base: 6, md: 5}}
        >
          <GridItem
            colStart={{ base: "auto", md: 0 }}
            colEnd={{ base: "auto", md: 1 }}
            rowSpan={1}
          >
            <InputGroup>
              <InputLeftElement>
                <Icon color="font.200" as={BiUser} />
              </InputLeftElement>
              <Input
                fontFamily="font"
                variant="flushed"
                placeholder="Your Name"
                focusBorderColor="primary.100"
              />
            </InputGroup>
          </GridItem>

          <GridItem
            colStart={{ base: "auto", md: 1 }}
            colEnd={{ base: "auto", md: 2 }}
            rowSpan={1}
          >
            <InputGroup>
              <InputLeftElement>
                <Icon color="font.200" as={AiOutlinePhone} />
              </InputLeftElement>
              <Input
                fontFamily="font"
                variant="flushed"
                placeholder="Your Phone"
                focusBorderColor="primary.100"
              />
            </InputGroup>
          </GridItem>

          <GridItem
            colStart={{ base: "auto", md: 0 }}
            colEnd={{ base: "auto", md: 1 }}
            rowSpan={2}
          >
            <InputGroup>
              <InputLeftElement>
                <Icon color="font.200" as={AiOutlineMail} />
              </InputLeftElement>
              <Input
                fontFamily="font"
                variant="flushed"
                placeholder="Your Email"
                focusBorderColor="primary.100"
              />
            </InputGroup>
          </GridItem>

          <GridItem
            colStart={{ base: "auto", md: 1 }}
            colEnd={{ base: "auto", md: 2 }}
            rowSpan={2}
          >
            <InputGroup
            borderBottom={"1px solid rgba(0,0,0,.1)"}
          
            >
              <InputLeftElement>
                <Icon color="font.200" as={AiOutlineCheck} />
              </InputLeftElement>

              <Select
                variant="none"
                fontFamily="font"
                placeholder="Select Your Service"
                focusBorderColor="primary.100"
                color="blackAlpha.700"
                paddingX={6}
              >
                <option value="option1">Switch Repair</option>
                <option value="option2">Power circuit</option>
                <option value="option3">Power Grid</option>
              </Select>
            </InputGroup>
          </GridItem>
        </Grid>



        <InputGroup
        marginTop={{base: 0, md: -6}}
        >
          <InputLeftElement>
            <Icon color="font.200" as={AiOutlineCheck} />
          </InputLeftElement>
          <Textarea
            paddingX={10}
            fontFamily="font"
            height="150px"
            variant="flushed"
            focusBorderColor="primary.100"
            placeholder="Here is a sample placeholder"
          />
        </InputGroup>

        <ButtonMotion
          marginTop={10}
          height="50px"
          width="150px"
          color="font.100"
          bg="primary.100"

          _hover={{
            background: "blackAlpha.900",
            color: "white",
          }}
          rightIcon={<BiSolidChevronRightCircle />}
        >
          Submit
        </ButtonMotion>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
