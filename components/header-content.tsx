import { EyeSlash, EmptyWallet } from "iconsax-reactjs";
import React from "react";
import { Button } from "./ui/button";
import { Bell, HelpCircle } from "lucide-react";
import Avatar from "./avatar-menu";
import { SidebarTrigger } from "./ui/sidebar";
function HeaderContent() {
  return (
    <header className="flex sticky z-30 bg-white top-0  container mx-auto h-16 items-center justify-between px-4 ">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="hidden sm:block sm:text-2xl font-semibold text-gray-900">
          Organization Balance
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 rounded-full border bg-gray-50 px-3 py-2">
          <EmptyWallet className="size-5 text-blue-600" />
          <span className="text-sm font-medium text-gray-900">$0,00</span>
          <div className="bg-accent flex items-center justify-center p-1 rounded-full">
            <EyeSlash className="h-4 w-4 text-gray-500" />
          </div>
        </div>

        <Button
          variant="ghost"
          size={"sm"}
          className="hidden sm:flex gap-2 border border-border border-dashed text-gray-600"
        >
          <HelpCircle className="h-4 w-4 fill-accent" />
          Help
        </Button>

        <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 pl-2">
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default HeaderContent;
