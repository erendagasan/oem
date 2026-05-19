"use client";

import DashboardView from "@/components/views/dashboard";
import { useRouter } from "next/navigation";

export default function DashboardIndexPage() {
  const router = useRouter();

  return (
    <DashboardView
      onNavigate={(tab) => {
        if (tab === "dashboard") {
          router.push("/dashboard");
        } else {
          router.push(`/dashboard/${tab}`);
        }
      }}
    />
  );
}