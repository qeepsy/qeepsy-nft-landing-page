
import React from "react";
import { AttendeeLayout } from "@/components/AttendeeLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, MapPin, Heart } from "lucide-react";

const mockEvents = [
  {
    id: 1,
    name: "AI & Machine Learning Summit",
    description: "Explore the latest in AI technology and applications",
    date: "Dec 20, 2024",
    location: "San Francisco, CA",
    category: "Conference",
    attendees: 500,
    nftReward: "Conference Completion NFT",
    featured: true
  },
  {
    id: 2,
    name: "Web3 Developer Workshop",
    description: "Hands-on coding workshop for blockchain developers",
    date: "Dec 18, 2024",
    location: "Virtual Event",
    category: "Workshop",
    attendees: 150,
    nftReward: "Workshop Completion Badge",
    featured: false
  },
  {
    id: 3,
    name: "Crypto Trading Masterclass",
    description: "Learn advanced trading strategies and market analysis",
    date: "Dec 22, 2024",
    location: "New York, NY",
    category: "Training",
    attendees: 100,
    nftReward: "Trading Mastery Certificate",
    featured: true
  },
  {
    id: 4,
    name: "DeFi Protocol Hackathon",
    description: "Build the next generation of decentralized finance",
    date: "Dec 25, 2024",
    location: "Austin, TX",
    category: "Hackathon",
    attendees: 300,
    nftReward: "Hackathon Participant Badge",
    featured: false
  }
];

export default function EventsBrowse() {
  return (
    <AttendeeLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Browse Events</h1>
          <p className="text-muted-foreground mt-2">
            Discover events and earn exclusive NFTs for attendance
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search events, categories, or locations..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline">Filters</Button>
        </div>

        {/* Featured Events */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Featured Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockEvents.filter(event => event.featured).map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary">{event.category}</Badge>
                    <Button size="sm" variant="ghost">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl">{event.name}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 p-3 rounded-lg">
                    <p className="text-sm font-medium">NFT Reward</p>
                    <p className="text-sm text-muted-foreground">{event.nftReward}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      {event.attendees} attendees registered
                    </p>
                    <Button>Register Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Events */}
        <div>
          <h2 className="text-xl font-semibold mb-4">All Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline">{event.category}</Badge>
                    <Button size="sm" variant="ghost">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardTitle>{event.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-2 rounded text-sm">
                    <span className="font-medium">Reward: </span>
                    {event.nftReward}
                  </div>
                  
                  <div className="flex justify-between items-center pt-2">
                    <p className="text-xs text-muted-foreground">
                      {event.attendees} registered
                    </p>
                    <Button size="sm">Join Event</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AttendeeLayout>
  );
}
