
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Apple, Mail, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="text-3xl font-bold gradient-text">Qeepsy</Link>
            <p className="text-muted-foreground mt-2">Welcome back to your event platform</p>
          </div>

          <Card className="bg-card border border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">Sign In</CardTitle>
              <CardDescription className="text-muted-foreground">
                Access your event dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Social Login Buttons */}
              <div className="space-y-3">
                <Button 
                  className="w-full h-12 bg-card text-foreground border border-border hover:bg-accent transition-all"
                  variant="outline"
                >
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-500 font-bold text-xs">G</span>
                  </div>
                  Continue with Google
                </Button>

                <Button 
                  className="w-full h-12 bg-card text-foreground border border-border hover:bg-accent transition-all"
                  variant="outline"
                >
                  <Apple className="w-5 h-5 mr-3" />
                  Continue with Apple
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
                </div>
              </div>

              {/* Email/Password Form */}
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link 
                    to="/auth/forgot-password" 
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Link to="/dashboard">
                  <Button className="w-full h-12 gradient-bg text-white hover:opacity-90">
                    Sign In
                  </Button>
                </Link>
              </form>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/auth/register" className="text-primary hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-xs text-muted-foreground leading-relaxed">
              By signing in, you agree to our{" "}
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
      </div>
    </div>
  );
};

export default Login;
