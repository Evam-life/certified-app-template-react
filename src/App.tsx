import {
  Button,
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
} from "@chakra-ui/react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { ApiRounded } from "@mui/icons-material";

function App() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>
            <Stack alignItems={"center"} gap={"P0"}>
              <Icon as={HomeRoundedIcon} />
              <Text as={"span"}>Home</Text>
              {/*<Text>Home</Text>*/}
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
              <Text>Welcome to your brand new certified app</Text>
              <Button variant={"outlined"}>Explore SDK</Button>
            </Stack>
          </TabPanel>
          <TabPanel>SDK</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
