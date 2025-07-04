
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Ticket, Shield, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Ticket,
      title: "Soulbound NFTs",
      description: "Create non-transferable NFTs that represent authentic event attendance and achievements."
    },
    {
      icon: Users,
      title: "Seamless Check-in",
      description: "QR code-based check-in system that automatically mints NFTs upon verification."
    },
    {
      icon: Shield,
      title: "Decentralized Storage",
      description: "Your event data and NFT metadata stored securely on Walrus decentralized storage."
    },
    {
      icon: Zap,
      title: "Dynamic NFTs",
      description: "NFTs that update based on event participation, roles, and achievements."
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-founder",
      bio: "Former blockchain engineer at Ethereum Foundation with 8 years of Web3 experience."
    },
    {
      name: "Sarah Johnson",
      role: "CTO & Co-founder",
      bio: "Full-stack developer and NFT expert, previously at OpenSea and Polygon."
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Product",
      bio: "Product manager with expertise in event tech and user experience design."
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
            <span className="gradient-text">Revolutionizing</span> Event Attendance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Qeepsy Events transforms how organizations create, manage, and verify event attendance 
            through blockchain-powered soulbound NFTs and decentralized technology.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="border-border/50 p-8">
            <CardContent className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                We believe that event attendance should be more than just a memory. Our platform 
                creates permanent, verifiable records of participation that attendees can own forever, 
                while giving organizers powerful tools to build engaged communities and create 
                meaningful experiences that extend beyond the event itself.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Qeepsy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-orange-300 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-orange-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-border/50 p-8 gradient-bg">
            <CardContent>
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
              <p className="text-white/90 mb-6 text-lg">
                Join thousands of event organizers who trust Qeepsy to create meaningful, 
                verifiable experiences for their communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/create-event">Start Creating</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/how-it-works">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default About;
