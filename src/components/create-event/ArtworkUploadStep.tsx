
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload, Image, X } from "lucide-react";

interface ArtworkUploadStepProps {
  data: any;
  updateData: (stepKey: string, data: any) => void;
}

const ArtworkUploadStep: React.FC<ArtworkUploadStepProps> = ({ data, updateData }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const file = files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateData('artwork', {
          file: file,
          preview: e.target?.result as string,
          name: file.name
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    updateData('artwork', {
      file: null,
      preview: null,
      name: null
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Upload Event Artwork</h3>
        <p className="text-muted-foreground">
          This will be used as the base image for your event NFTs. Choose a high-quality image that represents your event.
        </p>
      </div>

      {!data.artwork?.preview ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive 
              ? 'border-primary bg-primary/10' 
              : 'border-border hover:border-primary/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h4 className="text-lg font-medium text-foreground mb-2">
            Drop your image here, or click to browse
          </h4>
          <p className="text-muted-foreground mb-4">
            PNG, JPG, GIF up to 10MB
          </p>
          <Button
            variant="outline"
            className="glass text-foreground border-border hover:bg-accent"
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            <Image className="mr-2 h-4 w-4" />
            Choose File
          </Button>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files && handleFiles(e.target.files)}
            className="hidden"
          />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden glass p-4">
            <button
              onClick={removeImage}
              className="absolute top-2 right-2 p-1 rounded-full bg-destructive hover:bg-destructive/80 transition-colors"
            >
              <X className="h-4 w-4 text-destructive-foreground" />
            </button>
            <img
              src={data.artwork.preview}
              alt="Event artwork"
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-muted-foreground mt-2 text-sm">
              {data.artwork.name}
            </p>
          </div>
          
          <Button
            variant="outline"
            onClick={removeImage}
            className="glass text-foreground border-border hover:bg-accent w-full"
          >
            Upload Different Image
          </Button>
        </div>
      )}

      <div className="space-y-4">
        <Label className="text-foreground text-lg">Artwork Guidelines</Label>
        <div className="glass p-4 rounded-lg space-y-2">
          <p className="text-muted-foreground text-sm">• Recommended size: 1080x1080px (square format)</p>
          <p className="text-muted-foreground text-sm">• High resolution for best NFT quality</p>
          <p className="text-muted-foreground text-sm">• Avoid text that might be hard to read when resized</p>
          <p className="text-muted-foreground text-sm">• Consider how dynamic elements will overlay on your image</p>
        </div>
      </div>
    </div>
  );
};

export default ArtworkUploadStep;
