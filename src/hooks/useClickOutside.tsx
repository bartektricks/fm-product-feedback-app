import { useEffect } from 'react';
import { useRef } from 'react';

type Callback = (e?: Event) => void;

export default function useClickOutside<T extends HTMLElement>(
  callback: Callback,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function handleClick(this: Window, ev: Event) {
      if (
        ev.target instanceof HTMLElement &&
        !ref.current?.contains(ev.target)
      ) {
        callback(ev);
      }
    }

    window.addEventListener('mousedown', handleClick);

    return () => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [ref, callback]);

  return ref;
}
