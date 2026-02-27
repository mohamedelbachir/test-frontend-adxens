import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import HeaderContent from "@/components/header-content";

import DashbordContent from "./components/main";
export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-clip">
        <HeaderContent />
        <DashbordContent />
      </SidebarInset>
    </SidebarProvider>
  );
}
