import { useState } from "react";

const useBoolState = (
  initialState: boolean
): [boolean, () => void, () => void] => {
  const [state, setState] = useState(initialState);
  const setFalse = () => setState(false);
  const setTrue = () => setState(true);
  return [state, setTrue, setFalse];
};

export default useBoolState;
