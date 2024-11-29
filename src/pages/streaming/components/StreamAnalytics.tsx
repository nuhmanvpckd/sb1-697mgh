import React from 'react';
import { AreaChart } from '@tremor/react';
import { useStreamingStore } from '../../../stores/streamingStore';

export const StreamAnalytics = () => {
  const { analytics } = useStreamingStore();

  return (
    <div className="mt-4 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Viewers</p>
          <p className="text-2xl font-bold">{analytics.viewers}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Duration</p>
          <p className="text-2xl font-bold">{analytics.duration}</p>
        </div>
      </div>

      <AreaChart
        className="h-48"
        data={analytics.viewerHistory}
        index="time"
        categories={["viewers"]}
        colors={["indigo"]}
      />
    </div>
  );
};