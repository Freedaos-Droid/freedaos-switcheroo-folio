import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={`theme-toggle-switch ${theme === 'dark' ? 'dark' : ''}`}>
        <FontAwesomeIcon 
          icon={theme === 'light' ? faSun : faMoon}
          className={`transition-all duration-500 ${
            theme === 'light' 
              ? 'text-yellow-500 animate-glow' 
              : 'text-blue-300 animate-pulse'
          }`}
        />
      </div>
    </button>
  );
};