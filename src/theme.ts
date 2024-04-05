import { tabsAnatomy } from "@chakra-ui/anatomy";
import {
  baseTheme,
  createMultiStyleConfigHelpers,
  defineStyleConfig,
} from "@chakra-ui/react";

createMultiStyleConfigHelpers(tabsAnatomy.keys);

const {
  definePartsStyle: defineTabsPartStyle,
  defineMultiStyleConfig: defineTabsMultiStyleConfig,
} = createMultiStyleConfigHelpers(tabsAnatomy.keys);

// Extend the base Chakra UI theme with our own styles
export const theme = {
  ...baseTheme,
  styles: {
    global: {
      "*": {
        // Don't highlight taps
        WebkitTapHighlightColor: "transparent",
      },
      body: {
        // Defaults
        bg: "bg.0",
        fontSize: "body.2",
        color: "text.primary",
        "::-webkit-scrollbar": {
          display: "none",
          width: "0px",
        },
        userSelect: "none",
        fontFamily: "Lato",
      },
    },
  },
  space: {
    P0: "4px",
    P1: "8px",
    P2: "12px",
    P3: "16px",
    P4: "24px",
    P5: "32px",
    P6: "48px",
    P7: "64px",
    P8: "96px",
  },
  fontSizes: {
    display: {
      1: "56px",
      2: "44px",
      3: "36px",
    },
    body: {
      1: "32px",
      2: "28px",
      3: "24px,",
    },
    sub: {
      1: "22px",
      2: "20px",
      3: "18px",
    },
  },
  colors: {
    black: {
      50: "#F8F9FA",
      100: "#F1F3F4",
      200: "#E8EAED",
      300: "#DADCE0",
      400: "#BDC1C6",
      500: "#9AA0A6",
      600: "#80868B",
      700: "#5F6368",
      800: "#3C4043",
      846: "#282A2D",
      868: "#2E3134",
      900: "#202124",
      928: "#17181B",
      958: "#0E1013",
    },
    orange: {
      primary: "#FF5F2E",
      secondary: "#FF7B52",
      tertiary: "#FFBCA9",
    },
    blue: {
      1: "#0857C3",
      2: "#5C88DA",
    },
    red: {
      1: "#E10600",
    },
  },
  // Semantic tokens have different values depending on what mode is applied
  // We use this for colors that should change depending on the device display mode
  semanticTokens: {
    colors: {
      text: {
        headline: {
          default: "",
          _dark: "rgba(255,255,255,0.88)",
        },
        subhead: {
          default: "rgba(255,255,255,1)",
          _dark: "rgba(255,255,255,0.88)",
        },
        primary: {
          default: "rgba(255,255,255,1)",
          _dark: "rgba(255,255,255,0.88)",
        },
        sub: {
          default: "rgba(255,255,255,0.72)",
          _dark: "rgba(255,255,255,0.60)",
        },
      },
      icon: {
        default: "rgba(255,255,255,0.56)",
        _dark: "rgba(255,255,255,0.50)",
      },
      hairline: {
        default: "rgba(255,255,255,0.46)",
        _dark: "rgba(255,255,255,0.24)",
      },
      divider: {
        default: "rgba(255,255,255,0.40)",
        _dark: "rgba(255,255,255,0.20)",
      },
      bg: {
        0: {
          default: "black",
          _dark: "black",
        },
        "0_5": {
          default: "black.928",
          _dark: "black.958",
        },
        1: {
          default: "black.900",
          _dark: "black.928",
        },
        2: {
          default: "black.868",
          _dark: "black.900",
        },
        3: {
          default: "black.846",
          _dark: "black.868",
        },
        4: {
          default: "black.800",
          _dark: "black.846",
        },
        5: {
          default: "black.700",
          _dark: "black.800",
        },
      },
    },
  },
  components: {
    Button: defineStyleConfig({
      baseStyle: {
        borderRadius: "9999px",
        minWidth: "144px",
        maxWidth: "600px",
        minHeight: "48px",
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
          borderColor: "rgba(255,255,255,0.50)",
        },
      },
      sizes: {
        1: {
          height: "96px",
        },
        2: {
          height: "76px",
        },
        3: {
          height: "64px",
        },
      },
      defaultProps: {
        variant: "primary",
        size: 2,
      },
    }),
    Heading: defineStyleConfig({
      baseStyle: {
        fontSize: "display.3",
      },
    }),
    Tabs: defineTabsMultiStyleConfig({
      baseStyle: defineTabsPartStyle({
        root: {},
        indicator: {
          height: "3px",
          bg: "orange.primary",
          borderRadius: "9999px",
          marginTop: "-3px",
        },
        tablist: {
          px: "P2",
        },
        tabpanel: {},
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
      }),
    }),
  },
};
