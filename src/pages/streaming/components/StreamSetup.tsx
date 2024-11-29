import React from 'react';
import { useForm } from 'react-hook-form';
import { useStreamingStore } from '../../../stores/streamingStore';

interface StreamSetupForm {
  title: string;
  description: string;
  platforms: string[];
  quality: string;
}

export const StreamSetup = () => {
  const { startStream, stopStream, isLive } = useStreamingStore();
  const { register, handleSubmit } = useForm<StreamSetupForm>();

  const onSubmit = (data: StreamSetupForm) => {
    if (!isLive) {
      startStream(data);
    } else {
      stopStream();
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Stream Title</label>
          <input
            type="text"
            {...register('title')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register('description')}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Platforms</label>
            <div className="mt-2 space-y-2">
              {['YouTube', 'Facebook', 'Instagram', 'TikTok'].map((platform) => (
                <label key={platform} className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('platforms')}
                    value={platform}
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2">{platform}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Quality</label>
            <select
              {...register('quality')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
              <option value="480p">480p</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className={`w-full px-4 py-2 rounded-md text-white ${
            isLive ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {isLive ? 'End Stream' : 'Start Stream'}
        </button>
      </form>
    </div>
  );
};