import '../../styles/loaders/love.style.css';

export default function LoveLoader() {
    return (
        <div className='h-screen w-full fixed bg-rose-600/10 top-0 z-50 flex items-center justify-center'>
            <div className="lds-heart"><div /></div>
        </div>
    )
}