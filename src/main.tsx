import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme.ts";
import "@fontsource/lato";
import { EvamApi } from "@evam-life/sdk";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

if (!EvamApi.isRunningInVehicleServices) {
  // Inject Display mode from system
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      EvamApi["test-utils"].inject(
        "newOrUpdatedDisplayMode",
        event.matches ? "DARK" : "LIGHT",
      );
    });
}
