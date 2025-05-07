
export interface ResultItem {
  businessType: string;
  location: string;
  name: string;
  reviews: {
    before: number;
    after: number;
  };
  timeframe: string;
  percentage: number;
}

// Pre-defined data to avoid recalculation
export const resultsData: ResultItem[] = [
  {
    businessType: "Home Services",
    location: "Palm Beach, FL",
    name: "Daniel P.",
    reviews: {
      before: 40,
      after: 145
    },
    timeframe: "4 months",
    percentage: 263
  },
  {
    businessType: "Recreation Services",
    location: "Florida",
    name: "Davin K.",
    reviews: {
      before: 23,
      after: 685
    },
    timeframe: "22 months",
    percentage: 2878
  },
  {
    businessType: "Local Service Provider",
    location: "Michigan",
    name: "John M.",
    reviews: {
      before: 157,
      after: 288
    },
    timeframe: "2 months",
    percentage: 83
  },
  {
    businessType: "Junk Removal",
    location: "Tampa, FL",
    name: "Logan S.",
    reviews: {
      before: 127,
      after: 357
    },
    timeframe: "4 months",
    percentage: 181
  },
  {
    businessType: "Photography Studio",
    location: "New York",
    name: "Jarell T.",
    reviews: {
      before: 55,
      after: 122
    },
    timeframe: "1 month",
    percentage: 121
  },
  {
    businessType: "Dental Clinic",
    location: "Chicago",
    name: "Dr. Lawrence",
    reviews: {
      before: 39,
      after: 428
    },
    timeframe: "2 months",
    percentage: 997
  }
];
