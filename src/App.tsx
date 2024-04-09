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
import { useState } from "react";
import { EvamApi, Operation } from "@evam-life/sdk";
import manifest from "../public/evam.json";

function App() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  return (
    <>
      <Tabs height={"100%"} index={tabIndex} onChange={setTabIndex}>
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
            <HomePage onClickButton={() => setTabIndex(1)} />
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

// If debug mode is enabled, log all events
EvamApi.event.on("newOrUpdatedSettings", (settings) => {
  const { debug } = { debug: false, ...settings };
  if (debug) {
    EvamApi["test-utils"].initLog(console.log, console.error);
  }
});

// Inject some test data if not running on device
if (!EvamApi.isRunningInVehicleServices) {
  EvamApi["test-utils"].inject(
    "newOrUpdatedSettings",
    Object.fromEntries(
      manifest.settings.map((setting) => [setting.id, setting.value.default]),
    ),
  );
  EvamApi["test-utils"].inject("appIdSet", manifest.applicationId);
  EvamApi["test-utils"].inject("appVersionSet", manifest.version);
  EvamApi["test-utils"].inject("vehicleServicesVersionSet", "5.2.2");
  EvamApi["test-utils"].inject("osVersionSet", "34");

  const operation: Operation = {
    operationFullId: "18:1358263:1",
    operationID: "1",
    name: "Trafikolycka",
    sendTime: new Date(),
    createdTime: new Date(),
    acceptedTime: new Date(),
    callCenterId: "18",
    caseFolderId: "1358263",
    radioGroupMain: "Sthm RAPS-01, 240-1-9030011",
    radioGroupSecondary: "230 RtjIns-1, 240-1-9230022",
    availablePriorities: [
      {
        id: 1,
        name: "PRIO 1",
      },
      {
        id: 2,
        name: "PRIO 2",
      },
      {
        id: 3,
        name: "PRIO 3",
      },
    ],
    vehicleStatus: {
      name: "Kvittera",
      isStartStatus: true,
      isEndStatus: false,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
      successorName: "Framme",
      event: "EVENT_OPERATION_CONFIRMED",
    },
    destinationSiteLocation: {
      latitude: 59.368248333333334,
      longitude: 18.020505,
      street: "E4 Norrgående",
      locality: "Stockholm",
      municipality: "Stockholm",
    },
    availableHospitalLocations: [
      {
        id: 0,
        latitude: 59.36339,
        longitude: 17.967539,
        name: "S:t Görans",
      },
      {
        id: 1,
        latitude: 59.353016,
        longitude: 17.970813,
        name: "Karolinska",
      },
    ],
    header1: "Personbil",
    header2: "Övrigt",
    caseInfo:
      "Tre bilar inblandade. Två skadade. En person fastklämd enligt ambulans på plats.",
    selectedPriority: 1,
    operationState: "ACTIVE",
    operationUnits: [
      {
        unitId: "101-0090",
        status: "Framme",
        source: "RAKEL",
        reportedInArea: "Stockholm",
      },
    ],
  };
  EvamApi["test-utils"].inject("newOrUpdatedOperation", operation);
  EvamApi["test-utils"].inject("newOrUpdatedOperationList", [operation]);
  EvamApi["test-utils"].inject("newOrUpdatedBattery", {
    health: "GOOD",
    status: "CHARGING",
    plugged: "AC",
    capacity: 100,
  });
  EvamApi["test-utils"].inject("newOrUpdatedVehicleState", {
    timestamp: new Date(),
    vehicleStatus: {
      name: "Kvittera",
      event: "EVENT_OPERATION_CONFIRMED",
      successorName: "Framme",
      isStartStatus: true,
      isEndStatus: false,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
    },
    activeCaseFullId: "18:1358263:1",
    vehicleLocation: {
      latitude: 59.3541301692371,
      longitude: 17.974064733735116,
      timestamp: new Date(),
    },
  });
  EvamApi["test-utils"].inject("newOrUpdatedInternetState", "CONNECTED_WIFI");
  EvamApi["test-utils"].inject("newOrUpdatedLocation", {
    latitude: 59.354481,
    longitude: 17.974456999999997,
    timestamp: new Date(),
  });
  EvamApi["test-utils"].inject("newOrUpdatedTripLocationHistory", {
    locationHistory: [
      {
        latitude: 59.35448378327759,
        longitude: 17.974460479096983,
        timestamp: new Date(),
      },
      {
        latitude: 59.354481,
        longitude: 17.974456999999997,
        timestamp: new Date(new Date().getTime() + 1000),
      },
      {
        latitude: 59.35448378327759,
        longitude: 17.974460479096983,
        timestamp: new Date(new Date().getTime() + 2000),
      },
      {
        latitude: 59.35448378327759,
        longitude: 17.974460479096983,
        timestamp: new Date(new Date().getTime() + 3000),
      },
      {
        latitude: 59.35448378327759,
        longitude: 17.974460479096983,
        timestamp: new Date(new Date().getTime() + 4000),
      },
      {
        latitude: 59.354481,
        longitude: 17.974456999999997,
        timestamp: new Date(new Date().getTime() + 5000),
      },
    ],
  });
  EvamApi["test-utils"].inject("newOrUpdatedAvailableVehicleStatusList", [
    {
      name: "Kvittera",
      event: "EVENT_OPERATION_CONFIRMED",
      successorName: "Framme",
      isStartStatus: true,
      isEndStatus: false,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
    },
    {
      name: "Brytpunkt",
      event: "EVENT_AT_BREAKPOINT",
      successorName: "Framme",
      isStartStatus: false,
      isEndStatus: false,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
    },
    {
      name: "Framme",
      event: "EVENT_AT_SITE",
      successorName: "Lastat",
      isStartStatus: false,
      isEndStatus: false,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
    },
    {
      name: "Lastat",
      event: "EVENT_EXIT_SITE",
      successorName: "Lämnar",
      isStartStatus: false,
      isEndStatus: false,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
    },
    {
      name: "Lämnar",
      event: "EVENT_AT_HOSPITAL",
      successorName: "Disponibel",
      isStartStatus: false,
      isEndStatus: false,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
    },
    {
      name: "Disponibel",
      event: "EVENT_EXIT_SITE",
      successorName: "Klar uppdrag",
      isStartStatus: false,
      isEndStatus: false,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
    },
    {
      name: "Klar uppdrag",
      event: "EVENT_AT_HOME_STATION",
      isStartStatus: false,
      isEndStatus: true,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
    },
    {
      name: "Disponibel Station",
      isStartStatus: false,
      isEndStatus: false,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
    },
    {
      name: "Disponibel Radio",
      isStartStatus: false,
      isEndStatus: false,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
    },
    {
      name: "SOS Individ",
      isStartStatus: false,
      isEndStatus: false,
      categoryType: "STATUS_OTHER",
      categoryName: "Talbegäran",
    },
    {
      name: "SOS Grupp",
      isStartStatus: false,
      isEndStatus: false,
      categoryType: "STATUS_OTHER",
      categoryName: "Talbegäran",
    },
  ]);
  EvamApi["test-utils"].inject("newOrUpdateRakelState", {
    isHealthy: false,
  });
}
