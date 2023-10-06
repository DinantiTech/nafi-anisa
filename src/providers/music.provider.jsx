import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { BACKSOUND } from "../contants/media.const";

const MusicCtx = createContext(false);

export default function MusicProvider({ children }) {
    const [isMusic, setIsMusic] = useState(false);
    const [music, setMusic] = useState(BACKSOUND)

    const handleIsPlay = () => {
        setIsMusic(prev => !prev);
    }

    return (
        <MusicCtx.Provider value={{ isMusic, setIsMusic, handleIsPlay, music, setMusic }}>{ children }</MusicCtx.Provider>
    )
}

export const useMusic = () => useContext(MusicCtx);