
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import BasicInfoStep from "@/components/create-event/BasicInfoStep";
import ArtworkUploadStep from "@/components/create-event/ArtworkUploadStep";
import NFTConfigStep from "@/components/create-event/NFTConfigStep";
import DistributionSetupStep from "@/components/create-event/DistributionSetupStep";
import MetadataFieldsStep from "@/components/create-event/MetadataFieldsStep";
import CheckInMethodStep from "@/components/create-event/CheckInMethodStep";
import PreviewStep from "@/components/create-event/PreviewStep";

const steps = [
  { id: 'basic-info', title: 'Basic Info', component: BasicInfoStep },
  { id: 'artwork-upload', title: 'Artwork Upload', component: ArtworkUploadStep },
  { id: 'nft-config', title: 'NFT Config', component: NFTConfigStep },
  { id: 'distribution-setup', title: 'Distribution Setup', component: DistributionSetupStep },
  { id: 'metadata-fields', title: 'Metadata Fields', component: MetadataFieldsStep },
  { id: 'check-in-method', title: 'Check-in Method', component: CheckInMethodStep },
  { id: 'preview', title: 'Preview', component: PreviewStep }
];

const CreateEvent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [eventData, setEventData] = useState({
    basicInfo: {},
    artwork: {},
    nftConfig: {},
    distribution: {},
    metadata: {},
    checkIn: {}
  });

  const updateEventData = (stepKey: string, data: any) => {
    setEventData(prev => ({
      ...prev,
      [stepKey]: { ...prev[stepKey as keyof typeof prev], ...data }
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-foreground">Create Your Event</h1>
            <span className="text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="gradient-bg h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          
          <div className="flex justify-between mt-2">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`text-sm ${index <= currentStep ? 'text-foreground' : 'text-muted-foreground'}`}
              >
                {step.title}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle className="text-foreground text-2xl">
              {steps[currentStep].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CurrentStepComponent 
              data={eventData}
              updateData={updateEventData}
            />
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            onClick={prevStep}
            disabled={currentStep === 0}
            variant="outline"
            className="bg-card text-foreground border-border hover:bg-accent"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          <Button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="gradient-bg text-white hover:opacity-90"
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
