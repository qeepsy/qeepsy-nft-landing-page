
import React from "react";
import { AttendeeLayout } from "@/components/AttendeeLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Share, Download } from "lucide-react";

const mockNFTs = [
  {
    id: 1,
    name: "Web3 Developer Meetup #45",
    event: "Tech Meetup Series",
    date: "Nov 15, 2024",
    type: "Attendance",
    rarity: "Common",
    image: "gradient-to-br from-rose-400 to-orange-300"
  },
  {
    id: 2,
    name: "Hackathon Winner",
    event: "Blockchain Hackathon 2024",
    date: "Nov 10, 2024",
    type: "Achievement",
    rarity: "Rare",
    image: "gradient-to-br from-blue-400 to-purple-300"
  },
  {
    id: 3,
    name: "Conference Participant",
    event: "Decentralized Future Summit",
    date: "Oct 28, 2024",
    type: "Attendance",
    rarity: "Common",
    image: "gradient-to-br from-green-400 to-teal-300"
  },
  {
    id: 4,
    name: "Speaker Badge",
    event: "Web3 Workshop Series",
    date: "Oct 15, 2024",
    type: "Role",
    rarity: "Epic",
    image: "gradient-to-br from-purple-400 to-pink-300"
  }
];

export default function NFTCollection() {
  return (
    <AttendeeLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div>
            <h1 className="text-3xl font-bold">My NFT Collection</h1>
            <p className="text-muted-foreground mt-2">
              Your soulbound NFTs and achievements from events
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline">
              <Share className="w-4 h-4 mr-2" />
              Share Collection
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search your NFTs..." 
              className="pl-10"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">12</div>
              <p className="text-sm text-muted-foreground">Total NFTs</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">8</div>
              <p className="text-sm text-muted-foreground">Attendance</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-muted-foreground">Achievements</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">1</div>
              <p className="text-sm text-muted-foreground">Rare Items</p>
            </CardContent>
          </Card>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockNFTs.map((nft) => (
            <Card key={nft.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className={`w-full h-48 bg-${nft.image} rounded-t-lg relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <Badge variant={nft.rarity === 'Epic' ? 'default' : 'secondary'}>
                      {nft.rarity}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm opacity-90">{nft.event}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{nft.name}</CardTitle>
                <CardDescription className="mb-3">
                  {nft.type} • {nft.date}
                </CardDescription>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">View Details</Button>
                  <Button size="sm" variant="outline">
                    <Share className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AttendeeLayout>
  );
}
