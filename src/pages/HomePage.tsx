import { Button, Heading, Stack, Text } from "@chakra-ui/react";

export const HomePage = ({ onClickButton }: { onClickButton: () => void }) => {
  return (
    <Stack alignItems={"center"} gap={"P4"} pt={"P6"}>
      <Heading>Welcome</Heading>
      <Text>Welcome to your very own certified app!</Text>
      <Button variant={"primary"} onClick={onClickButton}>
        Explore SDK
      </Button>
    </Stack>
  );
};
