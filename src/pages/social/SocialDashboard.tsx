import React from 'react';
import { Card, Title } from '@tremor/react';
import { SocialAccountsList } from './components/SocialAccountsList';
import { PostScheduler } from './components/PostScheduler';
import { PostAnalytics } from './components/PostAnalytics';

export const SocialDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Social Media Management</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Create Post
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <Title>Scheduled Posts</Title>
          <PostScheduler />
        </Card>
        
        <Card>
          <Title>Connected Accounts</Title>
          <SocialAccountsList />
        </Card>
      </div>
      
      <Card>
        <Title>Post Performance</Title>
        <PostAnalytics />
      </Card>
    </div>
  );
};