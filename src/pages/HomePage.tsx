import { Button, Heading, Stack, Text } from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <Stack alignItems={"center"} gap={"P4"} pt={"P6"}>
      <Heading>Welcome</Heading>
      <Text>Welcome to your very own certified app!</Text>
      <Button variant={"outlined"}>Explore SDK</Button>
    </Stack>
  );
};
