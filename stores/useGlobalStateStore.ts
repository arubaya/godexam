import { AlertColor } from "@mui/material";
import { create } from "zustand";

type GlobalState = {
  openSidebarNavigation: boolean;
  alertData: {
    isOpen: boolean;
    message: string;
    severity: AlertColor;
  };
};

type GlobalStateAction = {
  setOpenSidebarNavigation: (open: boolean) => void;
  setOpenAlert: (alertData: GlobalState["alertData"]) => void;
};

type GLobalStateStore = GlobalState & GlobalStateAction;

export const INIT_GLOBAL_STATE: GlobalState = {
  openSidebarNavigation: false,
  alertData: {
    isOpen: false,
    message: "",
    severity: "success",
  },
};

const useGlobalStateStore = create<GLobalStateStore>((set) => ({
  ...INIT_GLOBAL_STATE,
  setOpenSidebarNavigation: (open) => set({ openSidebarNavigation: open }),
  setOpenAlert: (alertData) => set({ alertData }),
}));

export default useGlobalStateStore;
