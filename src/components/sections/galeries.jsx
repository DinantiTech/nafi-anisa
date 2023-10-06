import Masonry from "react-responsive-masonry";
import { GALERIES } from "../../contants/identity.const";
import { usePhotoBox } from "../../providers/photobox.provider";

export default function Galeries() {
  const { setPhoto } = usePhotoBox()

    return (
        <div className="w-full px-4 flex items-center justify-center flex-col">
            <h1 className="sm:text-2xl text-xl font-semibold mb-7">Galeri Kami</h1>

            <Masonry columnsCount={3} gutter="10px">
                {GALERIES?.map((data, index) => (
                    <img onClick={() => setPhoto({ isOpen: true, currentIndexPhoto: index})} key={index} src={data} style={{width: "100%", display: "block"}} alt={`Foto ${index}`} className="aspect-auto rounded-md" />
                ))}
            </Masonry>
        </div>
    )
}