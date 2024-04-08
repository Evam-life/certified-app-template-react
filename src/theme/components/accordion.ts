import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { accordionAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

export const accordionTheme = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: {
      overflowX: "scroll", // For sticky headers
    },
    container: {
      background: "bg.2",
      _notLast: {
        // Dividers
        borderBottomWidth: "2px",
        borderBottomStyle: "solid",
        borderBottomColor: "bg.2",
      },
    },
    button: {
      fontSize: "body.2",
      display: "flex",
      justifyContent: "space-between",
      px: "P2",
      py: "P1",
      background: "bg.4",

      // Sticky headers
      position: "sticky",
      top: "0px",
      zIndex: 9999,
    },
    panel: {
      p: "P2",
    },
    icon: {},
  }),
});
