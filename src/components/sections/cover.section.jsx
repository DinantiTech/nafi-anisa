import DrawerCommon from "../commons/drawer.common";
import GununganWayang from '../../assets/patterns/gunungan_wayang.png'
import { BOY_NAME_SHORT, GIRL_NAME_SHORT } from "../../contants/identity.const";
import CustomButton from "../buttons/custom.button";
import { useState } from "react";
import { MESSAGE_OUTLINE_ICON } from "../../contants/icon.const";

export default function Cover() {
    const [isOpen, setIsOpen] = useState(true);
    const [loading, setLoading] = useState(false);

    const toggleDrawer = () => {
    setLoading(true)

    setTimeout(() => {
        setLoading(false);
        setIsOpen((prevState) => !prevState)
        }, 1500);
    }

    return (
        <>
            <DrawerCommon isOpen={isOpen}>
                <div className="w-full
                 h-full flex items-center justify-center flex-col">
                    <img src={GununganWayang} alt="gunungan wayang" className="w-52" />


                    <div className="text-center flex flex-col items-center justify-center gap-y-5">
                        <h4>THE WEDDING OF</h4>
                        <div className="text-center flex flex-col items-center justify-">
                            <h2>{BOY_NAME_SHORT}</h2>
                            <span>&</span>
                            <h2>{GIRL_NAME_SHORT}</h2>
                        </div>
                        <h2>ANNOUNCEMENT</h2>
                    </div>

                    <div className="mt-10">
                        <CustomButton loading={loading} name="Buka undangan" icon={MESSAGE_OUTLINE_ICON} onClick={toggleDrawer} />
                    </div>
                </div>  
            </DrawerCommon>
        </>
    )
}