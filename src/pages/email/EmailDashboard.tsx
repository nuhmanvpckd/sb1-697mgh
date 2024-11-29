import React from 'react';
import { Card, Title } from '@tremor/react';
import { CampaignCreator } from './components/CampaignCreator';
import { CampaignsList } from './components/CampaignsList';
import { EmailAnalytics } from './components/EmailAnalytics';
import { SubscribersList } from './components/SubscribersList';

export const EmailDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Email Marketing</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <Title>Create Campaign</Title>
            <CampaignCreator />
          </Card>

          <Card>
            <Title>Active Campaigns</Title>
            <CampaignsList />
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <Title>Campaign Analytics</Title>
            <EmailAnalytics />
          </Card>

          <Card>
            <Title>Subscribers</Title>
            <SubscribersList />
          </Card>
        </div>
      </div>
    </div>
  );
};