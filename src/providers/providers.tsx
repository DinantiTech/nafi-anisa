"use client";

import React from "react";
import MusicProvider from "./music.provider";
import CoverProvider from "./cover.provider";

export default function Providers({ children }: { children: any }) {
    return (
        <CoverProvider>
            <MusicProvider>
                {children}
            </MusicProvider>
        </CoverProvider>
    )
}