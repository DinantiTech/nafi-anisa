import { lazy, Suspense } from "react"

const IndexComponent = lazy(() => import("@/components/index.component"))

export default function Home() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <IndexComponent />
    </Suspense>
  )
}
