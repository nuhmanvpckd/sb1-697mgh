import React from 'react';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';

interface PostForm {
  content: string;
  platforms: string[];
  scheduledDate: string;
}

export const PostScheduler = () => {
  const { register, handleSubmit } = useForm<PostForm>();
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'video/*': ['.mp4', '.mov']
    }
  });

  const onSubmit = (data: PostForm) => {
    console.log('Scheduling post:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
      <div>
        <textarea
          {...register('content')}
          className="w-full p-3 border rounded-md"
          placeholder="What would you like to share?"
          rows={4}
        />
      </div>

      <div {...getRootProps()} className="border-2 border-dashed p-6 rounded-md text-center">
        <input {...getInputProps()} />
        <p>Drag & drop media files here, or click to select files</p>
      </div>

      <div className="flex space-x-4">
        <input
          type="datetime-local"
          {...register('scheduledDate')}
          className="border rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Schedule Post
        </button>
      </div>
    </form>
  );
};