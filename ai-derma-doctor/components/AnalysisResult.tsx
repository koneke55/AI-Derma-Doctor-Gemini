
import React from 'react';
import type { SkinAnalysis } from '../types';
import { CheckCircleIcon } from './IconComponents';

interface AnalysisResultProps {
  analysis: SkinAnalysis;
}

const ResultCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-brand-gray p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        {children}
    </div>
);


export const AnalysisResult: React.FC<AnalysisResultProps> = ({ analysis }) => {
  return (
    <div className="space-y-6 animate-fade-in">
        <ResultCard title="Identified Skin Type">
            <p className="text-2xl font-bold text-brand-blue">{analysis.skinType}</p>
        </ResultCard>

        <ResultCard title="AI Dermatologist's Analysis">
            <p className="text-brand-text-light">{analysis.analysis}</p>
        </ResultCard>

        <ResultCard title="Personalized Recommendations">
            <ul className="space-y-3">
            {analysis.advice.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-brand-text-light">{tip}</span>
                </li>
            ))}
            </ul>
        </ResultCard>

        <style>{`
            @keyframes fade-in {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fade-in 0.5s ease-out forwards;
            }
        `}</style>
    </div>
  );
};
