import React from 'react';
import { useEmailStore } from '../../../stores/emailStore';

export const SubscribersList = () => {
  const { subscribers } = useEmailStore();

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-600">{subscribers.length} subscribers</span>
        <button className="text-sm text-indigo-600 hover:text-indigo-900">
          Import List
        </button>
      </div>

      <div className="space-y-2">
        {subscribers.map((subscriber) => (
          <div key={subscriber.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">{subscriber.email}</p>
              <p className="text-sm text-gray-500">Joined {subscriber.joinedDate}</p>
            </div>
            <div className={`w-2 h-2 rounded-full ${
              subscriber.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
            }`} />
          </div>
        ))}
      </div>
    </div>
  );
};