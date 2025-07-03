
import React from "react";
import { Button } from "@/components/ui/button";
import { Apple, Calendar, CalendarCheck, Ticket, Tickets, Users } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-rose-900 to-violet-900 relative overflow-hidden flex flex-col">
      {/* Floating Decorative Elements */}
      <div className="absolute top-8 left-6 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-80 animate-float">
        <div className="w-full h-full rounded-full flex items-center justify-center">
          <Calendar className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div className="absolute top-12 right-8 w-14 h-14 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 opacity-70 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full rounded-lg flex items-center justify-center">
          <CalendarCheck className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-60 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full rounded-full flex items-center justify-center">
          <Ticket className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-20 right-6 w-18 h-18 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-70 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-full h-full rounded-2xl flex items-center justify-center">
          <Tickets className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="absolute top-1/3 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 opacity-50 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-full h-full rounded-full flex items-center justify-center">
          <Users className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-8 relative z-10">
        {/* Logo */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-wider">
            QEEPSY
          </h1>
        </div>

        {/* Main Slogan */}
        <div className="text-center mb-16 max-w-sm">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
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
            className="w-full h-14 glass-strong text-white text-lg font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 glow-purple"
            variant="outline"
          >
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-500 font-bold text-sm">G</span>
            </div>
            Continue with Google
          </Button>

          <Button 
            className="w-full h-14 glass-strong text-white text-lg font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 glow-purple"
            variant="outline"
          >
            <Apple className="w-5 h-5 mr-3" />
            Continue with Apple
          </Button>

          <Button 
            className="w-full h-14 glass text-white/90 text-lg font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
            variant="outline"
          >
            More options
          </Button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="px-6 pb-8 text-center">
        <p className="text-white/70 text-sm leading-relaxed">
          By continuing, you agree to our{" "}
          <a href="#" className="text-white underline hover:text-white/80 transition-colors">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-white underline hover:text-white/80 transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
