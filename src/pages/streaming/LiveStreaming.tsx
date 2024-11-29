import React from 'react';
import { Card, Title } from '@tremor/react';
import { StreamSetup } from './components/StreamSetup';
import { StreamPreview } from './components/StreamPreview';
import { StreamChat } from './components/StreamChat';
import { StreamAnalytics } from './components/StreamAnalytics';
import { useStreamingStore } from '../../stores/streamingStore';

export const LiveStreaming = () => {
  const { isLive } = useStreamingStore();

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Live Streaming</h1>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-red-500 animate-pulse' : 'bg-gray-400'}`} />
          <span className="font-medium">{isLive ? 'Live' : 'Offline'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <Title>Stream Preview</Title>
            <StreamPreview />
          </Card>
          
          <Card>
            <Title>Stream Setup</Title>
            <StreamSetup />
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <Title>Live Chat</Title>
            <StreamChat />
          </Card>

          <Card>
            <Title>Analytics</Title>
            <StreamAnalytics />
          </Card>
        </div>
      </div>
    </div>
  );
};