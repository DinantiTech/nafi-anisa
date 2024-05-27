import { ReactNode } from "react";

export default function MobileLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative w-max-[500px] md:w-[500px] mx-auto min-h-screen overflow-hidden">
            {children}
        </div>
    );
}