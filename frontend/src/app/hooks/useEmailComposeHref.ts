import { useMemo } from 'react';
import { getEmailComposeConfig } from '@/constants/contact';

/** Laptop/desktop → Gmail in browser. Phone/tablet → native mail app (mailto). */
export function useEmailComposeHref() {
  return useMemo(() => getEmailComposeConfig(), []);
}
