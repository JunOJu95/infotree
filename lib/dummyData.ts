export interface Category {
  id: number;
  name_ko: string;
  name_mm: string;
  emoji: string;
  phraseCount: number;
}

export const categories: Category[] = [
  {
    id: 1,
    name_ko: "인사말",
    name_mm: "နှုတ်ခွန်းဆက်စကား",
    emoji: "👋",
    phraseCount: 25,
  },
  {
    id: 2,
    name_ko: "식당",
    name_mm: "စားသောက်ဆိုင်",
    emoji: "🍜",
    phraseCount: 25,
  },
  {
    id: 3,
    name_ko: "쇼핑",
    name_mm: "စျေးဝယ်",
    emoji: "🛍️",
    phraseCount: 25,
  },
  {
    id: 4,
    name_ko: "교통",
    name_mm: "လမ်းပန်းဆက်သွယ်ရေး",
    emoji: "🚌",
    phraseCount: 25,
  },
  {
    id: 5,
    name_ko: "병원",
    name_mm: "ဆေးရုံ",
    emoji: "🏥",
    phraseCount: 25,
  },
  {
    id: 6,
    name_ko: "긴급상황",
    name_mm: "အရေးပေါ်အခြေအနေ",
    emoji: "🆘",
    phraseCount: 25,
  },
  {
    id: 7,
    name_ko: "일상대화",
    name_mm: "နေ့စဉ်စကားပြော",
    emoji: "💬",
    phraseCount: 25,
  },
  {
    id: 8,
    name_ko: "공항/호텔",
    name_mm: "လေဆိပ်/ဟိုတယ်",
    emoji: "✈️",
    phraseCount: 25,
  },
];
