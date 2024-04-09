import { useEvamData } from "./useEvamData.ts";
import { EvamApi } from "@evam-life/sdk";

export const useOperation = () => {
  const operation = useEvamData("newOrUpdatedOperation");
  return {
    operation,
    setPriority: EvamApi.operation.setPriority,
    setHospital: EvamApi.operation.setHospital,
  };
};
