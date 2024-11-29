import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { useImageEditor } from '../../../hooks/useImageEditor';

export const ImageEditor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { initializeCanvas, addText, addImage, applyFilter } = useImageEditor();

  useEffect(() => {
    if (canvasRef.current) {
      initializeCanvas(canvasRef.current);
    }
  }, [initializeCanvas]);

  return (
    <div className="mt-4 space-y-4">
      <div className="border rounded-lg p-4 bg-gray-50">
        <canvas ref={canvasRef} className="w-full" height="600" />
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => addText('Sample Text')}
          className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Add Text
        </button>
        <button
          onClick={() => applyFilter('brightness')}
          className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Adjust Brightness
        </button>
        <button
          onClick={() => applyFilter('contrast')}
          className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Adjust Contrast
        </button>
      </div>
    </div>
  );
};