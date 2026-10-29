import { useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

export default function Component5() {
  const target = useRef(null);
  useClickOutside(target, () => console.log("Clicked outside"));

  return (
    <div>
      <div ref={target}>Click outside me</div>
      <div>Maybe here?</div>
    </div>
  );
}
