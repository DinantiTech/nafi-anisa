export default function CustomTextarea({ label = "label", placeholder = "placeholder...." }) {
    return (
        <div className="w-full flex flex-col items-start justify-center gap-y-2">
            <label htmlFor="input">{label} :</label>
            <textarea id="input" className="focus:ring-2 focus:ring-amber-600 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 ring-1 ring-amber-500 shadow-sm px-4" type="text" aria-label="Filter projects" placeholder={placeholder} />
        </div>
    )
}