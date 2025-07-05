
import React, { useState } from "react";
import { AttendeeLayout } from "@/components/AttendeeLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Clock, Wallet, Code, Palette, Briefcase, Cpu } from "lucide-react";

const techStackOptions = [
  { id: 'frontend', label: 'Frontend Developer', icon: Code, rarity: 'Common' },
  { id: 'backend', label: 'Backend Developer', icon: Cpu, rarity: 'Common' },
  { id: 'fullstack', label: 'Full Stack Developer', icon: Code, rarity: 'Common' },
  { id: 'designer', label: 'UI/UX Designer', icon: Palette, rarity: 'Rare' },
  { id: 'product', label: 'Product Manager', icon: Briefcase, rarity: 'Rare' },
];

const walletOptions = [
  { id: 'metamask', name: 'MetaMask', description: 'Connect with MetaMask wallet' },
  { id: 'suiet', name: 'Suiet', description: 'Connect with Suiet wallet' },
  { id: 'skip', name: 'Skip for now', description: 'Create a session wallet instead' },
];

export default function EventRegister() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    techStack: '',
    wallet: ''
  });

  const progress = (currentStep / 4) * 100;

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('Registration submitted:', formData);
    // Handle form submission
  };

  return (
    <AttendeeLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Event Hero */}
        <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/20 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-4">Web3 Developer Conference 2025</h1>
                <div className="space-y-3 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    July 25, 2025 • 9:00 AM - 6:00 PM
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    San Francisco Convention Center
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    250/300 Registered
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-400" />
                    Registration closes in 5 days
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Code className="w-16 h-16 mx-auto mb-2" />
                    <p className="font-bold">Conference NFT</p>
                    <p className="text-sm opacity-75">Soulbound Token</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registration Form */}
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white">Event Registration</CardTitle>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-200">
                Step {currentStep} of 4
              </Badge>
            </div>
            <Progress value={progress} className="w-full mt-4" />
          </CardHeader>
          <CardContent className="p-8">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Basic Information</h2>
                  <p className="text-slate-300">Tell us a bit about yourself</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/5 border-white/20 text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/5 border-white/20 text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Tech Stack */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Select Your Role</h2>
                  <p className="text-slate-300">This will determine your NFT rarity and networking matches</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {techStackOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFormData({...formData, techStack: option.id})}
                      className={`p-6 rounded-lg border-2 transition-all text-left ${
                        formData.techStack === option.id
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <option.icon className="w-6 h-6 text-purple-400" />
                        <span className="font-semibold text-white">{option.label}</span>
                      </div>
                      <Badge 
                        variant={option.rarity === 'Rare' ? 'default' : 'secondary'}
                        className={option.rarity === 'Rare' ? 'bg-yellow-500/20 text-yellow-200' : 'bg-blue-500/20 text-blue-200'}
                      >
                        {option.rarity} NFT
                      </Badge>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Wallet Connection */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Connect Your Wallet</h2>
                  <p className="text-slate-300">Choose how you'd like to receive your NFT</p>
                </div>
                
                <div className="space-y-4">
                  {walletOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setFormData({...formData, wallet: option.id})}
                      className={`w-full p-6 rounded-lg border-2 transition-all text-left ${
                        formData.wallet === option.id
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Wallet className="w-6 h-6 text-purple-400" />
                        <div>
                          <div className="font-semibold text-white">{option.name}</div>
                          <div className="text-sm text-slate-400">{option.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">Confirm Registration</h2>
                  <p className="text-slate-300">Review your information before submitting</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Name:</span>
                    <span className="text-white font-medium">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Email:</span>
                    <span className="text-white font-medium">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Role:</span>
                    <span className="text-white font-medium">
                      {techStackOptions.find(o => o.id === formData.techStack)?.label}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Wallet:</span>
                    <span className="text-white font-medium">
                      {walletOptions.find(o => o.id === formData.wallet)?.name}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentStep === 1}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600"
                >
                  Complete Registration
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </AttendeeLayout>
  );
}
