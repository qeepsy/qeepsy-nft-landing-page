
import React from "react";
import { AttendeeLayout } from "@/components/AttendeeLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Image, Activity, Wallet } from "lucide-react";

export default function AttendeeDashboard() {
  return (
    <AttendeeLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-rose-100 to-orange-100 dark:from-rose-900/20 dark:to-orange-900/20 rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">
            You have 2 upcoming events and 12 NFTs in your collection.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Next event in 3 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">NFT Collection</CardTitle>
              <Image className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Events Attended</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">This year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wallet Connected</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-bold text-green-600 dark:text-green-400">Active</div>
              <p className="text-xs text-muted-foreground">0x1234...5678</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Events you're registered for</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Web3 Developer Meetup</h4>
                  <p className="text-sm text-muted-foreground">December 15, 2024</p>
                  <Badge variant="secondary" className="mt-2">Tech Meetup</Badge>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Blockchain Conference 2024</h4>
                  <p className="text-sm text-muted-foreground">December 20, 2024</p>
                  <Badge variant="secondary" className="mt-2">Conference</Badge>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Latest NFTs</CardTitle>
              <CardDescription>Recently added to your collection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-orange-300 rounded-lg"></div>
                  <div>
                    <h4 className="font-medium">Dev Meetup #45</h4>
                    <p className="text-sm text-muted-foreground">Attendance NFT</p>
                  </div>
                </div>
                <Badge>Soulbound</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-300 rounded-lg"></div>
                  <div>
                    <h4 className="font-medium">Hackathon Winner</h4>
                    <p className="text-sm text-muted-foreground">Achievement NFT</p>
                  </div>
                </div>
                <Badge variant="secondary">Achievement</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AttendeeLayout>
  );
}
