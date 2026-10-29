import { useEffect } from "react";

export default function useClickOutside(ref, handler, eventType = "mousedown") {
  useEffect(() => {
    function listener(evt) {
      const element = ref.current;

      if (!element || element.contains(evt.target)) return;

      handler(evt);
    }

    document.addEventListener(eventType, listener);

    return () => {
      document.removeEventListener(eventType, listener);
    };
  }, [ref, handler, eventType]);
}
