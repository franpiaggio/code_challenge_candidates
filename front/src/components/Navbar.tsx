import { Link } from "react-router-dom";
import Logo from "../assets/emi-logo.svg";
import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { memo } from "react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <nav>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"start"}
          maxWidth={{ base: "auto", md: "900" }}
          margin={"0 auto"}
        >
          <Box>
            <img src={Logo} alt='Emi labs logo' />
          </Box>
          <HStack as={"nav"} spacing={4} marginLeft={"auto"}>
            <Link to='/'>Candidates</Link>
            <Link to='/about'>Challenge</Link>
          </HStack>
          <Flex alignItems={"center"} marginLeft='10'>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </nav>
  );
}

export default memo(Navbar);
