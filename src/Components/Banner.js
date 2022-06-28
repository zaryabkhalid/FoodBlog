import React from "react";
import { Link } from "react-router-dom";
import { Heading, Text, Image, Box, Container } from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper";

const Banner = () => {
  return (
    <>
      <Container
        display="flex"
        flexDirection={["column", "column", "row", "row"]}
        justifyContent={["center", "center", "space-between", "space-between"]}
        alignItems="center"
        maxW={["100%", "100%", "100%", "80%"]}
        h="100vh"
        p={5}
        bg="brand.bgright"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          gap="4"
          alignItems="flex-start"
          maxW="xl"
          p="3"
        >
          <Heading
            size={["2xl", "3xl", "3xl"]}
            textShadow="1px 1px #ff0000"
            color="brand.bgleft"
          >
            FoodBlog
          </Heading>
          <Box>
            <Text fontSize={["lg", "lg", "2xl"]}>Learn. Cook. Share.</Text>
            <Text fontSize={["lg", "lg", "2xl"]}>Cooking Made Easy.</Text>
          </Box>
          <Text fontSize={["md", "md", "lg"]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer
          </Text>
          <Box boxShadow="lg" p="3" border="1px solid black">
            <Link to="/recipes">Go To Recipes ▶️ </Link>
          </Box>
        </Box>

        <Box
          boxSize={["sm", "md"]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={3}
        >
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative]}
          >
            <SwiperSlide>
              <Image
                src="./images/platter.png"
                alt="FoodBlog"
                objectFit="cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="./images/chicken.png"
                alt="FoodBlog"
                objectFit="cover"
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </>
  );
};

export default Banner;
