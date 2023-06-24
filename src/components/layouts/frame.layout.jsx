import PatternBatik from '../../assets/patterns/batik-side.svg';

export default function FrameLayout({ children }) {
    return (
        <div className="relative">
            <div className="absolute w-full">
                <img src={PatternBatik} className="h-[100px] absolute left-0" />
                <img src={PatternBatik} className="h-[100px] absolute right-0 transform rotate-90"/>
            </div>

            {children}

            {/* <div className=" bottom-0 w-full"> */}
                <img
                src={PatternBatik}
                className="absolute h-[100px] left-0 -mt-100 transform rotate-[270deg]"
                />
                <img
                src={PatternBatik}
                className="absolute h-[100px] right-0 -mt-100 transform rotate-180"
                />
            {/* </div> */}
        </div>
    )
}