import { Icon } from "@iconify/react";

export default function CustomButton({ name, label, rounded, icon}) {
    return (
        <button className={`${rounded ? 'rounded-full' : 'rounded-lg'} group px-4 py-1 border-2 bg-amber-700 hover:bg-amber-100 hover:text-amber-800 hover:font-semibold duration-300 flex items-center justify-center shadow shadow-amber-900 text-white`} name={name}>
            {icon ? (
                    <div className="flex items-center justify-center gap-x-2">
                        <Icon className="group-hover:text-rose-700" icon={icon} />
                        <span className="group-hover:text-amber-800">{name ?? "Ini Button"}</span>
                    </div>
                ) : (
                    <span className="group-hover:text-amber-800">{name ?? "Ini Button"}</span>
                )}
        </button>
    )
}