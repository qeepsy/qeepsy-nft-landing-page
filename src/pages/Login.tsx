
import React from "react";
import { Button } from "@/components/ui/button";
import { Apple, Calendar, CalendarCheck, Ticket, Tickets, Users } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Login = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-8 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-rose-gold-400 to-rose-gold-500 opacity-80 animate-float">
        <div className="w-full h-full rounded-full flex items-center justify-center">
          <Calendar className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div className="absolute top-12 right-16 w-14 h-14 rounded-lg bg-gradient-to-r from-silver-400 to-silver-500 opacity-70 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full rounded-lg flex items-center justify-center">
          <CalendarCheck className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-rose-gold-300 to-silver-400 opacity-60 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full rounded-full flex items-center justify-center">
          <Ticket className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-20 right-6 w-18 h-18 rounded-2xl bg-gradient-to-r from-silver-300 to-rose-gold-400 opacity-70 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-full h-full rounded-2xl flex items-center justify-center">
          <Tickets className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="absolute top-1/3 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-rose-gold-500 to-silver-500 opacity-50 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-full h-full rounded-full flex items-center justify-center">
          <Users className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-8 relative z-10">
        {/* Logo */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black gradient-text tracking-wider">
            QEEPSY
          </h1>
        </div>

        {/* Main Slogan */}
        <div className="text-center mb-16 max-w-sm">
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
            YOUR EVENT.
            <br />
            ON-CHAIN.
            <br />
            EFFORTLESSLY.
          </h2>
        </div>

        {/* Login Buttons */}
        <div className="w-full max-w-sm space-y-4">
          <Button 
            className="w-full h-14 bg-card text-foreground text-lg font-semibold rounded-full border border-border hover:bg-accent transition-all duration-300"
            variant="outline"
          >
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-500 font-bold text-sm">G</span>
            </div>
            Continue with Google
          </Button>

          <Button 
            className="w-full h-14 bg-card text-foreground text-lg font-semibold rounded-full border border-border hover:bg-accent transition-all duration-300"
            variant="outline"
          >
            <Apple className="w-5 h-5 mr-3" />
            Continue with Apple
          </Button>

          <Button 
            className="w-full h-14 bg-muted text-muted-foreground text-lg font-semibold rounded-full border border-border hover:bg-accent transition-all duration-300"
            variant="outline"
          >
            More options
          </Button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="px-6 pb-8 text-center">
        <p className="text-muted-foreground text-sm leading-relaxed">
          By continuing, you agree to our{" "}
          <a href="#" className="text-foreground underline hover:text-muted-foreground transition-colors">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-foreground underline hover:text-muted-foreground transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
