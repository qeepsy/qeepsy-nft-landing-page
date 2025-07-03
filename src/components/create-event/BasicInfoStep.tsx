
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Clock } from "lucide-react";

interface BasicInfoStepProps {
  data: any;
  updateData: (stepKey: string, data: any) => void;
}

const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ data, updateData }) => {
  const handleChange = (field: string, value: string) => {
    updateData('basicInfo', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="eventName" className="text-white">Event Name *</Label>
          <Input
            id="eventName"
            placeholder="Enter event name"
            value={data.basicInfo?.eventName || ''}
            onChange={(e) => handleChange('eventName', e.target.value)}
            className="glass border-white/30 text-white placeholder:text-white/50"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="eventType" className="text-white">Event Type *</Label>
          <select
            id="eventType"
            value={data.basicInfo?.eventType || ''}
            onChange={(e) => handleChange('eventType', e.target.value)}
            className="w-full h-10 glass border border-white/30 rounded-md px-3 text-white bg-transparent"
          >
            <option value="">Select event type</option>
            <option value="conference">Conference</option>
            <option value="hackathon">Hackathon</option>
            <option value="meetup">Meetup</option>
            <option value="workshop">Workshop</option>
            <option value="dao-event">DAO Event</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-white">Event Description *</Label>
        <Textarea
          id="description"
          placeholder="Describe your event"
          value={data.basicInfo?.description || ''}
          onChange={(e) => handleChange('description', e.target.value)}
          rows={4}
          className="glass border-white/30 text-white placeholder:text-white/50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="startDate" className="text-white flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Start Date *
          </Label>
          <Input
            id="startDate"
            type="datetime-local"
            value={data.basicInfo?.startDate || ''}
            onChange={(e) => handleChange('startDate', e.target.value)}
            className="glass border-white/30 text-white"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="endDate" className="text-white flex items-center gap-2">
            <Clock className="w-4 h-4" />
            End Date *
          </Label>
          <Input
            id="endDate"
            type="datetime-local"
            value={data.basicInfo?.endDate || ''}
            onChange={(e) => handleChange('endDate', e.target.value)}
            className="glass border-white/30 text-white"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="timezone" className="text-white">Timezone</Label>
          <select
            id="timezone"
            value={data.basicInfo?.timezone || 'UTC'}
            onChange={(e) => handleChange('timezone', e.target.value)}
            className="w-full h-10 glass border border-white/30 rounded-md px-3 text-white bg-transparent"
          >
            <option value="UTC">UTC</option>
            <option value="EST">Eastern Time</option>
            <option value="PST">Pacific Time</option>
            <option value="CET">Central European Time</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="location" className="text-white flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Location
          </Label>
          <Input
            id="location"
            placeholder="Event location or 'Virtual'"
            value={data.basicInfo?.location || ''}
            onChange={(e) => handleChange('location', e.target.value)}
            className="glass border-white/30 text-white placeholder:text-white/50"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="capacity" className="text-white">Expected Attendance</Label>
          <Input
            id="capacity"
            type="number"
            placeholder="Number of attendees"
            value={data.basicInfo?.capacity || ''}
            onChange={(e) => handleChange('capacity', e.target.value)}
            className="glass border-white/30 text-white placeholder:text-white/50"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoStep;
