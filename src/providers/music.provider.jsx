import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const MusicCtx = createContext(false);

export default function MusicProvider({ children }) {
    const [isMusic, setIsMusic] = useState(false)

    return (
        <MusicCtx.Provider value={{ isMusic, setIsMusic }}>{ children }</MusicCtx.Provider>
    )
}

export const useMusic = () => useContext(MusicCtx);