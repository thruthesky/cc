"use client";

import Link from "next/link";
import { useEffect } from "react";

export function HomeChild() {
  const title = "Hello, World!";

  console.log("Client Component: HomeChild: top-level");
  useEffect(() => {
    console.log("Client Component: HomeChild: useEffect");
  }, []);
  return (
    <div>
      <h1>Client Component Test</h1>
      <h2>{title} of ...</h2>
      <Link href="/about">About</Link>
    </div>
  );
}
