"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
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
  Profile2User,
  DiscountShape,
  EmptyWallet,
  Home2,
  CardTick,
  Setting2,
} from "iconsax-reactjs";
import Footer from "./footer-sidebar";

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
      items: [],
    },
    {
      title: "Ad accounts",
      url: "#",
      icon: <CardTick />,
      isActive: false,
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
      url: "/",
      icon: <EmptyWallet className="text-primary size-8" />,
      isActive: true,
      items: [
        {
          title: "Organisation Balance",
          url: "/",
          isActive: true,
        },
        {
          title: "Personnal balance",
          url: "#",
        },
      ],
    },
    {
      title: "Teams",
      url: "#",
      icon: <Profile2User />,
      items: [],
    },
    {
      title: "Affiliate Programs",
      url: "#",
      icon: <DiscountShape />,
      items: [],
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
        <Footer />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
