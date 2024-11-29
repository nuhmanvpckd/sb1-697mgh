import { useCallback, useState } from 'react';
import { fabric } from 'fabric';

export const useImageEditor = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const initializeCanvas = useCallback((canvasElement: HTMLCanvasElement) => {
    const fabricCanvas = new fabric.Canvas(canvasElement, {
      width: canvasElement.width,
      height: canvasElement.height,
      backgroundColor: '#ffffff',
    });
    setCanvas(fabricCanvas);
  }, []);

  const addText = useCallback((text: string) => {
    if (!canvas) return;

    const fabricText = new fabric.Text(text, {
      left: 100,
      top: 100,
      fontSize: 20,
      fill: '#000000',
    });

    canvas.add(fabricText);
    canvas.renderAll();
  }, [canvas]);

  const addImage = useCallback((url: string) => {
    if (!canvas) return;

    fabric.Image.fromURL(url, (img) => {
      canvas.add(img);
      canvas.renderAll();
    });
  }, [canvas]);

  const applyFilter = useCallback((filterType: string) => {
    if (!canvas) return;

    const obj = canvas.getActiveObject();
    if (!obj) return;

    // Apply filter logic here
    canvas.renderAll();
  }, [canvas]);

  return {
    initializeCanvas,
    addText,
    addImage,
    applyFilter,
  };
};