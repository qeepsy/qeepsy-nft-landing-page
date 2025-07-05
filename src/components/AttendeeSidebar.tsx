
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Calendar,
  User,
  Settings,
  Search,
  Activity,
  Wallet,
  Image,
  Heart,
  Star
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const dashboardItems = [
  { title: "Dashboard", url: "/attendee/dashboard", icon: Activity },
  { title: "Upcoming Events", url: "/attendee/dashboard/upcoming-events", icon: Calendar },
  { title: "Past Events", url: "/attendee/dashboard/past-events", icon: Calendar },
  { title: "NFT Collection", url: "/attendee/dashboard/nft-collection", icon: Image },
  { title: "Activity", url: "/attendee/dashboard/activity", icon: Activity },
];

const eventsItems = [
  { title: "Browse Events", url: "/attendee/events/browse", icon: Search },
  { title: "Search Events", url: "/attendee/events/search", icon: Search },
  { title: "Favorites", url: "/attendee/events/favorites", icon: Heart },
  { title: "Recommendations", url: "/attendee/events/recommendations", icon: Star },
];

const nftItems = [
  { title: "My Collection", url: "/attendee/nfts/collection", icon: Image },
];

const profileItems = [
  { title: "Profile", url: "/attendee/profile", icon: User },
  { title: "Wallet Settings", url: "/attendee/profile/wallet-settings", icon: Wallet },
];

const settingsItems = [
  { title: "Settings", url: "/attendee/settings", icon: Settings },
];

export function AttendeeSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  const getNavClassName = (path: string) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:text-primary ${
      isActive 
        ? "bg-muted text-primary font-medium" 
        : "text-muted-foreground hover:bg-muted/50"
    }`;
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-orange-300 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">Q</span>
            </div>
            {!isCollapsed && (
              <span className="font-semibold text-lg gradient-text">Qeepsy</span>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboardItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Events</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {eventsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>NFTs</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nftItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {profileItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Other</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClassName(item.url)}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
