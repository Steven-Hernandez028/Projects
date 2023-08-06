import { Box, Flex } from "@chakra-ui/react";
import { paddingX } from "../styles/styles";
import { HeadingMotion, TextMotion, ButtonMotion } from "./MotionComponent";
import { BiSolidChevronRightCircle } from "react-icons/bi";
const WorkigWithUs = () => {
  return (
    <Flex
      paddingX={paddingX}
      padding={{ base: "3", md: "60px" }}
      alignItems={{ base: "center", md: "start" }}
      flexDir={{ base: "column", md: "row" }}
    >
      <Box
        bg="blackAlpha.400"
        height="450px"
        width={{ base: "100%", md: "35%" }}
        order={{ base: 2, md: 1 }}
      ></Box>
      <Flex
        paddingX={{ base: "0", md: "60px" }}
        width={{ base: "100%", md: "65%" }}
        height="500px"
        flexDir="column"
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        order={{ base: 1, md: 2 }}
      >
        <Box>
          <TextMotion
            fontFamily="font"
            fontSize="md"
            textAlign="start"
            color="primary.100"
            fontWeight="bold"
            width={{ base: "100%", md: "350px", lg: "550px" }}
          >
            Why Working with us?
          </TextMotion>
          <HeadingMotion
            fontFamily="font"
            fontSize="3xl"
            textAlign="start"
            marginBottom={5}
          >
            Need Professional Help With Your Project?
          </HeadingMotion>

          <TextMotion
            fontFamily="font"
            fontSize="md"
            textAlign="start"
            color="font.200"
            width={{ base: "100%", md: "350px", lg: "550px" }}
            marginBottom={10}
          >
            With a high level of quality workmanship, courtesy, and customer
            service at a great price, <b> our complete plumbing </b>& rooter
            service leaves all other plumbers in the dust. You can call us any
            time, day or night, for a fast response to your plumbing needs. We
            can handle everything from a dripping faucet to a gushing water.
          </TextMotion>

          <ButtonMotion
            height="50px"
            color="font.100"
            bg="primary.100"
            initial="hidden"
            animate="visible"
            _hover={{
              background: "blackAlpha.900",
              color: "white",
            }}
            rightIcon={<BiSolidChevronRightCircle />}
          >
            Learn More
          </ButtonMotion>
        </Box>
      </Flex>
    </Flex>
  );
};

export default WorkigWithUs;
