
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Wallet, ExternalLink, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const ConnectWallet = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);

  const wallets = [
    {
      name: "Sui Wallet",
      description: "Official Sui wallet browser extension",
      icon: "🔷",
      isInstalled: true,
      recommended: true
    },
    {
      name: "Martian Wallet",
      description: "Multi-chain wallet supporting Sui",
      icon: "🚀",
      isInstalled: false,
      recommended: false
    },
    {
      name: "Ethos Wallet",
      description: "User-friendly Sui ecosystem wallet",
      icon: "💎",
      isInstalled: false,
      recommended: false
    }
  ];

  const handleConnect = async (walletName: string) => {
    setIsConnecting(true);
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setConnectedWallet(walletName);
    setIsConnecting(false);
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
                {connectedWallet ? "Wallet Connected!" : "Connect Your Wallet"}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {connectedWallet 
                  ? `Successfully connected to ${connectedWallet}`
                  : "Choose a wallet to connect and start creating events"
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!connectedWallet ? (
                <>
                  {/* Info Banner */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="text-blue-800 dark:text-blue-200 font-medium mb-1">
                          Optional but Recommended
                        </p>
                        <p className="text-blue-700 dark:text-blue-300">
                          Connect a wallet to receive NFTs directly. You can also create events without connecting one.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Wallet Options */}
                  <div className="space-y-3">
                    {wallets.map((wallet) => (
                      <div
                        key={wallet.name}
                        className={`relative border rounded-lg p-4 transition-all ${
                          wallet.recommended 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {wallet.recommended && (
                          <div className="absolute -top-2 left-4">
                            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                              Recommended
                            </span>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{wallet.icon}</div>
                            <div>
                              <h3 className="font-medium text-foreground">{wallet.name}</h3>
                              <p className="text-sm text-muted-foreground">{wallet.description}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            {!wallet.isInstalled && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-xs"
                                asChild
                              >
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                  Install <ExternalLink className="w-3 h-3 ml-1" />
                                </a>
                              </Button>
                            )}
                            
                            <Button
                              onClick={() => handleConnect(wallet.name)}
                              disabled={!wallet.isInstalled || isConnecting}
                              size="sm"
                              variant={wallet.recommended ? "default" : "outline"}
                              className={wallet.recommended ? "gradient-bg text-white" : ""}
                            >
                              {isConnecting ? "Connecting..." : "Connect"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skip Option */}
                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">
                      Don't want to connect a wallet right now?
                    </p>
                    <Link to="/dashboard">
                      <Button variant="ghost" className="text-primary hover:bg-primary/10">
                        Skip for now
                      </Button>
                    </Link>
                  </div>
                </>
              ) : (
                /* Connected State */
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                    <Wallet className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Your wallet is now connected and ready to receive NFTs.
                    </p>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">Wallet Address</p>
                      <p className="text-sm font-mono">0x1234...5678</p>
                    </div>
                  </div>

                  <Link to="/dashboard">
                    <Button className="w-full gradient-bg text-white hover:opacity-90">
                      Continue to Dashboard
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
