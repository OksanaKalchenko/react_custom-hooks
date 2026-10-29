import { useEffect, useRef } from "react";

export default function usePrevious(state) {
  const ref = useRef();

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref.current;
}
