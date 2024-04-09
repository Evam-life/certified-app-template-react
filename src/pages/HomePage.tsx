import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { EvamApi } from "@evam-life/sdk";
import manifest from "../../public/evam.json";

export const HomePage = ({ onClickButton }: { onClickButton: () => void }) => {
  return (
    <Stack alignItems={"center"} gap={"P4"} pt={"P6"}>
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
        </Text>
      )}
    </Stack>
  );
};

// Inject some dummy data if not running on device
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
  EvamApi["test-utils"].inject("newOrUpdatedBattery", {
    health: "GOOD",
    status: "CHARGING",
    plugged: "AC",
    capacity: 100,
  });
  EvamApi["test-utils"].inject("newOrUpdatedInternetState", "CONNECTED_WIFI");
  EvamApi["test-utils"].inject("newOrUpdatedLocation", {
    latitude: 59.31013333333333,
    longitude: 18.055366666666668,
    timestamp: new Date(),
  });
  EvamApi["test-utils"].inject("newOrUpdatedSettings", {});
  EvamApi["test-utils"].inject("appIdSet", manifest.applicationId);
  EvamApi["test-utils"].inject("appVersionSet", manifest.version);
  EvamApi["test-utils"].inject("vehicleServicesVersionSet", "5.2.2");
  EvamApi["test-utils"].inject("osVersionSet", "34");
}
