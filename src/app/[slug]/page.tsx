import { Suspense, lazy } from "react";

const IndexComponent = lazy(() => import("@/components/index.component"));

type SlugType = {
    params: Promise<{ slug: string }>
}

export default async function Slug({ params }: SlugType) {
  const slug =  (await params).slug
    
  return (
    <Suspense>
      <IndexComponent slug={slug} />
    </Suspense>
  );
}
