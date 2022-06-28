import { Text, Heading, Image, Box } from "@chakra-ui/react";

import { useState } from "react";
const RecipeCard = ({ label, calories, image, ingredients }) => {
  const [show, setShow] = useState(false);

  const ingredientHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <Box
        h="-webkit-fit-content"
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
      >
        <Box maxW="100%" borderWidth="1px" p="2" bgColor="brand.bgright">
          <Image w="100%" src={image} alt={label} objectFit="cover" />
        </Box>

        <Box p={3} bg="brand.bgright" borderTop="5px dashed white">
          <Heading
            size={["md", "md", "md", "lg"]}
            textAlign="left"
            color="brand.bgleft"
          >
            {label}
          </Heading>
          <Box display="flex" justifyContent="space-between" mt="4">
            <Text fontSize={["md", "md", "lg", "xl"]}>
              Calories: {Math.floor(calories)}
            </Text>
            <Box
              as="button"
              color="brand.btn1"
              bg="brand.bgleft"
              _hover={{
                bg: "brand.btn1",
                color: "brand.bgleft",
              }}
              px={[2, 4, 4, 4, 4]}
              boxShadow="lg"
              onClick={ingredientHandler}
            >
              {show ? "Hide Ingredients" : "Show Ingredients"}
            </Box>
          </Box>
        </Box>
        {show ? (
          <>
            <Box p="4" bg="brand.bgright">
              <Heading textAlign="center" paddingBottom="5">
                Ingredients
              </Heading>
              <ul style={{ listStyle: "none", textAlign: "center" }}>
                {ingredients?.map((ingredient) => {
                  return (
                    <Text fontSize="2xl" textAlign="left">
                      <li> - {ingredient.text}</li>
                    </Text>
                  );
                })}
              </ul>
            </Box>
          </>
        ) : null}
      </Box>
    </>
  );
};

export default RecipeCard;
