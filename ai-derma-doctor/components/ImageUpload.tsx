
import React, { useCallback, useState } from 'react';
import { UploadCloudIcon } from './IconComponents';

interface ImageUploadProps {
  onImageChange: (file: File) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageChange(e.target.files[0]);
    }
  };
  
  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageChange(e.dataTransfer.files[0]);
    }
  }, [onImageChange]);

  return (
    <div 
      className={`relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-300 ${isDragging ? 'border-brand-blue bg-brand-blue-light' : 'border-gray-300 hover:border-brand-blue'}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/jpeg, image/png, image/webp"
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
        <UploadCloudIcon className={`w-12 h-12 ${isDragging ? 'text-brand-blue' : 'text-gray-400'}`} />
        <p className="text-gray-600">
          <span className="font-semibold text-brand-blue">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500">PNG, JPG, WEBP (Max 4MB)</p>
      </label>
    </div>
  );
};
