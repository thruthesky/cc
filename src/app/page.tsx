"use client";

import { Suspense } from "react";
import { HomeChild } from "./about/HomeChild";

export default function Home() {
  console.log("Client Component: Home: top-level");

  return (
    <div>
      <h1>Client Component</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeChild />
      </Suspense>
    </div>
  );
}
