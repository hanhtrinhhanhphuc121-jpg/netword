import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
  elevation?: 'flat' | 'raised' | 'glow';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  interactive = false,
  elevation = 'raised',
  className = '',
  ...props
}) => {
  const elevationStyles = {
    flat: 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900',
    raised:
      'border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-slate-900 shadow-sm shadow-slate-100 dark:shadow-none',
    glow:
      'border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-br from-white via-indigo-50/20 to-purple-50/20 dark:from-slate-900 dark:via-indigo-950/20 dark:to-purple-950/20 shadow-md shadow-indigo-100/40 dark:shadow-none',
  };

  const interactiveStyles = interactive
    ? 'hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md transition-all cursor-pointer active:scale-[0.99]'
    : '';

  return (
    <div
      className={`rounded-3xl p-5 sm:p-6 transition-colors ${elevationStyles[elevation]} ${interactiveStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
