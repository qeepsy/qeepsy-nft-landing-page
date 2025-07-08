
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/ThemeToggle";
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
  ChevronUp,
  Calendar,
  QrCode,
  Wallet,
  Award,
  Globe,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold gradient-text">Qeepsy</Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">About</Link>
              <Link to="/how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">How It Works</Link>
              <a href="#use-cases" className="text-foreground/80 hover:text-foreground transition-colors">Use Cases</a>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
              <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
              <ThemeToggle />
              <Link to="/login">
                <Button variant="outline" className="mr-2">
                  Sign In
                </Button>
              </Link>
              <Link to="/create-event">
                <Button className="gradient-bg text-white hover:opacity-90">
                  Create Event
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button 
                className="text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-card rounded-lg p-4 border border-border">
              <div className="flex flex-col space-y-4">
                <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">About</Link>
                <Link to="/how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">How It Works</Link>
                <a href="#use-cases" className="text-foreground/80 hover:text-foreground transition-colors">Use Cases</a>
                <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</a>
                <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
                <Separator />
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/create-event">
                  <Button className="w-full gradient-bg text-white hover:opacity-90">
                    Create Event
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/234b91b0-42b8-41bc-b19e-7fa016129ff5.png" 
            alt="Professional event registration" 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text readability and color blending */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-accent/90 to-background/95 backdrop-blur-[1px]"></div>
          {/* Additional overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-float drop-shadow-lg">
              Turn Your Events Into Web3 Experiences
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed drop-shadow-md">
              Create stunning Proof of Attendance NFTs for in-person and virtual events in minutes. 
              Let your attendees mint them instantly — no wallet or coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/create-event">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90 text-lg px-8 py-6 shadow-lg">
                  Start For Free
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="bg-card/80 backdrop-blur-sm text-foreground border-border hover:bg-accent/20 text-lg px-8 py-6 shadow-lg">
                  <Play className="mr-2" size={20} />
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Everything You Need for Event NFTs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border border-border hover:bg-accent/5 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <QrCode className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground mb-3">QR Code Check-in</h3>
                <p className="text-muted-foreground">Instant check-in with QR codes. No apps, no hassle.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border hover:bg-accent/5 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Wallet className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Wallet-Optional</h3>
                <p className="text-muted-foreground">Attendees can mint with just an email address.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border hover:bg-accent/5 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Custom NFT Design</h3>
                <p className="text-muted-foreground">Beautiful, branded NFTs with no coding required.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border hover:bg-accent/5 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Global Events</h3>
                <p className="text-muted-foreground">Perfect for both virtual and in-person events.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border hover:bg-accent/5 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Instant Deployment</h3>
                <p className="text-muted-foreground">Deploy your event NFTs in under 5 minutes.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border border-border hover:bg-accent/5 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Secure & Verified</h3>
                <p className="text-muted-foreground">Built on Sui blockchain for security and speed.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 bg-gradient-to-b from-transparent to-accent/10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Perfect For Every Event Type
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🏢", title: "Corporate Events", desc: "Company meetings, product launches, and training sessions" },
              { icon: "🎓", title: "Educational", desc: "Workshops, webinars, and certification programs" },
              { icon: "🚀", title: "Tech Meetups", desc: "Developer conferences, hackathons, and networking events" },
              { icon: "🎪", title: "Community Events", desc: "Local meetups, festivals, and social gatherings" },
              { icon: "🎮", title: "Gaming & Esports", desc: "Tournaments, gaming conventions, and streaming events" },
              { icon: "🎨", title: "Creative Industries", desc: "Art exhibitions, music events, and creative workshops" },
            ].map((useCase, index) => (
              <Card key={index} className="bg-card border border-border hover:bg-accent/5 transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Simple 3-Step Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Create Your Event</h3>
              <p className="text-muted-foreground text-lg">Set up your event details and design your custom NFT in minutes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Share with Attendees</h3>
              <p className="text-muted-foreground text-lg">Share a simple QR code or link for instant check-in and NFT claiming</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 to-green-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Watch Them Collect</h3>
              <p className="text-muted-foreground text-lg">Attendees mint their NFTs instantly - no wallet or crypto knowledge needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-accent/10 to-transparent">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Loved by Event Organizers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Qeepsy transformed our conference experience. 500+ attendees got their NFTs in minutes!",
                author: "Sarah Chen",
                role: "Tech Conference Organizer",
                rating: 5
              },
              {
                quote: "The easiest way to add Web3 to our events. Our community loves collecting these NFTs.",
                author: "Marcus Rodriguez",
                role: "Community Manager",
                rating: 5
              },
              {
                quote: "Finally, a solution that doesn't require our attendees to understand crypto!",
                author: "Emily Park",
                role: "Corporate Event Planner",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card border border-border p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-foreground font-semibold">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
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
            <Card className="bg-card border border-border relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Starter</CardTitle>
                <CardDescription className="text-muted-foreground">Perfect for small events</CardDescription>
                <div className="text-4xl font-bold text-foreground mt-4">Free</div>
                <div className="text-muted-foreground">Forever</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-muted-foreground">1 event per month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-muted-foreground">100 NFT mints</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-muted-foreground">Basic analytics</span>
                </div>
                <Link to="/login">
                  <Button className="w-full mt-8 bg-accent/10 hover:bg-accent/20 text-foreground">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border relative border-primary/50 shadow-lg">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-bg">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Pro</CardTitle>
                <CardDescription className="text-muted-foreground">For growing events</CardDescription>
                <div className="text-4xl font-bold text-foreground mt-4">$39</div>
                <div className="text-muted-foreground">per month</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-muted-foreground">Unlimited events</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-muted-foreground">Unlimited NFTs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-muted-foreground">Advanced analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-muted-foreground">Priority support</span>
                </div>
                <Link to="/login">
                  <Button className="w-full mt-8 gradient-bg text-white hover:opacity-90">
                    Start Free Trial
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Enterprise</CardTitle>
                <CardDescription className="text-muted-foreground">For large organizations</CardDescription>
                <div className="text-4xl font-bold text-foreground mt-4">Custom</div>
                <div className="text-muted-foreground">Contact us</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-muted-foreground">White-label solution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-muted-foreground">API access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-muted-foreground">Custom integrations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-muted-foreground">Dedicated support</span>
                </div>
                <Button className="w-full mt-8 bg-accent/10 hover:bg-accent/20 text-foreground">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-b from-transparent to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Do attendees need a crypto wallet?",
                answer: "No! Attendees can mint NFTs using just their email address. We handle all the blockchain complexity behind the scenes, making it accessible for everyone."
              },
              {
                question: "What blockchain does Qeepsy use?",
                answer: "We use the Sui blockchain, which is fast, environmentally friendly, and offers gasless transactions for the best user experience."
              },
              {
                question: "Can I use this for virtual events?",
                answer: "Absolutely! Share a simple link in your Zoom, Discord, or any virtual platform. Perfect for webinars, online workshops, and virtual conferences."
              },
              {
                question: "How quickly can I set up an event?",
                answer: "Most users create their first event NFT in under 5 minutes using our intuitive drag-and-drop designer."
              },
              {
                question: "Is there a limit on the number of attendees?",
                answer: "The free plan includes 100 NFT mints per month. Pro plan offers unlimited mints, perfect for large events and conferences."
              },
              {
                question: "What kind of events work best with Qeepsy?",
                answer: "Any event where you want to create lasting memories! Conferences, workshops, meetups, hackathons, training sessions, and community gatherings all work great."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-card border border-border">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/5 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="text-muted-foreground" size={24} />
                    ) : (
                      <ChevronDown className="text-muted-foreground" size={24} />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <Separator className="mb-4 bg-border" />
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-accent/20 to-background">
        <div className="container mx-auto text-center">
          <Card className="bg-card border border-border max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Transform Your Events?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of event organizers who are creating memorable Web3 experiences with Qeepsy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/create-event">
                  <Button size="lg" className="gradient-bg text-white hover:opacity-90 text-lg px-8 py-6">
                    Create Your First Event
                    <Sparkles className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="outline" className="bg-card text-foreground border-border hover:bg-accent text-lg px-8 py-6">
                    Learn More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="text-2xl font-bold gradient-text mb-4">Qeepsy</div>
              <p className="text-muted-foreground mb-4">
                Transform your events into memorable Web3 experiences with beautiful, no-code NFTs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sm">𝕏</span>
                  </div>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sm">D</span>
                  </div>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sm">in</span>
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <div className="space-y-2">
                <Link to="/how-it-works" className="block text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
                <a href="#use-cases" className="block text-muted-foreground hover:text-foreground transition-colors">Use Cases</a>
                <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                <Link to="/create-event" className="block text-muted-foreground hover:text-foreground transition-colors">Create Event</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">About</Link>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Blog</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Careers</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-border" />
          
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Qeepsy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
