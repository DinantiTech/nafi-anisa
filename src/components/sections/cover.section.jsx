import DrawerCommon from "../commons/drawer.common";
import GununganWayang from '../../assets/patterns/gunungan_wayang.png'
import { BOY_NAME_SHORT, GIRL_NAME_SHORT } from "../../contants/identity.const";
import CustomButton from "../buttons/custom.button";
import { useEffect, useState } from "react";
import { MESSAGE_OUTLINE_ICON } from "../../contants/icon.const";
import { useMusic } from '../../providers/music.provider';
import { useCover } from "../../providers/cover.provider";

export default function Cover() {
    const { setIsMusic } = useMusic()
    const { handleIsCover, setIsOpen: setIsOpenCover } = useCover();

    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(false);

    const toggleDrawer = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false);
            setIsOpen((prevState) => !prevState)
            setIsOpenCover(true)
            setIsMusic(true)
        }, 1500);
    }

    useEffect(() => {
        setIsOpenCover(false)
    }, [])

    return (
        <>
            <DrawerCommon isOpen={isOpen}>
                <div className="w-full
                h-full flex items-center justify-center flex-col z-[99] absolute top-0">
                    <img src={GununganWayang} alt="gunungan wayang" className="w-52" />


                    <div className="text-center flex flex-col items-center justify-center gap-y-5 font-title" >
                        <h4 className="text-3xl italic">THE WEDDING OF</h4>
                        <div className="text-center flex flex-col items-center font-name text-5xl">
                            <h2>{BOY_NAME_SHORT}</h2>
                            <span className="my-5">&</span>
                            <h2>{GIRL_NAME_SHORT}</h2>
                        </div>
                        {/* <h2>ANNOUNCEMENT</h2> */}
                    </div>

                    <div className="mt-10">
                        <CustomButton loading={loading} name="Buka undangan" icon={MESSAGE_OUTLINE_ICON} onClick={toggleDrawer} />
                    </div>
                </div>
            </DrawerCommon>
        </>
    )
}