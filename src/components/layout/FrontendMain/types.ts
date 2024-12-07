import { ReactNode } from 'react';

/**
 * FrontendMainProps
 * This interface defines the props that the Layout/FrontendMain component accepts.
 * Prefix cph stands for "Content Placeholder".
 * cphTitleMain: ReactNode | string
 *   The title of the page (in layout).
 * children: ReactNode
 *   The body of the page (children).
 * NOTE: Prototype shortcut - this would require further items for high customization.
 */
export interface FrontendMainProps {
  cphTitleMain: ReactNode | string;
  children: ReactNode;
}
