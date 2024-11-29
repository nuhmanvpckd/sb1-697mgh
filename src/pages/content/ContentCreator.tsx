import React from 'react';
import { Card, Title } from '@tremor/react';
import { ImageEditor } from './components/ImageEditor';
import { TextGenerator } from './components/TextGenerator';
import { ContentTemplates } from './components/ContentTemplates';

export const ContentCreator = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">AI Content Creator</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Save Project
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <Title>Canvas</Title>
          <ImageEditor />
        </Card>

        <div className="space-y-6">
          <Card>
            <Title>AI Text Generator</Title>
            <TextGenerator />
          </Card>

          <Card>
            <Title>Templates</Title>
            <ContentTemplates />
          </Card>
        </div>
      </div>
    </div>
  );
};