import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface TextGeneratorForm {
  prompt: string;
  tone: string;
  length: string;
}

export const TextGenerator = () => {
  const { register, handleSubmit } = useForm<TextGeneratorForm>();
  const [generatedText, setGeneratedText] = useState('');

  const onSubmit = async (data: TextGeneratorForm) => {
    // Simulate AI text generation
    setGeneratedText('This is a sample AI-generated text based on your prompt...');
  };

  return (
    <div className="mt-4 space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Prompt</label>
          <textarea
            {...register('prompt')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            rows={3}
            placeholder="Enter your content prompt..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tone</label>
            <select
              {...register('tone')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="friendly">Friendly</option>
              <option value="formal">Formal</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Length</label>
            <select
              {...register('length')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Generate Text
        </button>
      </form>

      {generatedText && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h3 className="font-medium text-gray-900">Generated Text:</h3>
          <p className="mt-2 text-gray-600">{generatedText}</p>
        </div>
      )}
    </div>
  );
};