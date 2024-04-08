import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Code,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEvamData } from "../hooks/useEvamData.ts";
import { EvamApi } from "@evam-life/sdk";

export const SdkPage = () => {
  const operation = useEvamData("newOrUpdatedOperation");
  const battery = useEvamData("newOrUpdatedBattery");
  const displayMode = useEvamData("newOrUpdatedDisplayMode");
  const internetState = useEvamData("newOrUpdatedInternetState");
  const location = useEvamData("newOrUpdatedLocation");
  const operationList = useEvamData("newOrUpdatedOperationList");
  const rakelMessages = useEvamData("newOrUpdatedRakelMessages");
  const rakelState = useEvamData("newOrUpdatedRakelState");
  const settings = useEvamData("newOrUpdatedSettings");
  const tripLocationHistory = useEvamData("newOrUpdatedTripLocationHistory");
  const vehicleState = useEvamData("newOrUpdatedVehicleState");
  const vehicleStatusList = useEvamData(
    "newOrUpdatedAvailableVehicleStatusList",
  );
  const appVersion = useEvamData("appVersionSet");
  const vehicleServicesVersion = useEvamData("vehicleServicesVersionSet");
  const osVersion = useEvamData("osVersionSet");
  return (
    <Accordion allowMultiple height={"100%"}>
      <AccordionItem>
        <AccordionButton>
          Active Operation
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>{JSON.stringify(operation, undefined, 2) || "undefined"}</Code>
          <Button size={"3"} variant={"primary"}>
            test
          </Button>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          Battery
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>{JSON.stringify(battery, undefined, 2) || "undefined"}</Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          Display Mode
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>
            {JSON.stringify(displayMode, undefined, 2) || "undefined"}
          </Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          Internet State
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>
            {JSON.stringify(internetState, undefined, 2) || "undefined"}
          </Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Location</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>{JSON.stringify(location, undefined, 2) || "undefined"}</Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Operation List</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>
            {JSON.stringify(operationList, undefined, 2) || "undefined"}
          </Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Rakel Messages</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>
            {JSON.stringify(rakelMessages, undefined, 2) || "undefined"}
          </Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Rakel State</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>{JSON.stringify(rakelState, undefined, 2) || "undefined"}</Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Settings</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>{JSON.stringify(settings, undefined, 2) || "undefined"}</Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Trip Location History</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>
            {JSON.stringify(tripLocationHistory, undefined, 2) || "undefined"}
          </Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Vehicle State</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>
            {JSON.stringify(vehicleState, undefined, 2) || "undefined"}
          </Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Vehicle Status List</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Code>
            {JSON.stringify(vehicleStatusList, undefined, 2) || "undefined"}
          </Code>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Versions</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Heading fontSize={"body.3"}>Certified App</Heading>
          <Code>{JSON.stringify(appVersion, undefined, 2) || "undefined"}</Code>
          <Heading fontSize={"body.3"}>Vehicle Services</Heading>
          <Code>
            {JSON.stringify(vehicleServicesVersion, undefined, 2) ||
              "undefined"}
          </Code>
          <Heading fontSize={"body.3"}>Operating System</Heading>
          <Code>{JSON.stringify(osVersion, undefined, 2) || "undefined"}</Code>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

if (!EvamApi.isRunningInVehicleServices) {
  EvamApi["test-utils"].inject("newOrUpdatedOperation", {
    operationID: "211",
    operationFullId: "1:1:211",
    name: "Olycka (Trauma)",
    sendTime: new Date(1668609413000),
    createdTime: new Date(1668608668000),
    acceptedTime: new Date(1712585596000),
    callCenterId: "16",
    caseFolderId: "128",
    medicalIncidentOfficer: "Sjukvärdsledare",
    radioGroupSecondary: "230 RtjIns-1, 240-1-9030012",
    availablePriorities: [
      { id: 1, name: "PRIO 1" },
      { id: 2, name: "PRIO 2" },
      { id: 3, name: "PRIO 3" },
    ],
    patientName: "Sven Svensson",
    patientUID: "19921224-1234",
    vehicleStatus: {
      name: "Disponibel",
      isStartStatus: false,
      isEndStatus: false,
      categoryType: "STATUS_MISSION",
      categoryName: "mission",
      successorName: "Klar uppdrag",
      event: "EVENT_EXIT_SITE",
    },
    destinationSiteLocation: {
      latitude: 59.248083333333334,
      longitude: 18.240066666666667,
      street: "Siklöjevägen 27",
      locality: "Bollmora",
      municipality: "Tyresö",
      routeDirections: "Fast mobil",
      pickupTime: "2022-11-16 14:24:28.898",
    },
    availableHospitalLocations: [
      { id: 0, latitude: 59.36339, longitude: 17.967539, name: "My hospital" },
      { id: 1, latitude: 59.353016, longitude: 17.970813, name: "Karolinska" },
    ],
    header1: "Högenergivåld och/eller multipla skador",
    eventInfo: "Något har gått snett",
    caseInfo: "I rackethallen\u0014\n",
    selectedPriority: 1,
    operationState: "ACTIVE",
    leavePatientLocation: {
      latitude: 59.31013333333333,
      longitude: 18.055366666666668,
      street: "Sjukhusbacken 12 'Södersjukhuset-Akutmottagning'",
      locality: "Tyresö",
      municipality: "Stockholm",
      leaveTime: "2022-11-16 17:00:00.000",
    },
    assignedResourceMissionNo: "TetraR3E4",
    operationUnits: [{ unitId: "TetraR3", source: "RAKEL" }],
  });
}
