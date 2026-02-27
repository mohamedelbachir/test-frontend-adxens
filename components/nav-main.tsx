"use client";

import {
  ChevronDownIcon,
  ChevronRight,
  InfoIcon,
  type LucideIcon,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "./ui/input-group";
import clsx from "clsx";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: ReactNode;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      isActive?: boolean;
    }[];
  }[];
}) {
  const { state } = useSidebar();

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      {/*add search bar*/}
      <InputGroup
        className={clsx("!rounded-sm", {
          hidden: state === "collapsed",
        })}
      >
        <InputGroupInput id="input-group-url" placeholder="search" />
        <InputGroupAddon
          align="inline-end"
          className="p-2 size-3 border border-border mr-2"
        >
          /
        </InputGroupAddon>
      </InputGroup>
      <SidebarMenu className="mt-3">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            defaultOpen={item.isActive}
            className="group/collapsible"
            render={<SidebarMenuItem />}
          >
            <SidebarMenuButton
              tooltip={item.title}
              render={<CollapsibleTrigger />}
              className={clsx({
                " text-primary": item.isActive,
              })}
            >
              {item.icon}
              <span>{item.title}</span>
            </SidebarMenuButton>
            <SidebarMenuAction>
              {item.items && item.items?.length > 0 && (
                <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
              )}
            </SidebarMenuAction>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton
                      className={clsx({
                        "bg-primary/10 text-primary": subItem.isActive,
                      })}
                      render={<a href={subItem.url} />}
                    >
                      {subItem.title}
                    </SidebarMenuSubButton>
                    {subItem.isActive && (
                      <SidebarMenuAction className="text-primary">
                        <ChevronRight />
                      </SidebarMenuAction>
                    )}
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
