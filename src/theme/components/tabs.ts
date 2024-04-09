import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { tabsAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

export const tabsTheme = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    indicator: {
      height: "3px",
      bg: "orange.primary",
      borderRadius: "9999px",
      marginTop: "-3px",
    },
    tablist: {
      px: "P2",
    },
    tab: {
      fontSize: "26px",
      lineHeight: "29px",
      py: "P0",
      px: "P4",
      color: "text.sub",

      // Minimum touch area
      minWidth: "144px",
      minHeight: "48px",

      // Equal size distribution
      // flexBasis: 0,
      // flexGrow: 1,

      // Highlight touches
      _active: {
        bgColor: `rgba(255, 255, 255, ${0.2})`,
      },

      _selected: {
        color: "text.primary",
      },

      svg: {
        boxSize: "36px",
      },
    },
    tabpanels: {
      // Sticky tabs
      overflowX: "scroll",
      height: "100%",
      flex: 1,
    },
    tabpanel: {
      height: "100%",
    },
  }),
});
