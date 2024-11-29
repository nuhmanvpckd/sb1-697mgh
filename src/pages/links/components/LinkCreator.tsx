import React from 'react';
import { useForm } from 'react-hook-form';
import { QRCodeSVG } from 'qrcode.react';
import { useLinkStore } from '../../../stores/linkStore';

interface LinkForm {
  originalUrl: string;
  customSlug?: string;
  title?: string;
  expiresAt?: string;
}

export const LinkCreator = () => {
  const { createLink } = useLinkStore();
  const { register, handleSubmit, watch } = useForm<LinkForm>();
  const originalUrl = watch('originalUrl');

  const onSubmit = (data: LinkForm) => {
    createLink(data);
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Original URL</label>
          <input
            type="url"
            {...register('originalUrl', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="https://example.com/very-long-url"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Custom Slug (Optional)</label>
            <input
              type="text"
              {...register('customSlug')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="my-custom-url"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Expiration (Optional)</label>
            <input
              type="datetime-local"
              {...register('expiresAt')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Title (Optional)</label>
          <input
            type="text"
            {...register('title')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="My Important Link"
          />
        </div>

        <div className="flex justify-between items-start">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Create Short Link
          </button>

          {originalUrl && (
            <div className="text-center">
              <QRCodeSVG value={originalUrl} size={100} />
              <p className="text-sm text-gray-500 mt-2">QR Code Preview</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};