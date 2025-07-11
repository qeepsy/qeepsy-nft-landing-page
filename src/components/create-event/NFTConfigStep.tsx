
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NFTConfigStepProps {
  data: any;
  updateData: (stepKey: string, data: any) => void;
}

const NFTConfigStep: React.FC<NFTConfigStepProps> = ({ data, updateData }) => {
  const handleChange = (field: string, value: any) => {
    updateData('nftConfig', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-foreground">NFT Configuration</h3>
        <p className="text-muted-foreground">
          Configure how your event NFTs will be created and distributed
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground text-lg">Basic NFT Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nftName" className="text-foreground">NFT Collection Name *</Label>
              <Input
                id="nftName"
                placeholder="e.g., DevCon 2024 Attendance"
                value={data.nftConfig?.nftName || ''}
                onChange={(e) => handleChange('nftName', e.target.value)}
                className="bg-background border-border text-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="nftSymbol" className="text-foreground">NFT Symbol *</Label>
              <Input
                id="nftSymbol"
                placeholder="e.g., DC24"
                value={data.nftConfig?.nftSymbol || ''}
                onChange={(e) => handleChange('nftSymbol', e.target.value)}
                className="bg-background border-border text-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="nftDescription" className="text-foreground">NFT Description</Label>
              <Textarea
                id="nftDescription"
                placeholder="Describe what this NFT represents"
                value={data.nftConfig?.nftDescription || ''}
                onChange={(e) => handleChange('nftDescription', e.target.value)}
                rows={3}
                className="bg-background border-border text-foreground"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground text-lg">NFT Properties</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="soulbound"
                checked={data.nftConfig?.soulbound || false}
                onCheckedChange={(checked) => handleChange('soulbound', checked)}
              />
              <Label htmlFor="soulbound" className="text-foreground">
                Soulbound (Non-transferable)
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="dynamicImage"
                checked={data.nftConfig?.dynamicImage || false}
                onCheckedChange={(checked) => handleChange('dynamicImage', checked)}
              />
              <Label htmlFor="dynamicImage" className="text-foreground">
                Dynamic Image Generation
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="includeCheckInTime"
                checked={data.nftConfig?.includeCheckInTime || false}
                onCheckedChange={(checked) => handleChange('includeCheckInTime', checked)}
              />
              <Label htmlFor="includeCheckInTime" className="text-foreground">
                Include Check-in Timestamp
              </Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="includeSeatNumber"
                checked={data.nftConfig?.includeSeatNumber || false}
                onCheckedChange={(checked) => handleChange('includeSeatNumber', checked)}
              />
              <Label htmlFor="includeSeatNumber" className="text-foreground">
                Include Seat/Position Number
              </Label>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground text-lg">Blockchain Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="blockchain" className="text-foreground">Blockchain Network *</Label>
              <select
                id="blockchain"
                value={data.nftConfig?.blockchain || 'sui'}
                onChange={(e) => handleChange('blockchain', e.target.value)}
                className="w-full h-10 bg-background border border-border rounded-md px-3 text-foreground"
              >
                <option value="sui">Sui Network</option>
                <option value="ethereum">Ethereum</option>
                <option value="polygon">Polygon</option>
                <option value="solana">Solana</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="royalty" className="text-foreground">Creator Royalty (%)</Label>
              <Input
                id="royalty"
                type="number"
                min="0"
                max="10"
                step="0.5"
                placeholder="2.5"
                value={data.nftConfig?.royalty || ''}
                onChange={(e) => handleChange('royalty', e.target.value)}
                className="bg-background border-border text-foreground"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="contractAddress" className="text-foreground">Custom Contract Address (Optional)</Label>
            <Input
              id="contractAddress"
              placeholder="Leave empty to deploy new contract"
              value={data.nftConfig?.contractAddress || ''}
              onChange={(e) => handleChange('contractAddress', e.target.value)}
              className="bg-background border-border text-foreground"
            />
            <p className="text-muted-foreground text-sm">
              If you have an existing contract, enter its address. Otherwise, we'll deploy a new one.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NFTConfigStep;
