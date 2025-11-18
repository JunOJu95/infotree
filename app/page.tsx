import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/dummyData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mt-10 text-indigo-600">
          🌳 InfoTree
        </h1>
        <p className="text-center mt-4 text-gray-600">
          미얀마인을 위한 한국어 학습
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}