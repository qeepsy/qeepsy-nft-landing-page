
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
  Star,
  Trophy,
  Clock,
  Shield,
  Bell,
  UserCircle,
  Code,
  Trash2
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
  { title: "Past Events", url: "/attendee/dashboard/past-events", icon: Clock },
  { title: "NFT Collection", url: "/attendee/dashboard/nft-collection", icon: Image },
  { title: "Activity", url: "/attendee/dashboard/activity", icon: Trophy },
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
  { title: "Personal Info", url: "/attendee/profile/personal-info", icon: UserCircle },
  { title: "Tech Stack", url: "/attendee/profile/tech-stack", icon: Code },
  { title: "Wallet Settings", url: "/attendee/profile/wallet-settings", icon: Wallet },
  { title: "Notifications", url: "/attendee/profile/notification-preferences", icon: Bell },
  { title: "Privacy", url: "/attendee/profile/privacy-settings", icon: Shield },
];

const settingsItems = [
  { title: "Account", url: "/attendee/settings/account", icon: Settings },
  { title: "Notifications", url: "/attendee/settings/notifications", icon: Bell },
  { title: "Privacy", url: "/attendee/settings/privacy", icon: Shield },
  { title: "Delete Account", url: "/attendee/settings/delete-account", icon: Trash2 },
];

export function AttendeeSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  const getNavClassName = (path: string) => {
    const isActive = location.pathname === path;
    return `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
      isActive 
        ? "bg-purple-500/20 text-purple-200 font-medium border border-purple-500/30" 
        : "text-slate-300 hover:bg-white/10 hover:text-white"
    }`;
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-white/10 bg-black/20 backdrop-blur-sm">
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">Q</span>
            </div>
            {!isCollapsed && (
              <span className="font-semibold text-lg text-white">Qeepsy</span>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-purple-300">Dashboard</SidebarGroupLabel>
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
          <SidebarGroupLabel className="text-purple-300">Events</SidebarGroupLabel>
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
          <SidebarGroupLabel className="text-purple-300">NFTs</SidebarGroupLabel>
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
          <SidebarGroupLabel className="text-purple-300">Profile</SidebarGroupLabel>
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
          <SidebarGroupLabel className="text-purple-300">Settings</SidebarGroupLabel>
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
