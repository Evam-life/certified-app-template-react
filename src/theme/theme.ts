import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { tabsTheme } from "./components/tabs.ts";
import { buttonTheme } from "./components/button.ts";
import { accordionTheme } from "./components/accordion.ts";
import { alertTheme } from "./components/alert.ts";

// Extend the base Chakra UI theme with our own styles
export const theme = extendTheme((theme) => ({
  ...theme,
  styles: {
    global: {
      "*": {
        // Don't highlight taps
        WebkitTapHighlightColor: "transparent",
        // Hide scrollbars
        "::-webkit-scrollbar": {
          display: "none",
          width: "0px",
        },
      },
      body: {
        // Defaults
        bg: "bg.0",
        fontSize: "body.2",
        color: "text.primary",
        userSelect: "none",
        fontFamily: "Lato",
      },
      "#root": {
        height: "100vh",
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
      846: "#2E3134",
      868: "#282A2D",
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
    ...theme.components,
    Heading: defineStyleConfig({
      baseStyle: {
        fontSize: "display.3",
      },
    }),
    Button: buttonTheme,
    Tabs: tabsTheme,
    Accordion: accordionTheme,
    Code: defineStyleConfig({
      baseStyle: {
        width: "100%",
        p: "P2",
        background: "bg.2",
        fontSize: "sub.3",
        whiteSpace: "pre",
        overflow: "scroll",
        userSelect: "text",
      },
    }),
  },
}));
