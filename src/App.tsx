import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Code,
  Heading,
  Icon,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { ApiRounded } from "@mui/icons-material";
import { useEffect } from "react";
import { EvamApi } from "@evam-life/sdk";

/**
 * Listens to the device display mode and injects it into our app.
 */
const ChakraDisplayModeSyncer = () => {
  const { setColorMode } = useColorMode();
  useEffect(() => {
    return EvamApi.event.on("newOrUpdatedDisplayMode", (displayMode) => {
      if (!displayMode) return;
      setColorMode(displayMode === "DARK" ? "dark" : "light");
    });
  }, [setColorMode]);
  return null;
};

function App() {
  return (
    <>
      <ChakraDisplayModeSyncer />
      <Tabs>
        <TabList>
          <Tab>
            <Stack alignItems={"center"} gap={"P0"}>
              <Icon as={HomeRoundedIcon} />
              <Text as={"span"}>Home</Text>
            </Stack>
          </Tab>
          <Tab>
            <Stack alignItems={"center"}>
              <Icon as={ApiRounded} />
              <Text as={"span"}>SDK</Text>
            </Stack>
          </Tab>
        </TabList>
        <TabIndicator />
        <TabPanels>
          <TabPanel>
            <Stack alignItems={"center"} gap={"P4"} pt={"P6"}>
              <Heading>Welcome!</Heading>
              <Text>Welcome to your very own certified app!</Text>
              <Button variant={"outlined"}>Explore SDK</Button>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <Heading>
                  <AccordionButton>Operation</AccordionButton>
                </Heading>
                <AccordionPanel>
                  <Text>lsdf</Text>
                  <Code>Lol</Code>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Heading>
                  <AccordionButton>Location</AccordionButton>
                </Heading>
                <AccordionPanel>
                  <Code>Lol</Code>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
