
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, Ticket, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Create Your Event",
      description: "Set up your event details, upload artwork, and configure your NFT settings in minutes.",
      icon: Calendar,
      features: ["Event information & branding", "Custom NFT artwork upload", "Attendance requirements", "Distribution settings"]
    },
    {
      step: "02", 
      title: "Invite Attendees",
      description: "Share your event link and let attendees register without needing wallets or crypto knowledge.",
      icon: Users,
      features: ["Wallet-less registration", "Email invitations", "QR code generation", "Custom registration forms"]
    },
    {
      step: "03",
      title: "Check-in & Mint",
      description: "Attendees check-in with QR codes and automatically receive their soulbound NFT proof of attendance.",
      icon: CheckCircle,
      features: ["QR code scanning", "Automatic NFT minting", "Real-time verification", "Attendance tracking"]
    },
    {
      step: "04",
      title: "Own Forever",
      description: "Attendees receive permanent, non-transferable NFTs stored on decentralized infrastructure.",
      icon: Ticket,
      features: ["Soulbound NFT certificates", "Walrus decentralized storage", "Permanent ownership", "Verification tools"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-400 to-orange-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <span className="font-semibold text-xl gradient-text">Qeepsy Events</span>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How <span className="gradient-text">Qeepsy</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From event creation to NFT minting, discover how Qeepsy makes it simple to create 
            verifiable, blockchain-powered event experiences in four easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 mb-16">
          {steps.map((step, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Card className="border-border/50 p-8 h-full">
                  <CardContent>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-orange-300 rounded-2xl flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary">Step {step.step}</span>
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="aspect-square bg-gradient-to-br from-rose-100 to-orange-100 dark:from-rose-900/20 dark:to-orange-900/20 rounded-2xl flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-rose-400 to-orange-300 rounded-2xl flex items-center justify-center">
                    <step.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="lg:col-span-2 flex justify-center py-8">
                  <ArrowRight className="h-8 w-8 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Overview */}
        <section className="mb-16">
          <Card className="border-border/50 p-8">
            <CardContent>
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Why This Process Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">User-Friendly</h3>
                  <p className="text-muted-foreground">No crypto knowledge required. Simple registration and automatic wallet creation.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Verifiable</h3>
                  <p className="text-muted-foreground">Blockchain-based proof that can't be faked or duplicated.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ticket className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Permanent</h3>
                  <p className="text-muted-foreground">Soulbound NFTs that attendees own forever as proof of participation.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-border/50 p-8 gradient-bg">
            <CardContent>
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Create Your First Event?</h2>
              <p className="text-white/90 mb-6 text-lg">
                Start building meaningful, verifiable event experiences in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/create-event">Create Event</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;
