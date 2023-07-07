import { useState } from "react";

const useQueryStatus = (
  initialBusyState = false,
  onError?: (e: any) => void
): [boolean, <T extends (...args: any[]) => any>(f: T) => T] => {
  const [isBusy, setBusy] = useState(initialBusyState);

  const busyWrapper = <T extends (...args: any[]) => any>(f: T): T =>
    (async (...args) => {
      setBusy(true);
      try {
        return await f(...args);
      } catch (e) {
        if (!!onError) {
          onError(e);
        }
      } finally {
        setBusy(false);
      }
    }) as T;

  return [isBusy, busyWrapper];
};

export default useQueryStatus