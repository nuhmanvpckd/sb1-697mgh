import React from 'react';
import { useForm } from 'react-hook-form';
import { useEmailStore } from '../../../stores/emailStore';

interface CampaignForm {
  name: string;
  subject: string;
  content: string;
  sendTime: string;
  targetAudience: string[];
}

export const CampaignCreator = () => {
  const { createCampaign } = useEmailStore();
  const { register, handleSubmit } = useForm<CampaignForm>();

  const onSubmit = (data: CampaignForm) => {
    createCampaign(data);
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Campaign Name</label>
          <input
            type="text"
            {...register('name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Black Friday Sale"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Subject Line</label>
          <input
            type="text"
            {...register('subject')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Don't miss our biggest sale of the year!"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Content</label>
          <textarea
            {...register('content')}
            rows={6}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Send Time</label>
            <input
              type="datetime-local"
              {...register('sendTime')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Target Audience</label>
            <select
              multiple
              {...register('targetAudience')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="all">All Subscribers</option>
              <option value="active">Active Users</option>
              <option value="inactive">Inactive Users</option>
              <option value="new">New Subscribers</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Create Campaign
        </button>
      </form>
    </div>
  );
};