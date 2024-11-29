import React from 'react';
import { AreaChart } from '@tremor/react';
import { useEmailStore } from '../../../stores/emailStore';

export const EmailAnalytics = () => {
  const { analytics } = useEmailStore();

  return (
    <div className="mt-4 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Open Rate</p>
          <p className="text-2xl font-bold">{analytics.openRate}%</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Click Rate</p>
          <p className="text-2xl font-bold">{analytics.clickRate}%</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Campaign Performance</h3>
        <AreaChart
          className="h-48"
          data={analytics.performanceHistory}
          index="date"
          categories={["opens", "clicks"]}
          colors={["indigo", "cyan"]}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Best Performing Campaigns</h3>
        <div className="space-y-2">
          {analytics.topCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium truncate">{campaign.name}</span>
                <span className="text-gray-600">{campaign.openRate}% opens</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};