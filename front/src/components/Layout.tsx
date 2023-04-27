import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: any;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box minHeight={"100vh"}>
      <Navbar />
      <Box
        as='main'
        maxWidth={{ base: "auto", md: "900" }}
        margin={"0 auto"}
        id='layout'
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
