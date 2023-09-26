import Masonry from "react-responsive-masonry";
import { GALERIES } from "../../contants/identity.const";
import { Suspense, lazy, useState } from "react";

const PhotoboxModal = lazy(() => import("../commons/modal_photobox.common"))

export default function Galeries() {
    const [getPhoto, setGetPhoto] = useState({
        isOpen: false,
        currentIndexPhoto: null
      })

      const handleClosePhoto = () => setGetPhoto({ ...getPhoto, isOpen: false })
    return (
        <div className="w-full px-4 flex items-center justify-center flex-col">
            <h1 className="sm:text-2xl text-xl font-semibold mb-7">Galeri Kami</h1>

            <Masonry columnsCount={3} gutter="10px">
                {GALERIES?.map((data, index) => (
                    <img onClick={() => setGetPhoto({ isOpen: true, currentIndexPhoto: index})} key={index} src={data} style={{width: "100%", display: "block"}} alt={`Foto ${index}`} className="aspect-auto rounded-md" />
                ))}
            </Masonry>

            <Suspense>
                { getPhoto.isOpen ? (
                    <PhotoboxModal isOpen={getPhoto.isOpen} indexPhoto={getPhoto.currentIndexPhoto} onClose={handleClosePhoto}/>
                ) : null }
            </Suspense>
        </div>
    )
}