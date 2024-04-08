import {
  EvamApi,
  VehicleServicesEvent,
  VehicleServicesEventPayload,
} from "@evam-life/sdk";
import { useEffect, useState } from "react";

/**
 * Generic hook to subscribe to updates to any data in the Evam SDK.
 * @note Make sure that your app manifest (evam.json) includes the permissions for
 * the data that you are requesting.
 * @param event Evam event to listen to
 */
export const useEvamData = <E extends VehicleServicesEvent>(event: E) => {
  const [data, setData] = useState<VehicleServicesEventPayload<E> | undefined>(
    undefined,
  );
  useEffect(() => {
    return EvamApi.event.on(event, setData);
  }, [event]);

  return data;
};
