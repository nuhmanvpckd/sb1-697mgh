import React from 'react';
import { AreaChart } from '@tremor/react';

const analyticsData = [
  {
    date: '2023-11-01',
    engagement: 1200,
    reach: 3500,
    clicks: 450,
  },
  {
    date: '2023-11-02',
    engagement: 1400,
    reach: 4200,
    clicks: 520,
  },
  // Add more data points as needed
];

export const PostAnalytics = () => {
  return (
    <div className="mt-4">
      <AreaChart
        className="h-72"
        data={analyticsData}
        index="date"
        categories={["engagement", "reach", "clicks"]}
        colors={["indigo", "cyan", "orange"]}
      />
    </div>
  );
};