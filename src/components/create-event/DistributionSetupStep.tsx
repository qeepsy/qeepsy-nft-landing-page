
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface DistributionSetupStepProps {
  data: any;
  updateData: (stepKey: string, data: any) => void;
}

const DistributionSetupStep: React.FC<DistributionSetupStepProps> = ({ data, updateData }) => {
  const handleChange = (field: string, value: any) => {
    updateData('distribution', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-foreground">Distribution Setup</h3>
        <p className="text-muted-foreground">
          Configure how and when attendees will receive their NFTs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground text-lg">Distribution Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="auto-mint"
                  name="distributionMethod"
                  value="auto-mint"
                  checked={data.distribution?.method === 'auto-mint'}
                  onChange={(e) => handleChange('method', e.target.value)}
                  className="text-primary"
                />
                <Label htmlFor="auto-mint" className="text-foreground">
                  Auto-mint on Check-in
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="manual-claim"
                  name="distributionMethod"
                  value="manual-claim"
                  checked={data.distribution?.method === 'manual-claim'}
                  onChange={(e) => handleChange('method', e.target.value)}
                  className="text-primary"
                />
                <Label htmlFor="manual-claim" className="text-foreground">
                  Manual Claim by Attendee
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="batch-airdrop"
                  name="distributionMethod"
                  value="batch-airdrop"
                  checked={data.distribution?.method === 'batch-airdrop'}
                  onChange={(e) => handleChange('method', e.target.value)}
                  className="text-primary"
                />
                <Label htmlFor="batch-airdrop" className="text-foreground">
                  Batch Airdrop After Event
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground text-lg">Distribution Timing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="distributionDelay" className="text-foreground">
                Delay After Check-in (minutes)
              </Label>
              <Input
                id="distributionDelay"
                type="number"
                min="0"
                placeholder="0"
                value={data.distribution?.delay || ''}
                onChange={(e) => handleChange('delay', e.target.value)}
                className="bg-background border-border text-foreground"
              />
              <p className="text-muted-foreground text-sm">
                Optional delay before NFT is minted/sent
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="requireEventCompletion"
                checked={data.distribution?.requireEventCompletion || false}
                onCheckedChange={(checked) => handleChange('requireEventCompletion', checked)}
              />
              <Label htmlFor="requireEventCompletion" className="text-foreground">
                Wait until event ends
              </Label>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground text-lg">Eligibility Requirements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minAttendanceTime" className="text-foreground">
                Minimum Attendance Time (minutes)
              </Label>
              <Input
                id="minAttendanceTime"
                type="number"
                min="0"
                placeholder="30"
                value={data.distribution?.minAttendanceTime || ''}
                onChange={(e) => handleChange('minAttendanceTime', e.target.value)}
                className="bg-background border-border text-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="maxNFTsPerWallet" className="text-foreground">
                Max NFTs per Wallet
              </Label>
              <Input
                id="maxNFTsPerWallet"
                type="number"
                min="1"
                placeholder="1"
                value={data.distribution?.maxNFTsPerWallet || ''}
                onChange={(e) => handleChange('maxNFTsPerWallet', e.target.value)}
                className="bg-background border-border text-foreground"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="requireWalletConnection"
              checked={data.distribution?.requireWalletConnection || false}
              onCheckedChange={(checked) => handleChange('requireWalletConnection', checked)}
            />
            <Label htmlFor="requireWalletConnection" className="text-foreground">
              Require wallet connection at registration
            </Label>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground text-lg">Distribution Message</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="distributionMessage" className="text-foreground">
              Custom Message to Attendees
            </Label>
            <Textarea
              id="distributionMessage"
              placeholder="Thank you for attending! Here's your exclusive NFT..."
              value={data.distribution?.message || ''}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={3}
              className="bg-background border-border text-foreground"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="sendEmailNotification"
              checked={data.distribution?.sendEmailNotification || false}
              onCheckedChange={(checked) => handleChange('sendEmailNotification', checked)}
            />
            <Label htmlFor="sendEmailNotification" className="text-foreground">
              Send email notification when NFT is distributed
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DistributionSetupStep;
