
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Sparkles,
  Menu,
  X,
  Play,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">Qeepsy</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#use-cases" className="text-white/80 hover:text-white transition-colors">Use Cases</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 glow-purple">
                Try It Free
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 glass rounded-lg p-4">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
                <a href="#use-cases" className="text-white/80 hover:text-white transition-colors">Use Cases</a>
                <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
                <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Try It Free
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 mesh-gradient">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-float">
              Turn Your Events Into Web3 Experiences — No Code Needed
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Create stunning Proof of Attendance NFTs for in-person and virtual events in minutes. 
              Let your attendees mint them instantly — no wallet or coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 glow-purple text-lg px-8 py-6">
                Start For Free
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="glass text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6">
                <Play className="mr-2" size={20} />
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Your Events Deserve to Be Remembered
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass text-center p-8">
              <CardContent className="pt-6">
                <div className="text-red-400 text-4xl mb-4">❌</div>
                <h3 className="text-xl font-semibold text-white mb-2">Boring Event Certificates</h3>
                <p className="text-white/70">PDF certificates that get lost in email folders</p>
              </CardContent>
            </Card>
            <Card className="glass text-center p-8">
              <CardContent className="pt-6">
                <div className="text-red-400 text-4xl mb-4">❌</div>
                <h3 className="text-xl font-semibold text-white mb-2">Forgotten RSVPs</h3>
                <p className="text-white/70">No lasting proof of participation or engagement</p>
              </CardContent>
            </Card>
            <Card className="glass text-center p-8">
              <CardContent className="pt-6">
                <div className="text-red-400 text-4xl mb-4">❌</div>
                <h3 className="text-xl font-semibold text-white mb-2">No Real Proof</h3>
                <p className="text-white/70">Events that fade from memory without a trace</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Card className="glass-strong p-8 max-w-2xl mx-auto glow-purple">
              <CardContent className="pt-6">
                <div className="text-green-400 text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-4">With Qeepsy, every event becomes collectible</h3>
                <p className="text-white/80 text-lg">No code. No friction. Just memorable experiences.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            What Makes Qeepsy Different?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">No-code NFT designer</h3>
                  <p className="text-white/70">Beautiful, branded NFTs in minutes without technical skills</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Instant minting with QR or link</h3>
                  <p className="text-white/70">Share a QR code or link - attendees mint instantly</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Works for physical & virtual events</h3>
                  <p className="text-white/70">Perfect for conferences, webinars, and online gatherings</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Wallet-optional minting</h3>
                  <p className="text-white/70">Attendees can mint with just an email - no crypto experience needed</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Powered by Sui blockchain</h3>
                  <p className="text-white/70">Eco-friendly, fast, and gasless transactions</p>
                </div>
              </div>
            </div>
            <div className="glass-strong rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Design Your NFT</h3>
              <p className="text-white/70 mb-6">Drag, drop, customize. Your brand, your style.</p>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Try Designer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🧑‍💼", title: "Event Organizers", desc: "Conferences, meetups, and networking events" },
              { icon: "🌐", title: "Webinar Hosts", desc: "Online workshops and educational sessions" },
              { icon: "🧑‍🏫", title: "Bootcamp Instructors", desc: "Coding bootcamps and training programs" },
              { icon: "🧑‍💻", title: "Web3 Communities", desc: "DAO events and community gatherings" },
              { icon: "🎮", title: "Gaming Events", desc: "Tournaments and gaming competitions" },
              { icon: "📢", title: "Influencer Meetups", desc: "Creator events and fan gatherings" },
            ].map((useCase, index) => (
              <Card key={index} className="glass hover:glass-strong transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-white/70">{useCase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Loved by Organizers and Attendees
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Qeepsy let us offer our 300+ attendees NFTs in under 5 minutes. No devs needed!",
                author: "Ada Chen",
                role: "Tech Event Host",
                rating: 5
              },
              {
                quote: "I used Qeepsy to mint my first POAP badge at a webinar. I'm hooked!",
                author: "David Rodriguez",
                role: "Student",
                rating: 5
              },
              {
                quote: "Finally, a way to reward virtual participants too!",
                author: "Cynthia Park",
                role: "Online Educator",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="glass p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Starter</CardTitle>
                <CardDescription className="text-white/70">Perfect for trying out</CardDescription>
                <div className="text-4xl font-bold text-white mt-4">Free</div>
                <div className="text-white/60">Forever</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white/80">1 event per month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white/80">100 mints</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white/80">NFT Designer</span>
                </div>
                <Button className="w-full mt-8 bg-white/10 hover:bg-white/20 text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-strong relative glow-purple border-purple-500/50">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Pro</CardTitle>
                <CardDescription className="text-white/70">For growing events</CardDescription>
                <div className="text-4xl font-bold text-white mt-4">$39</div>
                <div className="text-white/60">per month</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white/80">Unlimited events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white/80">Unlimited NFTs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white/80">Advanced analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white/80">Priority support</span>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="glass relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
                <CardDescription className="text-white/70">For large organizations</CardDescription>
                <div className="text-4xl font-bold text-white mt-4">Custom</div>
                <div className="text-white/60">Contact us</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white/80">Large conferences</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white/80">API access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white/80">White-label options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-white/80">Dedicated support</span>
                </div>
                <Button className="w-full mt-8 bg-white/10 hover:bg-white/20 text-white">
                  Talk to Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Do attendees need a crypto wallet?",
                answer: "No, they can mint using email or guest access. We make it as simple as possible for everyone to participate, regardless of their Web3 experience."
              },
              {
                question: "What blockchain is this on?",
                answer: "Sui — fast, carbon-neutral, and gasless. This means transactions are quick, environmentally friendly, and free for your attendees."
              },
              {
                question: "Can I use this for virtual events?",
                answer: "Yes! Just share the link or QR in Zoom, Discord, Spaces, or any virtual platform. Works perfectly for webinars, online workshops, and virtual conferences."
              },
              {
                question: "How long does it take to set up?",
                answer: "Most users create their first NFT in under 5 minutes. Our drag-and-drop designer makes it incredibly easy to customize your event NFTs."
              },
              {
                question: "Is there a limit on attendees?",
                answer: "Free plan includes 100 mints per month. Pro plan has unlimited NFTs, perfect for large events and conferences."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-justify-between"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="text-white/70" size={24} />
                    ) : (
                      <ChevronDown className="text-white/70" size={24} />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <Separator className="mb-4 bg-white/20" />
                      <p className="text-white/80">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 mesh-gradient">
        <div className="container mx-auto text-center">
          <Card className="glass-strong max-w-4xl mx-auto glow-purple">
            <CardContent className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Give Your Events a Web3 Upgrade?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Start creating NFTs for your next event — no wallet, no code, no hassle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 glow-purple text-lg px-8 py-6">
                  Try It Free Now
                  <Sparkles className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="glass text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6">
                  Need help? Talk to us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-bold gradient-text mb-2">Qeepsy</div>
              <p className="text-white/60 max-w-sm">
                Transform your events into memorable Web3 experiences with beautiful, no-code NFTs.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex space-x-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors">About</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Support</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-sm">𝕏</span>
                  </div>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-sm">D</span>
                  </div>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-sm">in</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
            <p>&copy; 2024 Qeepsy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
