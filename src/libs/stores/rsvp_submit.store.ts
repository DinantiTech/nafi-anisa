import { storageKeyvalDb } from "@/libs/helpers/db_keyval.helper";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type RSVPSubmitState = {
    isRSVPSubmit: boolean;
}

type RSVPSubmitAction = {
    setRSVPSubmit: (status: RSVPSubmitState["isRSVPSubmit"]) => void;
}

export const useRSVPSubmitStore = create(
    persist<RSVPSubmitState & RSVPSubmitAction>(
        (set, get) => ({
            isRSVPSubmit: false,
            setRSVPSubmit: (status) => set(() => ({ isRSVPSubmit: status })),
        }),
        {
            name: "RSVP_SUBMIT",
            storage: createJSONStorage(() => storageKeyvalDb)
        }
    )
)