"use client";

import { Category } from "@/lib/dummyData";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div
      className="
        bg-white rounded-2xl shadow-sm p-4 
        flex flex-col items-center text-center 
        hover:shadow-md transition cursor-pointer
      "
    >
      <span className="text-4xl mb-2">{category.emoji}</span>

      <p className="font-semibold text-gray-900">{category.name_ko}</p>

      <p className="text-xs text-gray-500 mt-1">{category.name_mm}</p>

      <span className="text-[10px] text-gray-400 mt-2">
        {category.phraseCount} 문장
      </span>
    </div>
  );
}