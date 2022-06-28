import { useEffect, useState } from "react";
import "../Components/css/recipe.css";
import axios from "axios";
import Recipe from "../Components/Recipe";
import { Button, Input, InputGroup, Spinner, Box } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

//input

const Recipes = () => {
  const APP_ID = process.env.REACT_APP_APPLICATION_ID;
  const APP_KEY = process.env.REACT_APP_APPLICATION_KEY;

  const [recipes, setRecipes] = useState([]);

  //  Search recipes input state
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("chicken");
  //Spinner State

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    searchRecipes();
    // eslint-disable-next-line
  }, [query]);

  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
      setSpinner(false);
    } catch (err) {
      setSpinner(false);
      alert(err);
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const updateQuery = (e) => {
    e.preventDefault();
    setSpinner(true);
    setQuery(search);
  };

  return (
    <>
      <Box marginTop={20} minH="100vh">
        <Box w="50%" mx="auto">
          <form type="submit">
            <InputGroup size="md">
              <Input
                type="text"
                onChange={updateSearch}
                value={search}
                placeholder="Search your favorite recipe"
                border="2px"
                borderColor="brand.bgleft"
                _focus={{ borderColor: "brand.bgleft" }}
                _hover={{ borderColor: "brand.bg" }}
              />

              {search.length > 0 ? (
                <Button
                  type="submit"
                  onClick={updateQuery}
                  variant="ghost"
                  colorScheme="blackAlpha"
                  rightIcon={<SearchIcon />}
                  color="brand.bgleft"
                >
                  Search
                </Button>
              ) : null}
            </InputGroup>
          </form>
        </Box>

        {spinner ? (
          <Box display="flex" justifyContent="center" m="30">
            <Spinner
              thickness="8px"
              speed="0.8s"
              emptyColor="white"
              color="black"
              size="xl"
            />
          </Box>
        ) : (
          <Recipe recipes={recipes} />
        )}
      </Box>
    </>
  );
};

export default Recipes;
