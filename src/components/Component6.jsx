import { useRef } from "react";
import useEventListener from "../hooks/useEventListener";

export default function Component6() {
  const buttonRef = useRef(null);

  useEventListener("click", () => console.log("Button clicked"), buttonRef, {
    once: true,
  });

  return (
    <div>
      <button ref={buttonRef}>Click me</button>
    </div>
  );
}
