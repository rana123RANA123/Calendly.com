import { useSearchParams } from "next/navigation";
import React from "react";

export default function Params() {
  const searchParams = useSearchParams();

  if (!searchParams) {
    return null;
  }

  console.log(searchParams.get("title"));

  return <div>Params</div>;
}
