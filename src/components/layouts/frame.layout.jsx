import PatternBatik from '../../assets/patterns/batik-side.svg';

export default function FrameLayout({ children }) {
    return (
        <div className="relative">
            <div className="absolute w-full">
                <img src={PatternBatik} className="h-[100px] absolute left-0" />
                <img src={PatternBatik} className="h-[100px] absolute right-0 transform rotate-90"/>
            </div>

            {children}
            <img src={PatternBatik} className="absolute h-[100px] left-0 -mt-100 transform rotate-[270deg]"/>
            <img src={PatternBatik} className="absolute h-[100px] right-0 -mt-100 transform rotate-180"/>
        </div>
        // <div className="relative min-h-screen flex flex-col justify-center">
        //     <div className="w-full">
        //         <img src={PatternBatik} className="absolute h-[100px] left-0 top-0" />
        //         <img src={PatternBatik} className="absolute h-[100px] right-0 top-0 transform rotate-90"/>
        //         <img src={PatternBatik} className="absolute h-[100px] left-0 bottom-0 transform rotate-[270deg]"/>
        //         <img src={PatternBatik} className="absolute h-[100px] right-0 bottom-0 transform rotate-180"/>
        //     </div>

        //     {children}
        // </div>
    )
}