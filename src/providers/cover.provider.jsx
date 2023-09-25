import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CoverCtx = createContext(false);

export default function CoverProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsCover = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <CoverCtx.Provider value={{ isOpen, setIsOpen, handleIsCover }}>{ children }</CoverCtx.Provider>
    )
}

export const useCover = () => useContext(CoverCtx);