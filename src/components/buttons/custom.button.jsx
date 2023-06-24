export default function CustomButton({ name = "button", label, rounded}) {
    return (
        <button className={`${rounded ? 'rounded-full' : 'rounded-lg'} group mx-auto px-4 py-1 border-2 bg-amber-700 hover:bg-amber-100 duration-300 w-fit flex items-center justify-center shadow shadow-amber-900 text-white`} name={name}>
            {label}
        </button>
    )
}