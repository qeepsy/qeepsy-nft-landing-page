
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Smartphone, MapPin, Wifi } from "lucide-react";

interface CheckInMethodStepProps {
  data: any;
  updateData: (stepKey: string, data: any) => void;
}

const CheckInMethodStep: React.FC<CheckInMethodStepProps> = ({ data, updateData }) => {
  const handleChange = (field: string, value: any) => {
    updateData('checkIn', { [field]: value });
  };

  const checkInMethods = [
    {
      id: 'qr-code',
      title: 'QR Code Scanning',
      description: 'Attendees scan a QR code at the venue',
      icon: QrCode,
      recommended: true
    },
    {
      id: 'manual',
      title: 'Manual Check-in',
      description: 'Organizer manually checks in attendees',
      icon: Smartphone,
      recommended: false
    },
    {
      id: 'geolocation',
      title: 'Location-based',
      description: 'Automatic check-in based on location',
      icon: MapPin,
      recommended: false
    },
    {
      id: 'nfc',
      title: 'NFC Tap',
      description: 'Near-field communication check-in',
      icon: Wifi,
      recommended: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-white">Check-in Method</h3>
        <p className="text-white/70">
          Choose how attendees will check in to your event
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {checkInMethods.map((method) => {
          const Icon = method.icon;
          const isSelected = data.checkIn?.method === method.id;
          
          return (
            <Card
              key={method.id}
              className={`cursor-pointer transition-all ${
                isSelected 
                  ? 'glass-strong border-purple-400/50 ring-2 ring-purple-400/30' 
                  : 'glass border-white/30 hover:border-white/50'
              }`}
              onClick={() => handleChange('method', method.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon className="h-6 w-6 text-purple-400" />
                    <CardTitle className="text-white text-lg">
                      {method.title}
                    </CardTitle>
                  </div>
                  {method.recommended && (
                    <span className="text-xs bg-purple-400/20 text-purple-300 px-2 py-1 rounded-full">
                      Recommended
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 text-sm">{method.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {data.checkIn?.method && (
        <Card className="glass border-white/30">
          <CardHeader>
            <CardTitle className="text-white text-lg">Check-in Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.checkIn.method === 'qr-code' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="dynamicQR"
                    checked={data.checkIn?.dynamicQR || false}
                    onCheckedChange={(checked) => handleChange('dynamicQR', checked)}
                  />
                  <Label htmlFor="dynamicQR" className="text-white">
                    Use dynamic QR codes (changes every few minutes)
                  </Label>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="qrRefreshInterval" className="text-white">
                    QR Code Refresh Interval (seconds)
                  </Label>
                  <Input
                    id="qrRefreshInterval"
                    type="number"
                    min="30"
                    max="300"
                    placeholder="60"
                    value={data.checkIn?.qrRefreshInterval || ''}
                    onChange={(e) => handleChange('qrRefreshInterval', e.target.value)}
                    className="glass border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
            )}

            {data.checkIn.method === 'geolocation' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="latitude" className="text-white">Latitude</Label>
                    <Input
                      id="latitude"
                      type="number"
                      step="any"
                      placeholder="40.7128"
                      value={data.checkIn?.latitude || ''}
                      onChange={(e) => handleChange('latitude', e.target.value)}
                      className="glass border-white/30 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="longitude" className="text-white">Longitude</Label>
                    <Input
                      id="longitude"
                      type="number"
                      step="any"
                      placeholder="-74.0060"
                      value={data.checkIn?.longitude || ''}
                      onChange={(e) => handleChange('longitude', e.target.value)}
                      className="glass border-white/30 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="radius" className="text-white">Check-in Radius (meters)</Label>
                  <Input
                    id="radius"
                    type="number"
                    min="10"
                    max="1000"
                    placeholder="50"
                    value={data.checkIn?.radius || ''}
                    onChange={(e) => handleChange('radius', e.target.value)}
                    className="glass border-white/30 text-white placeholder:text-white/50"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="checkInWindow" className="text-white">Check-in Window</Label>
              <select
                id="checkInWindow"
                value={data.checkIn?.window || 'event-duration'}
                onChange={(e) => handleChange('window', e.target.value)}
                className="w-full h-10 glass border border-white/30 rounded-md px-3 text-white bg-transparent"
              >
                <option value="1-hour-before">1 hour before event</option>
                <option value="30-min-before">30 minutes before event</option>
                <option value="event-start">Only during event</option>
                <option value="event-duration">Entire event duration</option>
                <option value="custom">Custom time range</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="checkInInstructions" className="text-white">
                Check-in Instructions for Attendees
              </Label>
              <Textarea
                id="checkInInstructions"
                placeholder="Provide clear instructions on how attendees should check in..."
                value={data.checkIn?.instructions || ''}
                onChange={(e) => handleChange('instructions', e.target.value)}
                rows={3}
                className="glass border-white/30 text-white placeholder:text-white/50"
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CheckInMethodStep;
