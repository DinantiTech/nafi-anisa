"use client";

// import IndexComponent from "@/components/index.component";
import { lazy, Suspense } from "react";

const IndexComponent = lazy(() => import("@/components/index.component"))

const ToPage = () => {
  return (
    <Suspense fallback={ <div>Rendering.....</div> }>
      <IndexComponent />
    </Suspense>
  )
};

export default ToPage;