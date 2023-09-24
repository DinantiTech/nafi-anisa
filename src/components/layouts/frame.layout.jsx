import PatternBatik from '../../assets/patterns/pattern_side12.svg';

export default function FrameLayout({ children }) {
    return (
        <div className="relative">
            <div className="absolute w-full top-0">
                <img src={PatternBatik} className="h-[100px] absolute left-0 transform rotate-[270deg]" />
                <img src={PatternBatik} className="h-[100px] absolute right-0" />
            </div>

            <div className='py-20'>
                {children}
            </div>

            <img src={PatternBatik} className="absolute bottom-0 h-[100px] left-0 -mt-100 transform rotate-180" />
            <img src={PatternBatik} className="absolute bottom-0 h-[100px] right-0 -mt-100 transform rotate-90" />
        </div>
    )
}