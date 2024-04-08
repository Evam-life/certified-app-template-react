import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { EvamApi } from "@evam-life/sdk";

/**
 * Listens to the device display mode and changes the theme to match it.
 * Should be rendered somewhere within the ChakraProvider.
 */
export const ChakraDisplayModeSyncer = () => {
  const { setColorMode } = useColorMode();
  useEffect(() => {
    return EvamApi.event.on("newOrUpdatedDisplayMode", (displayMode) => {
      if (!displayMode) return;
      setColorMode(displayMode === "DARK" ? "dark" : "light");
    });
  }, [setColorMode]);
  return null;
};

if (!EvamApi.isRunningInVehicleServices) {
  // Inject Display mode from browser if not running on device
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      EvamApi["test-utils"].inject(
        "newOrUpdatedDisplayMode",
        event.matches ? "DARK" : "LIGHT",
      );
    });
}
