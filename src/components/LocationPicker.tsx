
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";

interface LocationPickerProps {
  onLocationSelect: (location: string) => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({ onLocationSelect }) => {
  const [address, setAddress] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  
  const handleGetCurrentLocation = () => {
    setIsLocating(true);
    
    // Simulating geolocation API call
    setTimeout(() => {
      setIsLocating(false);
      // For demo purposes, we'll just set a mock address
      const mockAddress = "123 Main Street, Anytown";
      setAddress(mockAddress);
      onLocationSelect(mockAddress);
    }, 1500);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address.trim()) {
      onLocationSelect(address);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <MapPin className="h-5 w-5 text-brand-500" />
        <h2 className="text-lg font-medium">Set Your Location</h2>
      </div>
      
      <p className="text-muted-foreground text-sm mb-4">
        To show you nearby shops and accurate delivery times, we need your location.
      </p>
      
      <Button
        type="button"
        variant="outline"
        className="w-full mb-4"
        disabled={isLocating}
        onClick={handleGetCurrentLocation}
      >
        {isLocating ? (
          <>
            <span className="animate-pulse">Detecting location...</span>
          </>
        ) : (
          <>Use my current location</>
        )}
      </Button>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground">or enter an address</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={!address.trim()}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LocationPicker;
