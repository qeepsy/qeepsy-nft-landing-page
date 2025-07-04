
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, CheckCircle, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const VerifyEmail = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleResend = () => {
    setResendTimer(60);
    // Here you would call your resend email API
  };

  const simulateVerification = () => {
    setIsVerified(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Link to="/auth/register" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Sign Up
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
                {isVerified ? "Email Verified!" : "Verify Your Email"}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {isVerified 
                  ? "Your account has been successfully verified"
                  : "We've sent a verification link to your email address"
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                  isVerified 
                    ? 'bg-green-100 dark:bg-green-900/20' 
                    : 'bg-blue-100 dark:bg-blue-900/20'
                }`}>
                  {isVerified ? (
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  ) : (
                    <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  )}
                </div>

                {!isVerified ? (
                  <>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Please check your email and click the verification link to activate your account.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Didn't receive the email? Check your spam folder.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Button 
                        onClick={handleResend}
                        disabled={resendTimer > 0}
                        variant="outline"
                        className="w-full"
                      >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        {resendTimer > 0 ? `Resend in ${resendTimer}s` : 'Resend Email'}
                      </Button>

                      {/* Demo button for testing */}
                      <Button 
                        onClick={simulateVerification}
                        variant="ghost"
                        className="w-full text-xs text-muted-foreground"
                      >
                        (Demo: Click to simulate verification)
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Welcome to Qeepsy! Your account is now ready to use.
                    </p>
                    <Link to="/dashboard">
                      <Button className="w-full gradient-bg text-white hover:opacity-90">
                        Go to Dashboard
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {!isVerified && (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Need to change your email?{" "}
                    <Link to="/auth/register" className="text-primary hover:underline font-medium">
                      Go back
                    </Link>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
