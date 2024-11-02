"use client";

import IndexComponent from "@/components/index.component";
import { useSearchParams } from "next/navigation";


const ToPage = () => {
  const queryParams = useSearchParams();
  console.log(queryParams)

  const guestString = queryParams?.toString()?.replace(/=/g, '')?.replace(/[-+_]/g, ' ');
  return <IndexComponent to={guestString} />
};

export default ToPage;