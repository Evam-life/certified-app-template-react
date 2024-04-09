import { VehicleServicesEvent } from "@evam-life/sdk";
import { useEvamData } from "../hooks/useEvamData.ts";
import { chakra, Code } from "@chakra-ui/react";

/**
 * Listens to an SDK event and displays its data in a code block
 */
export const EvamData = chakra(
  ({
    event,
    className,
  }: {
    event: VehicleServicesEvent;
    className?: string;
  }) => {
    const data = useEvamData(event);
    return (
      <Code className={className}>
        {JSON.stringify(data, undefined, 2) || "undefined"}
      </Code>
    );
  },
);
