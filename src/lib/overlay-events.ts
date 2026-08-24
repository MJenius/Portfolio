import { useEffect, useState } from 'react';

const OVERLAY_EVENT = 'portfolio:overlay-visibility';

export function notifyOverlayOpen(): void {
  window.dispatchEvent(new CustomEvent(OVERLAY_EVENT, { detail: { open: true } }));
}

export function notifyOverlayClose(): void {
  window.dispatchEvent(new CustomEvent(OVERLAY_EVENT, { detail: { open: false } }));
}

export function useOverlayOpen(): boolean {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOverlayEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ open?: boolean }>).detail;
      setIsOpen(Boolean(detail?.open));
    };
    window.addEventListener(OVERLAY_EVENT, handleOverlayEvent);
    return () => window.removeEventListener(OVERLAY_EVENT, handleOverlayEvent);
  }, []);

  return isOpen;
}
