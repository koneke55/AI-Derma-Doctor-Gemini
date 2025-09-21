
import React from 'react';

interface IconProps {
    className?: string;
}

export const StethoscopeIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5.4 2l-1-1.7a.4.4 0 0 0-.7 0l-1 1.7a.3.3 0 1 0 .6.4L3 1.6l1.8.7Z"/>
        <path d="M18 3.4a.3.3 0 1 0 .6-.4l-1-1.7a.4.4 0 0 0-.7 0l-1 1.7a.3.3 0 1 0 .6.4L18 2.6l1.8.8Z"/>
        <path d="M5 3v1.3l-1.3 1.3a.9.9 0 0 0 0 1.3l.9.9a.9.9 0 0 0 1.3 0l5-5a.9.9 0 0 0 0-1.3L9.6 2.4a.9.9 0 0 0-1.3 0L7 3.7V3a1 1 0 1 0-2 0Z"/>
        <path d="M19 3v1.3l1.3 1.3a.9.9 0 0 1 0 1.3l-.9.9a.9.9 0 0 1-1.3 0l-5-5a.9.9 0 0 1 0-1.3l1.3-1.3a.9.9 0 0 1 1.3 0L17 3.7V3a1 1 0 1 1 2 0Z"/>
        <path d="M12 10a7 7 0 0 0-7 7v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a7 7 0 0 0-7-7Z"/>
    </svg>
);

export const UploadCloudIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/>
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
);

export const InfoIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
);

export const AlertTriangleIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);
