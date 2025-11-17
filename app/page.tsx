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

        <div className="mt-8 space-y-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between rounded-xl bg-white shadow-sm px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.emoji}</span>
                <div>
                  <div className="font-semibold text-gray-900">
                    {category.name_ko}
                  </div>
                  <div className="text-xs text-gray-500">
                    {category.name_mm}
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-500">
                {category.phraseCount} 문장
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}