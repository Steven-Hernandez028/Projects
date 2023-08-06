
import { BoxMotion,HeadingMotion,ButtonMotion,TextMotion } from "./MotionComponent";
import { BiSolidChevronRightCircle } from 'react-icons/bi'
import { paddingX } from "../styles/styles"


import bg from "../assets/imagebg.jpg";


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 9,
      staggerChildren: 0.3
    }
  }
};

const Item = {
  hidden: {  x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition:{
      duration: .9
    }
  }
};



function Background() {
  return (
    <BoxMotion
      backgroundImage={`url(${bg})`}
      backgroundSize="cover"
     backgroundPosition={{ base: "-960px", md: "-120px" }}
      backgroundRepeat="no-repeat"
      filter="blur(.5px) grayscale(40%) brightness(.8)"
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
const Hero = () => {
  return (
    <>
     

      <BoxMotion
        height={{ base: "130vh", lg: "1000px" }}
        width="100%"
        position="relative"
        display="flex"
        alignItems={{ base: "center", md: "start" }}

        padding={{ base: "6", md: "60" }}
        paddingX={paddingX}
      >
         <Background />
        <BoxMotion 
        width={"xl"} 
        initial="offscreen"
        whileInView="onscreen"
        variants={container}
        >
          <HeadingMotion
            fontFamily="font"
            fontWeight="bold"
            fontSize={{ base: "6xl", md: "7xl" }}
            color="font.100"
            marginBottom={"30px"}
            initial="hidden"
            animate="visible"
            variants={Item}
          >
            NEED IT FIXED?  WE CARE TO FIX IT RIGHT
          </HeadingMotion>

          <TextMotion
            fontFamily="font"
            color="font.100"
            fontSize={{ base: "xl", md: "2xl" }}
            marginBottom="30px"
            initial="hidden"
            animate="visible"
            variants={Item}
          >
            Our power of choice is untrammeleed and when nothing being able to
            do what we like bes
          </TextMotion>

          <ButtonMotion
            height="50px"
            position="absolute"
            color="#FF4C01"
            bg="font.100"
            initial="hidden"
            animate="visible"
            variants={Item}
            _hover={{
              background: "blackAlpha.900",
              color: "white"
            }}
            rightIcon={<BiSolidChevronRightCircle />}
          >
            Learn More
          </ButtonMotion>
        </BoxMotion>



      </BoxMotion>
    </>
  );
};

export default Hero;
