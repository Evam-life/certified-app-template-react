import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { EvamApi, VehicleServicesUtils } from "@evam-life/sdk";
import { EvamData } from "../components/EvamData.tsx";
import { useEvamData } from "../hooks/useEvamData.ts";

export const SdkPage = () => {
  const operation = useEvamData("newOrUpdatedOperation");
  const location = useEvamData("newOrUpdatedLocation");

  return (
    <Accordion height={"100%"} allowToggle>
      <AccordionItem>
        <AccordionButton>
          Active Operation
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Stack gap={"P2"}>
            <EvamData event={"newOrUpdatedOperation"} />
            {!!operation?.availablePriorities && (
              <Flex alignItems={"center"} flexWrap={"wrap"} gap={"P2"}>
                <Text>Set Priority</Text>
                {operation.availablePriorities.map((prio) => (
                  <Button
                    key={prio.id}
                    size={"3"}
                    variant={"secondary"}
                    onClick={() => EvamApi.operation.setPriority(prio.id)}
                  >
                    {prio.name}
                  </Button>
                ))}
              </Flex>
            )}
            {!!operation?.availableHospitalLocations && (
              <Flex alignItems={"center"} flexWrap={"wrap"} gap={"P2"}>
                <Text>Set Hospital</Text>
                {operation.availableHospitalLocations.map((hospital) => (
                  <Button
                    key={hospital.id}
                    size={"3"}
                    variant={"secondary"}
                    onClick={() => EvamApi.operation.setHospital(hospital.id)}
                  >
                    {hospital.name}
                  </Button>
                ))}
              </Flex>
            )}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          App Lifecycle
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Button
            variant={"secondary"}
            onClick={() => setTimeout(EvamApi.app.putInForeground, 5000)}
          >
            Put app in foreground in 5 seconds
          </Button>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          Battery
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <EvamData event={"newOrUpdatedBattery"} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          Display Mode
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <EvamData event={"newOrUpdatedDisplayMode"} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          Internet State
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <EvamData event={"newOrUpdatedInternetState"} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Location</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <EvamData event={"newOrUpdatedLocation"} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Map</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Stack gap={"P2"}>
            <Stack>
              <Text>Add Points Layer</Text>
              <Flex alignItems={"center"} flexWrap={"wrap"} gap={"P1"}>
                <Button
                  variant={"secondary"}
                  size={"3"}
                  onClick={() =>
                    EvamApi.map.setNavLayerPoint("ambulance", [
                      {
                        point: {
                          latitude: location!.latitude + 0.00025,
                          longitude: location!.longitude - 0.0005,
                        },
                        text: "Ambulance",
                        icon: "ambulance.png",
                      },
                    ])
                  }
                >
                  Ambulance
                </Button>
                <Button
                  variant={"secondary"}
                  size={"3"}
                  onClick={() =>
                    EvamApi.map.setNavLayerPoint("firetruck", [
                      {
                        point: {
                          latitude: location!.latitude - 0.00025,
                          longitude: location!.longitude + 0.0005,
                        },
                        text: "Firetruck",
                        icon: "firetruck.png",
                      },
                    ])
                  }
                >
                  Firetruck
                </Button>
                <Button
                  variant={"outlined"}
                  size={"3"}
                  onClick={() => {
                    EvamApi.map.deleteNavLayer("ambulance");
                    EvamApi.map.deleteNavLayer("firetruck");
                  }}
                >
                  Remove
                </Button>
              </Flex>
            </Stack>
            <Stack>
              <Text>Add Shapes Layer</Text>
              <Flex alignItems={"center"} flexWrap={"wrap"} gap={"P1"}>
                <Button
                  variant={"secondary"}
                  size={"3"}
                  onClick={() =>
                    EvamApi.map.setNavLayerShape("green-area", [
                      {
                        points: [
                          {
                            latitude: location!.latitude + 0.001,
                            longitude: location!.longitude + 0.002,
                          },
                          {
                            latitude: location!.latitude,
                            longitude: location!.longitude + 0.002,
                          },
                          {
                            latitude: location!.latitude,
                            longitude: location!.longitude,
                          },
                          {
                            latitude: location!.latitude + 0.001,
                            longitude: location!.longitude,
                          },
                        ],
                        text: "Green Area",
                        color: "#6E00FF00",
                      },
                    ])
                  }
                >
                  Green Area
                </Button>
                <Button
                  variant={"secondary"}
                  size={"3"}
                  onClick={() =>
                    EvamApi.map.setNavLayerShape("red-area", [
                      {
                        points: [
                          {
                            latitude: location!.latitude - 0.001,
                            longitude: location!.longitude - 0.002,
                          },
                          {
                            latitude: location!.latitude,
                            longitude: location!.longitude - 0.002,
                          },
                          {
                            latitude: location!.latitude,
                            longitude: location!.longitude,
                          },
                          {
                            latitude: location!.latitude - 0.001,
                            longitude: location!.longitude,
                          },
                        ],
                        text: "Red Area",
                        color: "#6EFF0F00",
                      },
                    ])
                  }
                >
                  Red Area
                </Button>
                <Button
                  variant={"outlined"}
                  size={"3"}
                  onClick={() => {
                    EvamApi.map.deleteNavLayer("green-area");
                    EvamApi.map.deleteNavLayer("red-area");
                  }}
                >
                  Remove
                </Button>
              </Flex>
            </Stack>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Notifications</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Flex gap={"P2"} flexWrap={"wrap"}>
            {VehicleServicesUtils.iterators.notificationTypes.map(
              (notificationType) => (
                <Button
                  key={notificationType}
                  size={"3"}
                  variant={"secondary"}
                  onClick={() =>
                    EvamApi.notification.send({
                      notificationId: notificationType, // Optional ID can be used to remove sent notifications
                      heading: "Heading",
                      description: `Notification from certified app of type ${notificationType}`,
                      primaryButton: {
                        label: "Primary",
                        callback: () => {
                          alert("Primary button was pressed");
                        },
                      },
                      secondaryButton: {
                        label: "Secondary",
                        callback: () => {
                          alert("Secondary button was pressed");
                        },
                      },
                      notificationType,
                    })
                  }
                >
                  {notificationType}
                </Button>
              ),
            )}
            <Button
              variant={"outlined"}
              size={"3"}
              onClick={() => {
                VehicleServicesUtils.iterators.notificationTypes.forEach(
                  EvamApi.notification.remove,
                );
              }}
            >
              Remove Notifications
            </Button>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Operation List</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <EvamData event={"newOrUpdatedOperationList"} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Rakel Radio</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Stack gap={"P2"}>
            <Stack>
              <Heading fontSize={"sub.1"}>Messages</Heading>
              <EvamData event={"newOrUpdatedRakelMessages"} minBlockSize={64} />
            </Stack>
            <Stack>
              <Heading fontSize={"sub.1"}>State</Heading>
              <EvamData event={"newOrUpdatedRakelState"} />
            </Stack>
            <Flex alignItems={"center"} gap={"P2"}>
              <Text>Send Action</Text>
              <Button
                variant={"secondary"}
                size={"3"}
                onClick={() => EvamApi.rakel.sendRawRakelAction(["AT+GMI\r"])}
              >
                AT+GMI
              </Button>
            </Flex>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Settings</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <EvamData event={"newOrUpdatedSettings"} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Trip Location History</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <EvamData event={"newOrUpdatedTripLocationHistory"} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Vehicle State</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <EvamData event={"newOrUpdatedVehicleState"} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Vehicle Status List</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <EvamData event={"newOrUpdatedAvailableVehicleStatusList"} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Text>Versions</Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text>Certified App</Text>
          <EvamData event={"appVersionSet"} />
          <Text>Vehicle Services</Text>
          <EvamData event={"vehicleServicesVersionSet"} />
          <Text>Operating System</Text>
          <EvamData event={"osVersionSet"} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
