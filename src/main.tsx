import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme.ts";
import "@fontsource/lato";
import { ChakraDisplayModeSyncer } from "./components/ChakraDisplayModeSyncer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <ChakraDisplayModeSyncer />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
