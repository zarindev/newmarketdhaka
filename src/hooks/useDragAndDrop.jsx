import { useState, useEffect } from 'react';

export const useDragAndDrop = () => {
  const [dragOver, setDragOver] = useState(false);
  const [fileDropError, setFileDropError] = useState('');

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const onDragLeave = () => setDragOver(false);

  return {
    dragOver,
    setDragOver,
    onDragOver,
    onDragLeave,
    fileDropError,
    setFileDropError,
  };
};
