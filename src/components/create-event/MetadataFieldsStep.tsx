
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2, GripVertical } from "lucide-react";

interface MetadataField {
  id: string;
  name: string;
  type: 'text' | 'number' | 'date' | 'boolean';
  required: boolean;
  defaultValue?: string;
}

interface MetadataFieldsStepProps {
  data: any;
  updateData: (stepKey: string, data: any) => void;
}

const MetadataFieldsStep: React.FC<MetadataFieldsStepProps> = ({ data, updateData }) => {
  const [fields, setFields] = useState<MetadataField[]>(
    data.metadata?.customFields || [
      { id: '1', name: 'Attendee Name', type: 'text', required: true },
      { id: '2', name: 'Check-in Time', type: 'date', required: true },
      { id: '3', name: 'Seat Number', type: 'text', required: false }
    ]
  );

  const addField = () => {
    const newField: MetadataField = {
      id: Date.now().toString(),
      name: '',
      type: 'text',
      required: false
    };
    const updatedFields = [...fields, newField];
    setFields(updatedFields);
    updateData('metadata', { customFields: updatedFields });
  };

  const removeField = (id: string) => {
    const updatedFields = fields.filter(field => field.id !== id);
    setFields(updatedFields);
    updateData('metadata', { customFields: updatedFields });
  };

  const updateField = (id: string, updates: Partial<MetadataField>) => {
    const updatedFields = fields.map(field =>
      field.id === id ? { ...field, ...updates } : field
    );
    setFields(updatedFields);
    updateData('metadata', { customFields: updatedFields });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-white">Metadata Fields</h3>
        <p className="text-white/70">
          Define what information will be stored in each NFT's metadata
        </p>
      </div>

      <Card className="glass border-white/30">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white text-lg">Custom Metadata Fields</CardTitle>
          <Button
            onClick={addField}
            variant="outline"
            size="sm"
            className="glass text-white border-white/30 hover:bg-white/20"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Field
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="glass p-4 rounded-lg border border-white/20">
              <div className="flex items-center gap-4">
                <GripVertical className="h-5 w-5 text-white/50 cursor-move" />
                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white text-sm">Field Name</Label>
                    <Input
                      placeholder="Field name"
                      value={field.name}
                      onChange={(e) => updateField(field.id, { name: e.target.value })}
                      className="glass border-white/30 text-white placeholder:text-white/50 h-9"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-white text-sm">Type</Label>
                    <select
                      value={field.type}
                      onChange={(e) => updateField(field.id, { type: e.target.value as any })}
                      className="w-full h-9 glass border border-white/30 rounded-md px-3 text-white bg-transparent text-sm"
                    >
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="date">Date</option>
                      <option value="boolean">Boolean</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-white text-sm">Default Value</Label>
                    <Input
                      placeholder="Default value"
                      value={field.defaultValue || ''}
                      onChange={(e) => updateField(field.id, { defaultValue: e.target.value })}
                      className="glass border-white/30 text-white placeholder:text-white/50 h-9"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-white text-sm">Required</Label>
                    <div className="flex items-center space-x-2 h-9">
                      <input
                        type="checkbox"
                        checked={field.required}
                        onChange={(e) => updateField(field.id, { required: e.target.checked })}
                        className="rounded border-white/30"
                      />
                      <span className="text-white/70 text-sm">Required</span>
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={() => removeField(field.id)}
                  variant="outline"
                  size="sm"
                  className="glass text-red-400 border-red-400/30 hover:bg-red-400/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          
          {fields.length === 0 && (
            <div className="text-center py-8">
              <p className="text-white/50">No custom fields added yet</p>
              <Button
                onClick={addField}
                variant="outline"
                className="glass text-white border-white/30 hover:bg-white/20 mt-4"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Field
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="glass border-white/30">
        <CardHeader>
          <CardTitle className="text-white text-lg">Standard Fields</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-white/70 text-sm mb-4">
              These fields are automatically included in every NFT:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="glass p-3 rounded border border-white/10">
                <span className="text-white font-medium">Event Name</span>
                <p className="text-white/50 text-sm">Name of the event</p>
              </div>
              <div className="glass p-3 rounded border border-white/10">
                <span className="text-white font-medium">Event Date</span>
                <p className="text-white/50 text-sm">Event start date</p>
              </div>
              <div className="glass p-3 rounded border border-white/10">
                <span className="text-white font-medium">Token ID</span>
                <p className="text-white/50 text-sm">Unique NFT identifier</p>
              </div>
              <div className="glass p-3 rounded border border-white/10">
                <span className="text-white font-medium">Mint Date</span>
                <p className="text-white/50 text-sm">When the NFT was created</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MetadataFieldsStep;
