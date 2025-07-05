
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, Download, Eye, Trophy, Calendar, MapPin } from "lucide-react";

export default function ClaimSuccess() {
  const nftData = {
    name: "Web3 Developer Conference 2025",
    attendeeName: "John Doe",
    techStack: "Frontend Developer",
    rarity: "Common",
    tokenId: "#1247",
    date: "July 25, 2025",
    location: "San Francisco"
  };

  const handleShare = (platform: string) => {
    console.log(`Sharing to ${platform}`);
  };

  const handleViewInWallet = () => {
    console.log("Opening wallet");
  };

  const handleDownload = () => {
    console.log("Downloading NFT image");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Success Header */}
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mb-6">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">🎉 NFT Successfully Claimed!</h1>
            <p className="text-xl text-purple-200">Your Web3 conference badge is now yours forever</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* NFT Display */}
            <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="relative">
                  {/* NFT Card */}
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-8 text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                      <div className="absolute top-4 right-4 w-6 h-6 border-2 border-white rotate-45"></div>
                      <div className="absolute bottom-4 left-4 w-4 h-4 bg-white rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white rotate-12"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-6xl mb-4">💻</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{nftData.name}</h3>
                      <Badge className="bg-white/20 text-white mb-4">
                        {nftData.techStack}
                      </Badge>
                      <div className="space-y-2 text-white/80">
                        <div className="flex items-center justify-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {nftData.date}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {nftData.location}
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-white/20">
                        <p className="text-sm text-white/60">Soulbound Token</p>
                        <p className="text-lg font-bold text-white">{nftData.tokenId}</p>
                      </div>
                    </div>
                  </div>

                  {/* Rarity Badge */}
                  <div className="absolute -top-3 -right-3">
                    <Badge 
                      className={`${
                        nftData.rarity === 'Rare' 
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                          : 'bg-gradient-to-r from-blue-500 to-purple-500'
                      } text-white px-4 py-2`}
                    >
                      {nftData.rarity}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Details and Actions */}
            <div className="space-y-6">
              {/* Personalization */}
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Your NFT Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Attendee:</span>
                      <span className="text-white font-medium">{nftData.attendeeName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Role:</span>
                      <span className="text-white font-medium">{nftData.techStack}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Rarity:</span>
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-200">
                        {nftData.rarity}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Token ID:</span>
                      <span className="text-white font-mono">{nftData.tokenId}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Actions</h3>
                  <div className="space-y-3">
                    <Button 
                      onClick={handleViewInWallet}
                      className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View in Wallet
                    </Button>
                    
                    <Button 
                      onClick={handleDownload}
                      variant="outline"
                      className="w-full border-white/20 text-white hover:bg-white/10"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download NFT Image
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Sharing */}
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Share Your Achievement</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      onClick={() => handleShare('twitter')}
                      variant="outline"
                      className="border-blue-500/30 text-blue-200 hover:bg-blue-500/10"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                    <Button 
                      onClick={() => handleShare('linkedin')}
                      variant="outline"
                      className="border-blue-600/30 text-blue-300 hover:bg-blue-600/10"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 border-emerald-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">What's Next?</h3>
                  <p className="text-emerald-200 mb-4">
                    Your NFT is now safely stored in your wallet and represents your participation in this amazing event.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-emerald-500/30 text-emerald-200 hover:bg-emerald-500/10"
                  >
                    View My Collection
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
