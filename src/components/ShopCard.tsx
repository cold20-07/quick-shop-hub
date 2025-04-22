
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin } from "lucide-react";

interface ShopCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  deliveryTime: string;
  distance: string;
}

const ShopCard: React.FC<ShopCardProps> = ({
  id,
  name,
  image,
  category,
  rating,
  deliveryTime,
  distance,
}) => {
  return (
    <Link to={`/shop/${id}`} className="shop-card flex flex-col h-full">
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 left-3" variant="secondary">
          {category}
        </Badge>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg leading-tight mb-1">{name}</h3>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center text-yellow-500 mr-2">
            <Star className="w-4 h-4 fill-current mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          
          <span className="text-muted-foreground text-sm">•</span>
          
          <div className="flex items-center text-muted-foreground ml-2">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{deliveryTime}</span>
          </div>
        </div>
        
        <div className="flex items-center text-muted-foreground mt-auto">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{distance} away</span>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
