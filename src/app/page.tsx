import { PostsList } from "@/components/PostList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";
import { PostFeatured } from "@/components/PostFeatured";

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
