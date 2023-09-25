import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const MusicCtx = createContext(false);

export default function MusicProvider({ children }) {
    const [isMusic, setIsMusic] = useState(false);

    const handleIsPlay = () => {
        setIsMusic(prev => !prev);
    }

    return (
        <MusicCtx.Provider value={{ isMusic, setIsMusic, handleIsPlay }}>{ children }</MusicCtx.Provider>
    )
}

export const useMusic = () => useContext(MusicCtx);