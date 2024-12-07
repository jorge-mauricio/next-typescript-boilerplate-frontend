import { useEffect } from 'react';

type LayoutVariant = 'full-flex-height' | 'full-flex-height-data-attribute';

/**
 * Hook that applies layout configuration to parent DOM elements
 *
 * @param variant - The layout configuration variant to apply
 * @example
 * // In your layout component:
 * const LayoutComponent = () => {
 *   useLayoutParentConfig('full-flex-height');
 *   return <div>...</div>;
 * };
 */
export const useLayoutParentConfig = (variant: LayoutVariant) => {
  useEffect(() => {
    /**
     * Applies layout classes to DOM elements to ensure proper full-height flex layout
     * This is necessary because Next.js wraps the app in multiple elements that need
     * to participate in the flex layout chain
     *
     * Layout structure:
     * <html>               - Fills viewport height
     * └── <body>          - Minimum screen height, flex container
     *     └── <div#__next> - Next.js wrapper, grows to fill body
     */

    if (variant === 'full-flex-height') {
      // Add classes when component mounts
      document.documentElement.classList.add('h-full'); // html tag
      document.body.classList.add('min-h-screen', 'flex', 'flex-col');

      // Get the Next.js wrapper element
      const nextWrapper = document.getElementById('__next');
      if (nextWrapper) {
        nextWrapper.classList.add('flex', 'flex-col', 'flex-1');
      }

      // Remove classes when component unmounts
      return () => {
        document.documentElement.classList.remove('h-full');
        document.body.classList.remove('min-h-screen', 'flex', 'flex-col');

        if (nextWrapper) {
          nextWrapper.classList.remove('flex', 'flex-col', 'flex-1');
        }
      };
    }

    // Alternative approach to try to solve the initial glitch effect.
    if (variant === 'full-flex-height-data-attribute') {
      document.documentElement.dataset.layout = variant;
      document.body.dataset.layout = variant;

      const nextWrapper = document.getElementById('__next');
      if (nextWrapper) {
        nextWrapper.dataset.layout = variant;
      }

      return () => {
        document.documentElement.removeAttribute('data-layout');
        document.body.removeAttribute('data-layout');
        if (nextWrapper) {
          nextWrapper.removeAttribute('data-layout');
        }
      };
    }

    // linter requires a return value
    return undefined;
  }, [variant]);
};
