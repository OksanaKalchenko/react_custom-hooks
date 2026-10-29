import { useState } from "react";

export default function useStateWithReset(initialValue) {
  const [value, setValue] = useState(initialValue);

  const resetValue = () => {
    setValue(initialValue);
  };

  return [value, setValue, resetValue];
}
