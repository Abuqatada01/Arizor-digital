// File: components/GlassButton.tsx
'use client';

import React from 'react';

interface GlassButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  variant?: 'light' | 'dark' | 'primary' | 'gradient';
}

export default function GlassButton({ 
  href, 
  onClick, 
  children, 
  className = '',
  style = {},
  size = 'md',
  fullWidth = false,
  variant = 'light'
}: GlassButtonProps) {
  
  const sizeClasses = {
    sm: 'px-6 h-[44px] text-[14px]',
    md: 'px-8 h-[56px] text-[18px]',
    lg: 'px-10 h-[64px] text-[20px]'
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const variantStyles = {
    light: {
      background: 'rgba(255, 255, 255, 0.12)',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      color: 'var(--color-black)',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.2)',
      hoverBackground: 'rgba(255, 255, 255, 0.22)',
      hoverBoxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(255, 255, 255, 0.3)'
    },
    dark: {
      background: 'rgba(255, 255, 255, 0.05)', // More transparent
      border: '1px solid rgba(255, 255, 255, 0.15)',
      color: 'var(--color-white)',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      hoverBackground: 'rgba(255, 255, 255, 0.12)',
      hoverBoxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
    },
    primary: {
      background: 'rgba(124, 58, 237, 0.15)',
      border: '1px solid rgba(124, 58, 237, 0.3)',
      color: '#7C3AED',
      boxShadow: '0 4px 24px rgba(124, 58, 237, 0.1), inset 0 1px 0 rgba(124, 58, 237, 0.2)',
      hoverBackground: 'rgba(124, 58, 237, 0.25)',
      hoverBoxShadow: '0 8px 32px rgba(124, 58, 237, 0.2), inset 0 1px 0 rgba(124, 58, 237, 0.3)'
    },
    gradient: {
      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(79, 70, 229, 0.15))',
      border: '1px solid rgba(124, 58, 237, 0.25)',
      color: '#7C3AED',
      boxShadow: '0 4px 24px rgba(124, 58, 237, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
      hoverBackground: 'linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(79, 70, 229, 0.25))',
      hoverBoxShadow: '0 8px 32px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
    }
  };

  const currentVariant = variantStyles[variant];

  const baseStyles = {
    background: currentVariant.background,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: currentVariant.border,
    color: currentVariant.color,
    boxShadow: currentVariant.boxShadow,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    ...style
  };

  const buttonContent = (
    <>
      {/* Glass reflection overlay */}
      <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <span className="absolute -inset-1 bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-12 blur-sm"></span>
      </span>
      
      {/* Liquid glass shimmer - top to bottom */}
      <span className="absolute inset-0 pointer-events-none">
        <span className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
      </span>
      
      {/* Liquid glass shimmer - diagonal sweep */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"></span>
      
      {/* Subtle glow pulse */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></span>
      
      {/* Inner highlight border */}
      <span className="absolute inset-[1px] rounded-[50px] pointer-events-none border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {/* Arrow icon for CTA buttons */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </>
  );

  const commonClassName = `capitalized tracking-wider inline-flex items-center justify-center font-bold rounded-[50px] relative overflow-hidden group ${sizeClasses[size]} ${widthClass} ${className}`;

  const hoverStyles = {
    onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      e.currentTarget.style.background = currentVariant.hoverBackground;
      e.currentTarget.style.boxShadow = currentVariant.hoverBoxShadow;
      e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)';
    },
    onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      e.currentTarget.style.background = currentVariant.background;
      e.currentTarget.style.boxShadow = currentVariant.boxShadow;
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
    }
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={commonClassName}
        style={baseStyles}
        {...hoverStyles}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={commonClassName}
      style={baseStyles}
      {...hoverStyles}
    >
      {buttonContent}
    </button>
  );
}