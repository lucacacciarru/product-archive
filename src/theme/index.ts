import { colors, borders, fonts, textStyles } from "./style";
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components";

const config = {
  colors,
  borders,
  fonts,
  textStyles,
  components: {
    Button,
  },
};

export const customTheme = extendTheme(config);
