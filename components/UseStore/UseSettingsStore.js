import { create } from "zustand";

const UseSettingsStore = create(() => ({
  settings: {
    theme: "",
    pkmnSearchQuery: "",
    activeSet: "",
    activeSetName: "",
  },
  setSetting: (setting, newValue) => {
    UseSettingsStore.setState((state) => ({
      settings: {
        ...state.settings,
        [setting]: newValue,
      },
    }));
  },
}));

export default UseSettingsStore;
