import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mt-20 text-indigo-600">
          🌳 InfoTree
        </h1>
        <p className="text-center mt-4 text-gray-600">
          미얀마인을 위한 한국어 학습 앱
        </p>
      </div>
    </div>
  );
}

