export const CONTACT_EMAIL = 'soniayushi2308@gmail.com';

const EMAIL_SUBJECT = 'Portfolio Contact';
const EMAIL_BODY =
  'Hello Ayushi,\n\nI visited your portfolio and wanted to connect with you.\n\nRegards,';

/** Phone / tablet — opens native mail app (Android picker, Outlook, Gmail app, Apple Mail). */
export const MAILTO_COMPOSE_HREF = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

/** Laptop / desktop browser — opens Gmail Compose in a new tab. */
export const GMAIL_COMPOSE_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

/** True only for phone/tablet — Windows & desktop Mac/Linux always return false. */
export function isMobileOrTablet(): boolean {
  if (typeof navigator === 'undefined') return false;

  const ua = navigator.userAgent;

  // Windows / Linux desktop → Gmail in browser
  if (/Windows NT|Win64|X11; (Linux|Ubuntu|Fedora)|CrOS/i.test(ua)) {
    return false;
  }

  // Mac: treat as desktop unless it's an iPad
  if (/Macintosh|Mac OS X/i.test(ua)) {
    const isIpad =
      /iPad/i.test(ua) ||
      (navigator.maxTouchPoints > 1 &&
        Math.min(window.screen.width, window.screen.height) < 1024);
    return isIpad;
  }

  // Android, iPhone, other mobile UAs
  return /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(ua);
}

export function getEmailComposeConfig() {
  const useNativeMail = isMobileOrTablet();
  return {
    href: useNativeMail ? MAILTO_COMPOSE_HREF : GMAIL_COMPOSE_HREF,
    openInNewTab: !useNativeMail,
  };
}

/** Desktop: force Gmail tab. Mobile/tablet: let mailto open the mail app. */
export function handleEmailLinkClick(e: { preventDefault(): void }) {
  if (isMobileOrTablet()) return;
  e.preventDefault();
  window.open(GMAIL_COMPOSE_HREF, '_blank', 'noopener,noreferrer');
}
