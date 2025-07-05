
import React from "react";
import { AttendeeLayout } from "@/components/AttendeeLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, Zap, Clock, Star } from "lucide-react";

const mockUpcomingEvents = [
  {
    id: 1,
    name: "Web3 Developer Conference",
    date: "July 25, 2025",
    location: "San Francisco",
    type: "Conference",
    attendees: 250,
    nftPreview: "gradient-to-br from-purple-500 to-blue-500"
  },
  {
    id: 2,
    name: "Blockchain Builders Meetup",
    date: "August 5, 2025",
    location: "New York",
    type: "Meetup",
    attendees: 80,
    nftPreview: "gradient-to-br from-emerald-500 to-teal-500"
  }
];

const mockRecentNFTs = [
  {
    id: 1,
    name: "DevCon 2024 Attendee",
    event: "Ethereum DevCon",
    rarity: "Common",
    image: "gradient-to-br from-blue-500 to-purple-500"
  },
  {
    id: 2,
    name: "Hackathon Winner",
    event: "Web3 Hackathon",
    rarity: "Legendary",
    image: "gradient-to-br from-yellow-500 to-orange-500"
  },
  {
    id: 3,
    name: "Speaker Badge",
    event: "Tech Meetup",
    rarity: "Epic",
    image: "gradient-to-br from-pink-500 to-rose-500"
  }
];

export default function AttendeeDashboard() {
  return (
    <AttendeeLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-8 border border-purple-500/20">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome back, John!</h1>
            <p className="text-xl text-purple-200 mb-6">Ready to claim your next Web3 achievement?</p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
              <Zap className="w-4 h-4 mr-2" />
              Explore Events
            </Button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-300">Total NFTs</p>
                  <p className="text-3xl font-bold text-white">24</p>
                </div>
                <Trophy className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-blue-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-300">Events Attended</p>
                  <p className="text-3xl font-bold text-white">12</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-emerald-300">Rare Items</p>
                  <p className="text-3xl font-bold text-white">3</p>
                </div>
                <Star className="w-8 h-8 text-emerald-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-orange-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-300">Upcoming</p>
                  <p className="text-3xl font-bold text-white">2</p>
                </div>
                <Clock className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                Upcoming Events
              </CardTitle>
              <CardDescription className="text-slate-300">
                Events you're registered for
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockUpcomingEvents.map((event) => (
                <div key={event.id} className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-white">{event.name}</h3>
                      <p className="text-sm text-slate-300">{event.date} • {event.location}</p>
                    </div>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                      {event.type}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Users className="w-4 h-4" />
                      {event.attendees} attending
                    </div>
                    <div className={`w-8 h-8 bg-${event.nftPreview} rounded-lg`}></div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full border-purple-500/30 text-purple-200 hover:bg-purple-500/10">
                View All Events
              </Button>
            </CardContent>
          </Card>

          {/* Recent NFTs */}
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-blue-400" />
                Recent NFTs
              </CardTitle>
              <CardDescription className="text-slate-300">
                Your latest achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockRecentNFTs.map((nft) => (
                <div key={nft.id} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className={`w-12 h-12 bg-${nft.image} rounded-lg flex-shrink-0`}></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-white truncate">{nft.name}</h4>
                    <p className="text-sm text-slate-400">{nft.event}</p>
                  </div>
                  <Badge 
                    variant={nft.rarity === 'Legendary' ? 'default' : 'secondary'}
                    className={nft.rarity === 'Legendary' ? 'bg-yellow-500/20 text-yellow-200 border-yellow-500/30' : 'bg-blue-500/20 text-blue-200 border-blue-500/30'}
                  >
                    {nft.rarity}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full border-blue-500/30 text-blue-200 hover:bg-blue-500/10">
                View Collection
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
            <CardDescription className="text-slate-300">
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-auto p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 hover:from-purple-500/30 hover:to-blue-500/30">
                <div className="text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-purple-300" />
                  <div className="font-medium text-white">Browse Events</div>
                  <div className="text-sm text-slate-300">Find new events to join</div>
                </div>
              </Button>
              
              <Button className="h-auto p-6 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 hover:from-emerald-500/30 hover:to-teal-500/30">
                <div className="text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-emerald-300" />
                  <div className="font-medium text-white">View NFTs</div>
                  <div className="text-sm text-slate-300">Explore your collection</div>
                </div>
              </Button>
              
              <Button className="h-auto p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 hover:from-orange-500/30 hover:to-red-500/30">
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-orange-300" />
                  <div className="font-medium text-white">Connect Wallet</div>
                  <div className="text-sm text-slate-300">Manage your Web3 identity</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AttendeeLayout>
  );
}
