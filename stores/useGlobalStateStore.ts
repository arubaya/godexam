import { create } from "zustand";

type GlobalState = {
  openSidebarNavigation: boolean;
};

type GlobalStateAction = {
  setOpenSidebarNavigation: (open: boolean) => void;
};

type GLobalStateStore = GlobalState & GlobalStateAction;

const INIT_GLOBAL_STATE: GlobalState = {
  openSidebarNavigation: false,
};

const useGlobalStateStore = create<GLobalStateStore>((set) => ({
  ...INIT_GLOBAL_STATE,
  setOpenSidebarNavigation: (open) => set({ openSidebarNavigation: open }),
}));

export default useGlobalStateStore;
