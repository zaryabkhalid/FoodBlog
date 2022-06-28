import React from "react";
import { Text, Box } from "@chakra-ui/react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <Box>
        <Text
          textAlign="center"
          fontSize={["lg", "lg", "xl"]}
          color="brand.bg"
          bg="brand.bgleft"
          py={2}
        >
          ©️ {year} Zaryab Khalid, Inc All rights reserved. 👍
        </Text>
      </Box>
    </>
  );
};

export default Footer;
