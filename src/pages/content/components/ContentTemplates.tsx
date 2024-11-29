import React from 'react';

const templates = [
  { id: 1, name: 'Social Media Post', type: 'instagram' },
  { id: 2, name: 'Facebook Ad', type: 'facebook' },
  { id: 3, name: 'Twitter Header', type: 'twitter' },
  { id: 4, name: 'YouTube Thumbnail', type: 'youtube' },
];

export const ContentTemplates = () => {
  return (
    <div className="mt-4 space-y-2">
      {templates.map((template) => (
        <button
          key={template.id}
          className="w-full p-3 text-left bg-gray-50 hover:bg-gray-100 rounded-md transition-colors"
        >
          <p className="font-medium text-gray-900">{template.name}</p>
          <p className="text-sm text-gray-500">Platform: {template.type}</p>
        </button>
      ))}
    </div>
  );
};