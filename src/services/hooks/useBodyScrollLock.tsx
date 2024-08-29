import { useEffect, useState } from "react";

export const useBodyScrollLock = () => {
  const [isLocked, setIsLocked] = useState<boolean>(false);

  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
  }, [isLocked]);

  return [isLocked, setIsLocked] as const;
};
