import React from 'react';

// Official Authentic WhatsApp Vector Icon
export function WhatsAppIcon({ size = 20, color = 'currentColor', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.37C16.32 14.24 15.1 13.64 14.88 13.56C14.65 13.48 14.49 13.44 14.32 13.69C14.16 13.94 13.69 14.49 13.54 14.65C13.4 14.82 13.25 14.84 13 14.71C12.75 14.59 11.95 14.32 11.01 13.48C10.27 12.83 9.78 12.02 9.63 11.77C9.49 11.52 9.61 11.39 9.74 11.26C9.85 11.15 9.99 10.97 10.12 10.82C10.24 10.67 10.29 10.57 10.37 10.4C10.45 10.24 10.41 10.09 10.35 9.97C10.29 9.84 9.79 8.62 9.59 8.12C9.39 7.64 9.18 7.7 9.03 7.69C8.89 7.69 8.72 7.68 8.56 7.68C8.39 7.68 8.12 7.74 7.89 7.99C7.66 8.24 7.02 8.84 7.02 10.06C7.02 11.28 7.91 12.45 8.03 12.62C8.16 12.78 9.78 15.28 12.26 16.35C12.85 16.61 13.31 16.76 13.67 16.88C14.26 17.07 14.8 17.04 15.23 16.98C15.71 16.91 16.71 16.37 16.92 15.79C17.13 15.21 17.13 14.71 17.06 14.61C17 14.51 16.82 14.49 16.57 14.37Z"
      />
    </svg>
  );
}

// Official Authentic Facebook Vector Icon
export function FacebookIcon({ size = 18, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

// Official Authentic Instagram Vector Icon
export function InstagramIcon({ size = 18, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

// Official Authentic YouTube Vector Icon
export function YouTubeIcon({ size = 18, color = 'currentColor', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}
