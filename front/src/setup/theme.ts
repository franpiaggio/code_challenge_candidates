import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const styles = {};
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, styles, config });

export { theme };
