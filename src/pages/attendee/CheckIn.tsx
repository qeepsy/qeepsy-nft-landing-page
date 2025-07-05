
import React, { useState } from "react";
import { AttendeeLayout } from "@/components/AttendeeLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Trophy, Clock, Zap, CheckCircle, QrCode } from "lucide-react";

const mockAttendees = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    techStack: "Frontend Developer",
    status: "registered",
    checkedIn: false,
    nftMinted: false
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    techStack: "Full Stack Developer",
    status: "registered",
    checkedIn: true,
    nftMinted: false
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol@example.com",
    techStack: "UI/UX Designer",
    status: "registered",
    checkedIn: true,
    nftMinted: true
  }
];

export default function CheckInInterface() {
  const [searchTerm, setSearchTerm] = useState("");
  const [attendees, setAttendees] = useState(mockAttendees);
  const [mintingId, setMintingId] = useState<number | null>(null);

  const handleCheckIn = (id: number) => {
    setAttendees(prev => prev.map(a => 
      a.id === id ? { ...a, checkedIn: true } : a
    ));
  };

  const handleMintNFT = (id: number) => {
    setMintingId(id);
    // Simulate minting process
    setTimeout(() => {
      setAttendees(prev => prev.map(a => 
        a.id === id ? { ...a, nftMinted: true } : a
      ));
      setMintingId(null);
    }, 3000);
  };

  const filteredAttendees = attendees.filter(attendee =>
    attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: attendees.length,
    checkedIn: attendees.filter(a => a.checkedIn).length,
    minted: attendees.filter(a => a.nftMinted).length
  };

  return (
    <AttendeeLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/20">
          <h1 className="text-4xl font-bold text-white mb-2">Event Check-in Dashboard</h1>
          <p className="text-xl text-purple-200">Web3 Developer Conference 2025</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Total Registered</p>
                  <p className="text-3xl font-bold text-white">{stats.total}</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-emerald-300">Checked In</p>
                  <p className="text-3xl font-bold text-white">{stats.checkedIn}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-300">NFTs Minted</p>
                  <p className="text-3xl font-bold text-white">{stats.minted}</p>
                </div>
                <Trophy className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-orange-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-300">Completion Rate</p>
                  <p className="text-3xl font-bold text-white">{Math.round((stats.minted / stats.total) * 100)}%</p>
                </div>
                <Clock className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Actions */}
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Attendee Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search attendees by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/20 text-white"
                />
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500">
                <QrCode className="w-4 h-4 mr-2" />
                Generate QR
              </Button>
            </div>

            {/* Attendee List */}
            <div className="space-y-3">
              {filteredAttendees.map((attendee) => (
                <div key={attendee.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-white">{attendee.name}</h3>
                        <Badge 
                          variant="secondary" 
                          className="bg-blue-500/20 text-blue-200 border-blue-500/30"
                        >
                          {attendee.techStack}
                        </Badge>
                        {attendee.checkedIn && (
                          <Badge className="bg-emerald-500/20 text-emerald-200 border-emerald-500/30">
                            Checked In
                          </Badge>
                        )}
                        {attendee.nftMinted && (
                          <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                            NFT Minted
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-400">{attendee.email}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      {!attendee.checkedIn && (
                        <Button
                          size="sm"
                          onClick={() => handleCheckIn(attendee.id)}
                          className="bg-emerald-500 hover:bg-emerald-600"
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Check In
                        </Button>
                      )}
                      
                      {attendee.checkedIn && !attendee.nftMinted && (
                        <Button
                          size="sm"
                          onClick={() => handleMintNFT(attendee.id)}
                          disabled={mintingId === attendee.id}
                          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        >
                          {mintingId === attendee.id ? (
                            <>
                              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-1"></div>
                              Minting...
                            </>
                          ) : (
                            <>
                              <Zap className="w-4 h-4 mr-1" />
                              Mint NFT
                            </>
                          )}
                        </Button>
                      )}
                      
                      {attendee.nftMinted && (
                        <Button size="sm" variant="outline" className="border-purple-500/30 text-purple-200">
                          View NFT
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AttendeeLayout>
  );
}
