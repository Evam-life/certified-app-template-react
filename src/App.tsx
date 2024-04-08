import {
  Box,
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
import { HomePage } from "./pages/HomePage.tsx";
import { SdkPage } from "./pages/SdkPage.tsx";

function App() {
  return (
    <>
      <Tabs height={"100%"}>
        <Box>
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
        </Box>
        <TabPanels>
          <TabPanel>
            <HomePage />
          </TabPanel>
          <TabPanel>
            <SdkPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default App;
