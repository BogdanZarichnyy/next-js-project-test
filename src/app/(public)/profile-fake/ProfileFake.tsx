'use client'

import { PAGES } from "@/config/pages.config";
import { useRouter } from "next/navigation";

export default function ProfileFake() {
  const router = useRouter();

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">ProfileFakePage</h1>
      <button  onClick={() => router.push(PAGES.HOME)}>Go to home</button>
    </div>
  );
}