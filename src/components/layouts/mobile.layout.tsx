import { ReactNode } from "react";

export default function MobileLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative w-max-[500px] md:w-[500px] mx-auto overflow-hidden shadow-xl text-black">
            {children}
        </div>
    );
}