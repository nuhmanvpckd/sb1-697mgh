import React from 'react';
import { Card, Title } from '@tremor/react';
import { LinkCreator } from './components/LinkCreator';
import { LinksList } from './components/LinksList';
import { LinkAnalytics } from './components/LinkAnalytics';

export const LinkManager = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Link Shortener</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <Title>Create Short Link</Title>
            <LinkCreator />
          </Card>

          <Card>
            <Title>Your Links</Title>
            <LinksList />
          </Card>
        </div>

        <Card>
          <Title>Link Analytics</Title>
          <LinkAnalytics />
        </Card>
      </div>
    </div>
  );
};