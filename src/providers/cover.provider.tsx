import { ReactElement, useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CoverCtx = createContext<any>(false);

export default function CoverProvider({ children }: { children: ReactElement }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleIsCover = () => {
        setIsOpen((prev: boolean) => !prev);
    }

    return (
        <CoverCtx.Provider value={{ isOpen, setIsOpen, handleIsCover }}>{ children }</CoverCtx.Provider>
    )
}

export const useCover = () => useContext(CoverCtx);