
import React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

type Category = {
  id: string;
  name: string;
  icon?: string;
};

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full py-4">
      <ScrollArea className="w-full">
        <div className="flex space-x-2 pb-2 px-1">
          <button
            onClick={() => onSelectCategory(null)}
            className={cn(
              "flex flex-col items-center justify-center px-4 py-3 rounded-lg transition-colors",
              "text-sm font-medium whitespace-nowrap",
              selectedCategory === null
                ? "bg-brand-500 text-white"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            )}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={cn(
                "flex flex-col items-center justify-center px-4 py-3 rounded-lg transition-colors",
                "text-sm font-medium whitespace-nowrap",
                selectedCategory === category.id
                  ? "bg-brand-500 text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              )}
            >
              {category.icon && (
                <span className="text-xl mb-1">{category.icon}</span>
              )}
              {category.name}
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
