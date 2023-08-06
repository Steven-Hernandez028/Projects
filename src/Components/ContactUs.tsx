import { Flex, Grid, Button, Box, Icon, Text } from "@chakra-ui/react";
import { TextMotion, HeadingMotion, BoxMotion } from "./MotionComponent";
import { BiSolidChevronRightCircle } from "react-icons/bi";
import { MdHomeRepairService } from "react-icons/md";
import { paddingX } from "../styles/styles";
import contactus from "../assets/man.jpg";

const ContactUsData = [
  {
    id: 1,
    icon: MdHomeRepairService,
    title: "Electrical Repair",
    subtitle: "Here are some more ways",
  },
  {
    id: 2,
    icon: MdHomeRepairService,
    title: "Trouble Shooting",
    subtitle: "For the accurate implementation",
  },
  {
    id: 3,
    icon: MdHomeRepairService,
    title: "Panels Changes",
    subtitle: "an Electrical panel maintenance",
  },
  {
    id: 4,
    icon: MdHomeRepairService,
    title: "Cable Service",
    subtitle: "Outdoor Lighting can transform",
  },
  {
    id: 5,
    icon: MdHomeRepairService,
    title: "Rewiring Service",
    subtitle: "The right re-writing desing",
  },
  {
    id: 6,
    icon: MdHomeRepairService,
    title: "Generator Repair",
    subtitle: "Above and beyond to deliver",
  },
];

function Background() {
  return (
    <BoxMotion
      backgroundImage={`url(${contactus})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      filter="blur(.5px) grayscale(40%) brightness(.1)"
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

const ContactUs = () => {
  return (
    <Flex
     position="relative"
     justifyContent="space-between"
     height={{base: "140vh", md: "80vh"}}
     >
      <Background />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent={{base:"center" ,md:"space-around"}}
        paddingX={paddingX}
        padding={10}
        width="100%"
      >
        <Flex
          flexDir="column"
          width="350px"
          marginRight={{ base: 0, md: 10 }}
          marginBottom={{ base: 20, md: 0 }}
        >
          <TextMotion
            fontFamily="font"
            fontSize="md"
            textAlign= {{base:"center", md:"start"}}
            color="primary.100"
            fontWeight="bold"
          >
            What we provide
          </TextMotion>
          <HeadingMotion
            fontFamily="font"
            fontSize="3xl"
            textAlign= {{base:"center", md:"start"}}
            color="font.100"
            marginBottom={5}
          >
            We Help Build On Past & Prepare For Your Future
          </HeadingMotion>

          <Button
            width="140px"
            height="50px"
            alignSelf={{base:"center", md:"auto"}}
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

        <Grid
          templateRows="repeat(2,1fr)"
          templateColumns="repeat(3,1fr)"
          gap={10}
        >
          {ContactUsData.map(({ id, icon, title, subtitle }) => (
            <Box key={id}>
              <Icon color="font.100" width="50px" height="50px" as={icon} />
              <Text color="font.100" fontWeight="bold" fontFamily="font">
                {title}
              </Text>
              <Text fontSize="sm" color="font.200" fontFamily="font">
                {subtitle}
              </Text>
            </Box>
          ))}
        </Grid>
      </Flex>




    
    </Flex>
  );
};

export default ContactUs;
