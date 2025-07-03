
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Ticket, Settings, CheckCircle } from "lucide-react";

interface PreviewStepProps {
  data: any;
  updateData: (stepKey: string, data: any) => void;
}

const PreviewStep: React.FC<PreviewStepProps> = ({ data }) => {
  const handlePublish = () => {
    // Handle event publication logic here
    console.log('Publishing event with data:', data);
    alert('Event would be published! (Demo)');
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-white">Event Preview</h3>
        <p className="text-white/70">
          Review your event details before publishing
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Event Overview */}
        <Card className="glass border-white/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Event Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="text-white font-medium">
                {data.basicInfo?.eventName || 'Untitled Event'}
              </h4>
              <p className="text-white/70 text-sm">
                {data.basicInfo?.eventType || 'Event Type'}
              </p>
            </div>
            
            <p className="text-white/70 text-sm">
              {data.basicInfo?.description || 'No description provided'}
            </p>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-purple-400" />
                <span className="text-white/70">
                  {data.basicInfo?.startDate ? 
                    new Date(data.basicInfo.startDate).toLocaleDateString() : 
                    'Date TBD'
                  }
                </span>
              </div>
              
              {data.basicInfo?.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-purple-400" />
                  <span className="text-white/70">{data.basicInfo.location}</span>
                </div>
              )}
              
              {data.basicInfo?.capacity && (
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-purple-400" />
                  <span className="text-white/70">{data.basicInfo.capacity} attendees</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* NFT Configuration */}
        <Card className="glass border-white/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Ticket className="h-5 w-5" />
              NFT Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="text-white font-medium">
                {data.nftConfig?.nftName || 'NFT Collection Name'}
              </h4>
              <p className="text-white/70 text-sm">
                Symbol: {data.nftConfig?.nftSymbol || 'N/A'}
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Soulbound</span>
                <span className="text-white text-sm">
                  {data.nftConfig?.soulbound ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Dynamic Image</span>
                <span className="text-white text-sm">
                  {data.nftConfig?.dynamicImage ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Blockchain</span>
                <span className="text-white text-sm">
                  {data.nftConfig?.blockchain || 'Sui Network'}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Distribution Settings */}
        <Card className="glass border-white/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Distribution Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-sm">Method</span>
              <span className="text-white text-sm">
                {data.distribution?.method === 'auto-mint' ? 'Auto-mint on Check-in' :
                 data.distribution?.method === 'manual-claim' ? 'Manual Claim' :
                 data.distribution?.method === 'batch-airdrop' ? 'Batch Airdrop' :
                 'Not configured'}
              </span>
            </div>
            
            {data.distribution?.delay && (
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Delay</span>
                <span className="text-white text-sm">{data.distribution.delay} minutes</span>
              </div>
            )}
            
            {data.distribution?.minAttendanceTime && (
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Min. Attendance</span>
                <span className="text-white text-sm">{data.distribution.minAttendanceTime} minutes</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Check-in Method */}
        <Card className="glass border-white/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Check-in Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-sm">Method</span>
              <span className="text-white text-sm">
                {data.checkIn?.method === 'qr-code' ? 'QR Code Scanning' :
                 data.checkIn?.method === 'manual' ? 'Manual Check-in' :
                 data.checkIn?.method === 'geolocation' ? 'Location-based' :
                 data.checkIn?.method === 'nfc' ? 'NFC Tap' :
                 'Not configured'}
              </span>
            </div>
            
            {data.checkIn?.window && (
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-sm">Check-in Window</span>
                <span className="text-white text-sm">
                  {data.checkIn.window.replace('-', ' ').replace('_', ' ')}
                </span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Artwork Preview */}
      {data.artwork?.preview && (
        <Card className="glass border-white/30">
          <CardHeader>
            <CardTitle className="text-white">Event Artwork</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <img
                src={data.artwork.preview}
                alt="Event artwork"
                className="max-w-sm w-full h-64 object-cover rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Custom Metadata Fields */}
      {data.metadata?.customFields && data.metadata.customFields.length > 0 && (
        <Card className="glass border-white/30">
          <CardHeader>
            <CardTitle className="text-white">Custom Metadata Fields</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.metadata.customFields.map((field: any) => (
                <div key={field.id} className="glass p-3 rounded border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{field.name}</span>
                    <span className="text-white/50 text-sm">{field.type}</span>
                  </div>
                  {field.required && (
                    <span className="text-red-400 text-xs">Required</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Publish Button */}
      <div className="text-center pt-6">
        <Button
          onClick={handlePublish}
          size="lg"
          className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 text-lg"
        >
          Publish Event
        </Button>
        <p className="text-white/70 text-sm mt-2">
          Your event will be deployed to the blockchain and made available for registration
        </p>
      </div>
    </div>
  );
};

export default PreviewStep;
