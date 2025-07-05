
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AttendeeSidebar } from "./AttendeeSidebar";
import ThemeToggle from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AttendeeLayoutProps {
  children: React.ReactNode;
}

export function AttendeeLayout({ children }: AttendeeLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AttendeeSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-muted" />
                <div>
                  <h1 className="text-xl font-semibold text-foreground">My Events</h1>
                  <p className="text-sm text-muted-foreground">Manage your NFTs and event attendance</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-br from-rose-400 to-orange-300 text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-6 bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
