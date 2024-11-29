import React from 'react';
import { AreaChart } from '@tremor/react';
import { useLinkStore } from '../../../stores/linkStore';

export const LinkAnalytics = () => {
  const { analytics } = useLinkStore();

  return (
    <div className="mt-4 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Links</p>
          <p className="text-2xl font-bold">{analytics.totalLinks}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Clicks</p>
          <p className="text-2xl font-bold">{analytics.totalClicks}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Click History</h3>
        <AreaChart
          className="h-48"
          data={analytics.clickHistory}
          index="date"
          categories={["clicks"]}
          colors={["indigo"]}
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Top Performing Links</h3>
        <div className="space-y-2">
          {analytics.topLinks.map((link) => (
            <div key={link.id} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium truncate">{link.title || link.slug}</span>
                <span className="text-gray-600">{link.clicks} clicks</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};