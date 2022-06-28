import React, { useState } from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";
import {
  Heading,
  Text,
  Box,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const navbackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", navbackground);

  return (
    <>
      <nav className={navbar ? "navbar" : "navbartwo"}>
        <Box border="2px solid #" bgColor="brand.bg">
          <Box
            width="80%"
            m="auto"
            display="flex"
            alignItems="center"
            bg="brand.bg"
            justifyContent="space-between"
          >
            {/* Logo Box */}

            <Link to="/">
              <Heading
                size={["lg", "xl", "2xl", "3xl"]}
                textAlign="center"
                textWrap="none"
                textShadow="1px 1px #ff0000"
                bg="brand.bg"
                py="20px"
                color="brand.bgleft"
              >
                FoodBlog
              </Heading>
            </Link>

            {/* menu list */}
            <Box bg="brand.bg">
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      isActive={isOpen}
                      as={IconButton}
                      aria-label="options"
                      icon={
                        isOpen ? (
                          <CloseIcon bg="transparent" />
                        ) : (
                          <HamburgerIcon bg="transparent" />
                        )
                      }
                      variant="outline"
                      _hover={{ bg: "brand.bgright" }}
                      _expanded={{ bg: "brand.bgright" }}
                    />
                    <MenuList>
                      <Link to="/">
                        <MenuItem>
                          <Text fontSize="xl" bg="transparent">
                            Home
                          </Text>
                        </MenuItem>
                      </Link>
                      <Link to="/recipes">
                        <MenuItem>
                          <Text fontSize="xl" bg="transparent">
                            Recipes
                          </Text>
                        </MenuItem>
                      </Link>
                      <MenuItem>
                        <Text fontSize="xl" bg="transparent">
                          Contact Us
                        </Text>
                      </MenuItem>
                      <MenuItem>
                        <Text fontSize="xl" bg="transparent">
                          Blogs
                        </Text>
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>
          </Box>
        </Box>
      </nav>
    </>
  );
};

export default Navbar;
