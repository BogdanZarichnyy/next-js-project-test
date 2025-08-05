'use client'

import { useParams } from "next/navigation";

export default function Profile() {
  // клієнтський підхід
  const params = useParams<{ username: string }>();

  return (
    <div className="">
      Profile @{params.username}
    </div>
  );
}