import React from "react";
import "./css/recipe.css";
import RecipeCard from "./RecipeCard";
import { SimpleGrid, Box } from "@chakra-ui/react";

const Recipe = ({ recipes }) => {
  return (
    <>
      <Box width={"90%"} marginX="auto" marginY={[12, 16]}>
        <SimpleGrid columns={[1, 2, 3, 4, 4]} spacing={[10, 5]} p={[10]}>
          {recipes?.map((recipe) => {
            return (
              <>
                {recipes ? (
                  <RecipeCard
                    label={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                  />
                ) : null}
              </>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Recipe;
