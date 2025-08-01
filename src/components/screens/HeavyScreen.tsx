"use client";
import React, { lazy, Suspense } from "react";
import Skeleton from "../ui/skeletons/Skeleton";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const SomeHeavyComponent = lazy(async () => {
  await delay(50000);
  return import("@/components/ui/SomeHeavyComponent");
});

export default function HeavyScreen() {
  return (
    <section>
      <h2>Скелетон</h2>
      <Suspense fallback={<Skeleton />}>
        <SomeHeavyComponent />
      </Suspense>
    </section>
  );
}
