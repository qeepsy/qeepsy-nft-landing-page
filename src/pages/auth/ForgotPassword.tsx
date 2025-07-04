
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Link to="/auth/login" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Sign In
        </Link>
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="text-3xl font-bold gradient-text">Qeepsy</Link>
          </div>

          <Card className="bg-card border border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                {isSubmitted ? "Check Your Email" : "Reset Password"}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {isSubmitted 
                  ? "We've sent a password reset link to your email address"
                  : "Enter your email address and we'll send you a link to reset your password"
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-12 gradient-bg text-white hover:opacity-90"
                  >
                    Send Reset Link
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If an account with <strong>{email}</strong> exists, you'll receive a password reset email shortly.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="w-full"
                  >
                    Try Different Email
                  </Button>
                </div>
              )}

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Remember your password?{" "}
                  <Link to="/auth/login" className="text-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
