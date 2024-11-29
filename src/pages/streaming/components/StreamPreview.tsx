import React from 'react';
import { useStreamingStore } from '../../../stores/streamingStore';

export const StreamPreview = () => {
  const { isLive } = useStreamingStore();

  return (
    <div className="mt-4">
      <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
        {isLive ? (
          <video className="w-full h-full rounded-lg" />
        ) : (
          <div className="text-white text-center">
            <p className="text-xl font-medium">Stream Preview</p>
            <p className="text-sm text-gray-400">Start streaming to see preview</p>
          </div>
        )}
      </div>
    </div>
  );
};