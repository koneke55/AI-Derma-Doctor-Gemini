
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUpload } from './components/ImageUpload';
import { AnalysisResult } from './components/AnalysisResult';
import { Spinner } from './components/Spinner';
import { analyzeSkinImage } from './services/geminiService';
import type { SkinAnalysis } from './types';
import { InfoIcon, AlertTriangleIcon } from './components/IconComponents';

const App: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<SkinAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (file: File | null) => {
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit
        setError('File is too large. Please upload an image under 4MB.');
        return;
      }
      setError(null);
      setImageFile(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setAnalysis(null);
    }
  };

  const handleAnalyzeClick = useCallback(async () => {
    if (!imageFile) {
      setError('Please upload an image first.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setAnalysis(null);

    try {
      const result = await analyzeSkinImage(imageFile);
      setAnalysis(result);
    } catch (err) {
      console.error(err);
      setError('An error occurred during analysis. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [imageFile]);
  
  const handleReset = () => {
    setImageFile(null);
    setImagePreview(null);
    setAnalysis(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="bg-brand-gray min-h-screen font-sans antialiased text-brand-text">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Get Your Personal Skin Analysis</h2>
            <p className="text-brand-text-light mb-6">Upload a clear, well-lit photo of your skin to receive an AI-powered analysis and personalized advice.</p>
            
            {!imagePreview && (
                 <div className="bg-brand-blue-light border border-brand-blue/50 text-brand-blue px-4 py-3 rounded-lg relative mb-6 flex items-start" role="alert">
                    <InfoIcon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                        <strong className="font-bold">Privacy Note:</strong>
                        <span className="block sm:inline ml-1">Your images are processed for analysis and are not stored.</span>
                    </div>
                </div>
            )}

            {imagePreview ? (
              <div className="mb-6 text-center">
                <img src={imagePreview} alt="Skin preview" className="max-h-80 w-auto inline-block rounded-lg shadow-md" />
              </div>
            ) : (
              <ImageUpload onImageChange={handleImageChange} />
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAnalyzeClick}
                disabled={!imageFile || isLoading}
                className="w-full sm:w-auto flex-grow justify-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isLoading ? <Spinner /> : 'Analyze My Skin'}
              </button>
              {imageFile && (
                <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-all duration-300"
              >
                Start Over
              </button>
              )}
            </div>

            {error && (
              <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center" role="alert">
                <AlertTriangleIcon className="w-5 h-5 mr-3" />
                <span className="font-medium">{error}</span>
              </div>
            )}
            
            {analysis && !isLoading && (
              <div className="mt-8">
                <AnalysisResult analysis={analysis} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
