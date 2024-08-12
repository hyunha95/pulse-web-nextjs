import Posts from "./posts/components/Posts";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="grid lg:grid-cols-[1fr_250px] xl:grid-cols-[1fr_300px] 2xl:grid-cols-[1fr_400px] h-full">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Posts</h1>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Posts />
        </Suspense>
      </main>
      <div className="hidden border-l bg-muted/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2"></div>
      </div>
    </div>
  );
}
