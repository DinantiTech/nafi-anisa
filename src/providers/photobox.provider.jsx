import { createContext, useContext, useState } from "react";

const PhotoboxCtx = createContext(null);

export default function PhotoboxProvider({ children }) {
  const [photo, setPhoto] = useState({
    isOpen: false,
    currentIndexPhoto: null
  })

  const handleClosePhoto = () => setPhoto({ ...photo, isOpen: false });

  return <PhotoboxCtx.Provider value={{ photo, setPhoto, handleClosePhoto }}>{children}</PhotoboxCtx.Provider>

}

export const usePhotoBox = () => useContext(PhotoboxCtx);