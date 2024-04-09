import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { EvamApi } from "@evam-life/sdk";

export const HomePage = ({ onClickButton }: { onClickButton: () => void }) => {
  return (
    <Stack height={"100%"} alignItems={"center"} gap={"P4"} pt={"P6"}>
      <Heading>Welcome</Heading>
      <Text>This is your very own certified app!</Text>
      <Button variant={"primary"} onClick={onClickButton}>
        Explore SDK
      </Button>
      {!EvamApi.isRunningInVehicleServices && (
        <Text
          fontSize={"sub.1"}
          fontStyle={"italic"}
          textAlign={"center"}
          maxWidth={"500px"}
        >
          Since this app is not currently running on a device, we've injected
          some test data for you to explore.
          {/* See App.tsx  */}
        </Text>
      )}
    </Stack>
  );
};
