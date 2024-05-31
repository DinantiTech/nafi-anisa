"use client";

import IndexComponent from "@/components/index.component";
import { useSearchParams } from "next/navigation";


const ToPage = () => {
    const searchParams = useSearchParams()

  return <IndexComponent to={searchParams?.toString()?.replace(/=/g, '')} />
};

export default ToPage;