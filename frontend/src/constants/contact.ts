export const CONTACT_EMAIL = 'soniayushi2308@gmail.com';

/** Native handoff to the OS default mail app (needs a default handler on Windows). */
export const MAILTO_HREF = `mailto:${CONTACT_EMAIL}`;

/** Opens Gmail’s “Compose” in the browser—works even when mailto has no app configured. */
export const GMAIL_COMPOSE_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`;
