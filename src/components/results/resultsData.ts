
export interface ResultItem {
  name: string;
  businessType: string;
  location: string;
  percentage: number;
  reviews: {
    before: number;
    after: number;
  };
  timeframe: string;
}

export const resultsData: ResultItem[] = [
  {
    name: "London IP Group",
    businessType: "Patent Law",
    location: "London",
    percentage: 65,
    reviews: {
      before: 24,
      after: 112
    },
    timeframe: "12 months"
  },
  {
    name: "Edinburgh Law Partners",
    businessType: "Trademark",
    location: "Edinburgh",
    percentage: 48,
    reviews: {
      before: 18,
      after: 72
    },
    timeframe: "9 months"
  },
  {
    name: "Manchester IP",
    businessType: "Litigation",
    location: "Manchester",
    percentage: 73,
    reviews: {
      before: 11,
      after: 78
    },
    timeframe: "6 months"
  },
  {
    name: "Global Patent Services",
    businessType: "Patent Law",
    location: "London",
    percentage: 52,
    reviews: {
      before: 32,
      after: 89
    },
    timeframe: "8 months"
  },
  {
    name: "Riverside IP Solutions",
    businessType: "Trademark",
    location: "Liverpool",
    percentage: 61,
    reviews: {
      before: 15,
      after: 64
    },
    timeframe: "7 months"
  },
  {
    name: "Bristol Legal Tech",
    businessType: "Corporate",
    location: "Bristol",
    percentage: 57,
    reviews: {
      before: 19,
      after: 68
    },
    timeframe: "10 months"
  }
];
