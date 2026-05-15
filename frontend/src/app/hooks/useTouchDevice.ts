import { useEffect, useState } from 'react';

export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none), (pointer: coarse)');

    const updateDeviceType = () => {
      setIsTouchDevice(
        mediaQuery.matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      );
    };

    updateDeviceType();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateDeviceType);
      return () => mediaQuery.removeEventListener('change', updateDeviceType);
    }

    mediaQuery.addListener(updateDeviceType);
    return () => mediaQuery.removeListener(updateDeviceType);
  }, []);

  return isTouchDevice;
}
