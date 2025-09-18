import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Camera, Upload, Plus, Trash2 } from 'lucide-react';

const PlacementRegistrationForm = () => {
  const [educationEntries, setEducationEntries] = useState([
    { id: 1, level: '10th Class', year: '', board: '', institution: '', percentage: '', others: '' },
    { id: 2, level: '12th Class / Diploma', year: '', board: '', institution: '', percentage: '', others: '' },
    { id: 3, level: 'Graduation', year: '', board: '', institution: '', percentage: '', others: '' }
  ]);

  const addEducationEntry = () => {
    const newEntry = {
      id: Date.now(),
      level: '',
      year: '',
      board: '',
      institution: '',
      percentage: '',
      others: ''
    };
    setEducationEntries([...educationEntries, newEntry]);
  };

  const removeEducationEntry = (id: number) => {
    if (educationEntries.length > 1) {
      setEducationEntries(educationEntries.filter(entry => entry.id !== id));
    }
  };

  const updateEducationEntry = (id: number, field: string, value: string) => {
    setEducationEntries(educationEntries.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  return (
    <div className="min-h-dvh bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-lg border-0 bg-white">
          <CardHeader className="text-center py-6 bg-gray-900 text-white rounded-t-lg">
            <CardTitle className="text-3xl font-bold tracking-wide">
              Register for Placement
            </CardTitle>
            <p className="text-gray-200 text-sm mt-2">
              Fill out your details to apply for exciting career opportunities
            </p>
          </CardHeader>
          
          <CardContent className="p-6 space-y-6">
            {/* Photo Upload Section */}
            <div className="flex flex-col items-center space-y-4 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-100">
              <div className="w-32 h-40 bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center">
                <Camera className="w-8 h-8 text-gray-500" />
              </div>
              <Button variant="outline" size="sm" className="gap-2 text-gray-700 border-gray-300 hover:bg-gray-100">
                <Upload className="w-4 h-4" />
                Upload Latest Photograph
              </Button>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Name of the Post Applied For</Label>
                <Input placeholder="e.g., Software Developer" className="h-10" />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Full Name</Label>
                <Input placeholder="Enter your full name" className="h-10" />
              </div>
            </div>

            {/* Family Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Father's Name</Label>
                <Input placeholder="Enter father's name" className="h-10" />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Mother's Name</Label>
                <Input placeholder="Enter mother's name" className="h-10" />
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Date of Birth</Label>
                <Input type="date" className="h-10" />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Age</Label>
                <Input type="number" placeholder="25" className="h-10" />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Mobile No.</Label>
                <Input type="tel" placeholder="+91 9876543210" className="h-10" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Email Address</Label>
                <Input type="email" placeholder="your.email@example.com" className="h-10" />
              </div>
              
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-900">Marital Status</Label>
                <RadioGroup className="flex space-x-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="single" id="single" />
                    <Label htmlFor="single" className="text-sm text-gray-900">Single</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="married" id="married" />
                    <Label htmlFor="married" className="text-sm text-gray-900">Married</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Address Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Residential Address</Label>
                <Textarea placeholder="Enter your current residential address" rows={3} />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Permanent Address</Label>
                <Textarea placeholder="Enter your permanent address" rows={3} />
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-300 pb-2">
                  Educational Qualifications
                </h3>
                <Button 
                  type="button"
                  variant="outline" 
                  size="sm" 
                  onClick={addEducationEntry}
                  className="gap-2 text-gray-700 border-gray-300 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                  Add More
                </Button>
              </div>
              
              <div className="space-y-4">
                {educationEntries.map((entry, index) => (
                  <Card key={entry.id} className="border border-gray-300 bg-white">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {entry.level || `Education Level ${index + 1}`}
                        </h4>
                        {educationEntries.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeEducationEntry(entry.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-gray-700">Education Level</Label>
                          <Input
                            placeholder="e.g., 10th Class, 12th Class, Graduation"
                            value={entry.level}
                            onChange={(e) => updateEducationEntry(entry.id, 'level', e.target.value)}
                            className="h-9"
                          />
                        </div>
                        
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-gray-700">Year of Passing</Label>
                          <Input
                            placeholder="2023"
                            value={entry.year}
                            onChange={(e) => updateEducationEntry(entry.id, 'year', e.target.value)}
                            className="h-9"
                          />
                        </div>
                        
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-gray-700">Board/University</Label>
                          <Input
                            placeholder="Board or University name"
                            value={entry.board}
                            onChange={(e) => updateEducationEntry(entry.id, 'board', e.target.value)}
                            className="h-9"
                          />
                        </div>
                        
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-gray-700">College/Institution</Label>
                          <Input
                            placeholder="School/College name"
                            value={entry.institution}
                            onChange={(e) => updateEducationEntry(entry.id, 'institution', e.target.value)}
                            className="h-9"
                          />
                        </div>
                        
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-gray-700">Percentage/CGPA</Label>
                          <Input
                            placeholder="85% or 8.5 CGPA"
                            value={entry.percentage}
                            onChange={(e) => updateEducationEntry(entry.id, 'percentage', e.target.value)}
                            className="h-9"
                          />
                        </div>
                        
                        <div className="space-y-1">
                          <Label className="text-sm font-medium text-gray-700">Others</Label>
                          <Input
                            placeholder="Grade/Division/Remarks"
                            value={entry.others}
                            onChange={(e) => updateEducationEntry(entry.id, 'others', e.target.value)}
                            className="h-9"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div className="grid grid-cols-1">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Explain Your Skills in your word</Label>
                <Textarea placeholder="Describe your technical education and certifications" rows={3} />
              </div>
              
              {/* <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Experience in Technical Work</Label>
                <Textarea placeholder="Describe your technical work experience" rows={3} />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Experience in Administrative Work</Label>
                <Textarea placeholder="Describe your administrative work experience" rows={3} />
              </div> */}
            </div>

            {/* Family Background */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-900">Father's Education</Label>
                  <Input placeholder="e.g., Graduate" className="h-10" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-900">Father's Occupation</Label>
                  <Input placeholder="e.g., Teacher" className="h-10" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-900">Mother's Education</Label>
                  <Input placeholder="e.g., Graduate" className="h-10" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-900">Mother's Occupation</Label>
                  <Input placeholder="e.g., Homemaker" className="h-10" />
                </div>
              </div>
            </div> */}

            {/* Additional Information */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-gray-900">Expected and Desired Salary</Label>
                <Input placeholder="e.g., ₹5,00,000 per annum" className="h-10" />
              </div>
              
              <div className="space-y-3">
                <Label className="text-sm font-semibold text-gray-900">Willing to Relocate Outside Your City?</Label>
                <RadioGroup className="flex space-x-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="relocate-yes" />
                    <Label htmlFor="relocate-yes" className="text-sm text-gray-900">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="relocate-no" />
                    <Label htmlFor="relocate-no" className="text-sm text-gray-900">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div> */}

            {/* Additional Information */}
            {/* <div className="space-y-2">
              <Label className="text-sm font-semibold text-gray-900">
                Any Other Information About Yourself (if you wish to provide)
              </Label>
              <Textarea 
                placeholder="Share any additional information that might be relevant for your application..."
                rows={4}
              />
            </div> */}

            {/* Declaration and Submit */}
            <div className="space-y-4 pt-4 border-t border-gray-300">
              <div className="grid grid-cols-1 ">
                {/* <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-900">Place</Label>
                  <Input placeholder="Enter place" className="h-10" />
                </div> */}
                {/* <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-900">Date</Label>
                  <Input type="date" className="h-10" />
                </div> */}
              </div>
              
              <div className="flex justify-center pt-4">
                <Button 
                  size="lg"   
                  className="px-8 py-2 text-lg font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                >
                  Submit Application
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlacementRegistrationForm;