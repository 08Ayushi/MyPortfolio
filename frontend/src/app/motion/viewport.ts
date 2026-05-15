/**
 * Scroll reveal tuned for phones / Safari: low visible threshold + bottom margin
 * so sections don’t stay stuck at opacity:0 when the observer fires late.
 */
export const portfolioInView = {
  once: true,
  amount: 0.08 as const,
  margin: '0px 0px -56px 0px',
};
