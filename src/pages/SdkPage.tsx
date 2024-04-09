import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { EvamApi, VehicleServicesUtils } from "@evam-life/sdk";
import { EvamData } from "../components/EvamData.tsx";

export const SdkPage = () => {
  return (
    <Accordion allowMultiple height={"100%"}>
      <AccordionItem>
        <AccordionButton>
          Active Operation
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <EvamData event={"newOrUpdatedOperation"} />
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
          <Heading fontSize={"sub.1"}>Messages</Heading>
          <EvamData event={"newOrUpdatedRakelMessages"} minBlockSize={64} />
          <Heading fontSize={"sub.1"}>State</Heading>
          <EvamData event={"newOrUpdatedRakelState"} />
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

