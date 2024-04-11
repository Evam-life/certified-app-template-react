import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  baseStyle: {
    borderRadius: "9999px",

    //  Minimum touch area
    minWidth: "144px",
    minHeight: "48px",

    maxWidth: "600px",
    maxHeight: "96px",
    fontSize: "24px",
    fontWeight: 700,
    padding: "P4",

    _active: {
      filter: "brightness(85%)",
    },
    _disabled: {
      pointerEvents: "none",
    },
  },
  variants: {
    primary: {
      background: "orange.primary",
    },
    secondary: {
      background: "bg.4",
    },
    outlined: {
      background: "transparent",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#707070",
    },
  },
  sizes: {
    1: {
      height: "96px",
      px: "P6",
    },
    2: {
      height: "76px",
      px: "P5",
    },
    3: {
      height: "64px",
    },
  },
  defaultProps: {
    variant: "primary",
    size: 2,
  },
});
