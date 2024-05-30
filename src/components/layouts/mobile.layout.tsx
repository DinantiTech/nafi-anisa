import React from "react";
import { Utils } from "@/utils/index.util";
import { HTMLAttributes, ReactNode } from "react";

interface MobileLayoutProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export default function MobileLayout({ children, className, ...rest }: MobileLayoutProps) {
    return (
        <div className={Utils.cn("relative w-max-[500px] md:w-[500px] mx-auto overflow-hidden text-black", className)} {...rest}>
            {children}
        </div>
    );
}
