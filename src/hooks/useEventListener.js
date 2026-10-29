import { useEffect } from "react";

export default function useEventListener(type, handler, target, options) {
  useEffect(() => {
    const element = target.current;

    element.addEventListener(type, handler, options);

    return () => {
      element.removeEventListener(type, handler, options);
    };
  }, [type, handler, target, options]);
}
