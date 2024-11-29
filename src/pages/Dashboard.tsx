import React from 'react';
import { Card, Title, AreaChart } from '@tremor/react';

const chartdata = [
  { date: '2023-01-01', Engagement: 2890, Followers: 2338 },
  { date: '2023-02-01', Engagement: 2756, Followers: 2103 },
  { date: '2023-03-01', Engagement: 3322, Followers: 2194 },
  { date: '2023-04-01', Engagement: 3470, Followers: 2108 },
  { date: '2023-05-01', Engagement: 3475, Followers: 1812 },
];

export const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card decoration="top" decorationColor="indigo">
          <Title>Total Posts</Title>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card decoration="top" decorationColor="green">
          <Title>Total Engagement</Title>
          <p className="text-2xl font-bold">45.2K</p>
        </Card>
        <Card decoration="top" decorationColor="orange">
          <Title>Active Campaigns</Title>
          <p className="text-2xl font-bold">12</p>
        </Card>
      </div>

      <Card>
        <Title>Performance Overview</Title>
        <AreaChart
          className="h-72 mt-4"
          data={chartdata}
          index="date"
          categories={["Engagement", "Followers"]}
          colors={["indigo", "cyan"]}
        />
      </Card>
    </div>
  );
};