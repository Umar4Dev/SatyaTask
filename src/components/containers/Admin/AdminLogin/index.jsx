import { lazy, Suspense } from "react";
import LazyLoading from "../../../../assets/loaders/LazyLoading";

const LazyComponent = lazy(() => import("./AdminLogin"));

export default function Dashboard(props) {
  return (
    <Suspense
      fallback={
        <LazyLoading
          style={{
            margin: "30vh 50vw",
          }}
        />
      }
    >
      <LazyComponent {...props} />
    </Suspense>
  );
}
