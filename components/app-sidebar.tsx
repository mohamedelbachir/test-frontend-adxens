"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import {
  TerminalSquareIcon,
  BotIcon,
  BookOpen,
  Settings2Icon,
} from "lucide-react";
import { Home2 } from "iconsax-reactjs";
// This is sample data.
const data = {
  user: {
    name: "Sort UI",
    email: "",
    avatar: "/logo.png",
  },
  teams: [
    {
      name: "Sort UI",
      plan: "",
      logo: <Image src="/logo.png" alt="Acme Inc" width={24} height={24} />,
    },
    {
      name: "Acme Corp.",
      plan: "Startup",
      logo: <></>,
    },
    {
      name: "Evil Corp.",
      plan: "Free",
      logo: <></>,
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: <Home2 size="32" />,
      isActive: true,
      items: [],
    },
    {
      title: "Ad accounts",
      url: "#",
      icon: <BotIcon />,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Wallets",
      url: "#",
      icon: <BookOpen />,
      items: [
        {
          title: "Organisation Balance",
          url: "#",
        },
        {
          title: "Personnal balance",
          url: "#",
        },
      ],
    },
    {
      title: "Affiliate Programs",
      url: "#",
      icon: <Settings2Icon />,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <Button variant="outline" size="sm" className="w-full left">
          Settings
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
