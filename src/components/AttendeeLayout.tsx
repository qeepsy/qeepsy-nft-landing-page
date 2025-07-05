
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
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AttendeeSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-white/10 text-white" />
                <div>
                  <h1 className="text-xl font-semibold text-white">Qeepsy Events</h1>
                  <p className="text-sm text-purple-200">Claim and manage your Web3 event NFTs</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-6 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
