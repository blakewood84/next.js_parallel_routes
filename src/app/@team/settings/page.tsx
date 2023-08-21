"use client";
import { useSelectedLayoutSegment } from "next/navigation";
export default function SettingsPage() {
  const segment = useSelectedLayoutSegment();

  console.log("segment: ", segment);
  return <div className="text-4xl">Settings Page</div>;
}
