
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Camera, CheckCircle, Smartphone, Zap, ArrowRight } from "lucide-react";

export default function MobileScanner() {
  const [scanStep, setScanStep] = useState<'scan' | 'detected' | 'form' | 'minting' | 'success'>('scan');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    techStack: 'frontend'
  });

  const handleScan = () => {
    // Simulate QR scan
    setTimeout(() => {
      setScanStep('detected');
    }, 2000);
  };

  const handleConfirm = () => {
    setScanStep('form');
  };

  const handleSubmit = () => {
    setScanStep('minting');
    // Simulate minting
    setTimeout(() => {
      setScanStep('success');
    }, 3000);
  };

  if (scanStep === 'scan') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto space-y-6">
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Scan QR Code</h1>
              <p className="text-slate-300">Point your camera at the QR code to claim your NFT</p>
            </div>

            {/* Camera Viewfinder */}
            <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="relative aspect-square bg-black/60 rounded-lg border-2 border-purple-500/50 overflow-hidden">
                  {/* Camera placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-slate-400">
                      <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Camera access required</p>
                    </div>
                  </div>
                  
                  {/* Scanning overlay */}
                  <div className="absolute inset-0">
                    {/* Corner brackets */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-400"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-400"></div>
                    
                    {/* Scanning line */}
                    <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-slate-400 mb-4">Position the QR code within the frame</p>
                  <Button 
                    onClick={handleScan}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  >
                    Start Scanning
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">How to Scan</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Hold your device steady
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Ensure good lighting
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Keep QR code in frame
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (scanStep === 'detected') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto space-y-6">
            {/* Success Animation */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Event Detected!</h1>
              <p className="text-slate-300">We found your event. Let's get you registered.</p>
            </div>

            {/* Event Info */}
            <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Web3 Developer Conference 2025</h3>
                    <p className="text-slate-300 mt-2">San Francisco • July 25, 2025</p>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-200">
                    Conference NFT Available
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Action Button */}
            <Button 
              onClick={handleConfirm}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              Continue Registration
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (scanStep === 'form') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto space-y-6">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-bold text-white">Quick Registration</h1>
              <p className="text-slate-300">Just a few details to claim your NFT</p>
            </div>

            {/* Form */}
            <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/5 border-white/20 text-white"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/5 border-white/20 text-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Your Role</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {['frontend', 'backend', 'designer'].map((role) => (
                      <button
                        key={role}
                        onClick={() => setFormData({...formData, techStack: role})}
                        className={`p-3 rounded-lg border transition-all text-left ${
                          formData.techStack === role
                            ? 'border-purple-500 bg-purple-500/20 text-white'
                            : 'border-white/20 bg-white/5 text-slate-300 hover:border-white/40'
                        }`}
                      >
                        {role === 'frontend' && 'Frontend Developer'}
                        {role === 'backend' && 'Backend Developer'}
                        {role === 'designer' && 'UI/UX Designer'}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <Button 
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600"
            >
              Claim My NFT
              <Zap className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (scanStep === 'minting') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto space-y-6">
            {/* Minting Animation */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-2 border-white border-t-transparent rounded-full"></div>
              </div>
              <h1 className="text-2xl font-bold text-white">Creating Your NFT</h1>
              <p className="text-slate-300">Please wait while we mint your conference badge...</p>
            </div>

            {/* Progress */}
            <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-white">Registration confirmed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="animate-spin w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full"></div>
                    <span className="text-white">Minting NFT...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-gray-600 rounded-full"></div>
                    <span className="text-gray-400">Finalizing</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/5 rounded-lg">
                  <p className="text-sm text-slate-400">
                    We're creating a session wallet for you to store your NFT securely.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Success state
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto space-y-6">
          {/* Success */}
          <div className="text-center space-y-4">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-2xl font-bold text-white">NFT Claimed Successfully!</h1>
            <p className="text-slate-300">Your conference badge is now in your wallet</p>
          </div>

          {/* NFT Preview */}
          <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">💻</div>
                <h3 className="text-lg font-bold text-white">Conference NFT</h3>
                <p className="text-purple-100 text-sm mt-1">{formData.name}</p>
                <Badge className="bg-white/20 text-white mt-3">
                  {formData.techStack === 'frontend' && 'Frontend Developer'}
                  {formData.techStack === 'backend' && 'Backend Developer'}
                  {formData.techStack === 'designer' && 'UI/UX Designer'}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              View My NFT
            </Button>
            <Button 
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10"
            >
              Share Achievement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
