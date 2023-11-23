import { IMusic, MUSICMEDIA } from "@/constants/media.const";
import { ReactElement, SetStateAction, useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

interface ICtxMusic {
    isMusic: boolean;
    setIsMusic: void;
    handleIsPlay: void;
    music: IMusic;
    setMusic: void
}

const MusicCtx = createContext<any>(false);

export default function MusicProvider({ children }: { children: ReactElement }) {
    const [isMusic, setIsMusic] = useState(false);
    const [music, setMusic] = useState<IMusic>(MUSICMEDIA)

    const handleIsPlay = (): void => {
        return setIsMusic((prev: boolean) => !prev);
    }

    return (
        <MusicCtx.Provider value={{ isMusic, setIsMusic, handleIsPlay, music, setMusic }}>{ children }</MusicCtx.Provider>
    )
}

export const useMusic = () => useContext(MusicCtx);