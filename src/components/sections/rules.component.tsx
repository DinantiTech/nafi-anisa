import localFont from "next/font/local";
import MobileLayout from "../layouts/mobile.layout";
import HeadingTitle from "../micro/heading_title.micro";

const babyDoll = localFont({ src: "../../assets/fonts/Baby Doll.ttf" });
// import food from "@/assets/rules/food.jpg";
// import masjid from "@/assets/rules/masjid.jpg";
// import pakaian from "@/assets/rules/pakaian.jpg";
// import pray from "@/assets/rules/pray.jpg";
// import Image from "next/image";
import { Icon } from '@iconify/react';


export default function RulesSection() {
    return (
        <>
            <MobileLayout className="px-4 py-5 mt-10" id="rules">
                <HeadingTitle title="ADAB MENGHADIRI PERNIKAHAN" className={`${babyDoll.className} mx-auto flex items-center justify-center text-center mb-4`} />
                <div data-aos="fade-right" data-aos-duration="1000" className={`${babyDoll.className} rounded-xl flex flex-wrap gap-4`} >
                    <div className="w-full flex flex-col sm:flex-row gap-2 sm:justify-between">
                        <div data-aos="fade-right" data-aos-duration="1000"  className="flex gap-4 items-center w-full sm:w-1/2">
                            {/* <Image
                                src={pakaian}
                                alt="Huruf Arab"
                                width={60}
                                height={60}
                                className="aspect-square object-cover"
                            /> */}
                            <div className="p-3 bg-[#4FBBE7] rounded-full">
                                <Icon icon="hugeicons:suit-01" width={40} height={40} color="#fff" />
                            </div>
                            <p className="hyphens-auto">Memakai pakaian sopan& menutup aurat</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" className="flex gap-4 items-center w-full sm:w-1/2">
                            {/* <Image
                                src={masjid}
                                alt="Huruf Arab"
                                width={60}
                                height={60}
                                className="aspect-square object-cover"
                            /> */}
                            <div className="p-3 bg-[#4FBBE7] rounded-full">
                                <Icon icon="ph:mosque" width={40} height={40} color="#fff" />
                            </div>
                            <p className="hyphens-auto">Memperhatikan waktu sholat</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row gap-2 sm:justify-between">
                        <div data-aos="fade-right" data-aos-duration="1000" className="flex gap-4 items-center w-full sm:w-1/2">
                            {/* <Image
                                src={food}
                                alt="Huruf Arab"
                                width={60}
                                height={60}
                                className="aspect-square object-cover"
                            /> */}
                            <div className="p-3 bg-[#4FBBE7] rounded-full">
                                <Icon icon="game-icons:fork-knife-spoon" width={40} height={40} color="#fff" />
                            </div>
                            <p className="hyphens-auto">Memperhatikan adab makan & minum</p>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="1000" className="flex gap-4 items-center w-full sm:w-1/2">
                            {/* <Image
                                src={pray}
                                alt="Huruf Arab"
                                width={60}
                                height={60}
                                className="aspect-square object-cover"
                            /> */}
                            <div className="p-3 bg-[#4FBBE7] rounded-full">
                                <Icon icon="ph:hands-praying-fill" width={40} height={40} color="#fff" />
                            </div>
                            <p className="hyphens-auto">Mendoakan pengantin</p>
                        </div>
                    </div>
                </div>
            </MobileLayout>
        </>
    )
}