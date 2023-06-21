import FrameLayout from "../layouts/frame.layout";

export default function Event() {
    return (
        <FrameLayout>
            <div className="mx-auto w-full flex justify-center items-center flex-col px-3">
                <h1 className="uppercase sm:text-2xl text-xl text-center font-semibold pt-14 pb-4 border-b-4">Detail Acara</h1>

                <h2 className="py-5 capitalize text-xl">Akad Nikah</h2>

                <p className="text-center text-sm xs:text-base">
                    Akad nikah akan dilaksanakan secara terbatas dan hanya dihadiri oleh keluarga dan kerabat dekat pada:
                </p>

                <div className="text-center mt-8 font-bold text-sm xs:text-base">
                    <p>Minggu, 23 Agustus 2025</p>
                    <p>Pukul 08:00 - <span className="italic">Sampai Selesai</span></p>
                </div>
            </div>
        </FrameLayout>
    )
}