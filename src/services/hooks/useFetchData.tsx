import { useEffect, useState } from "react";

export function useFetchData(
  func: (arg?: string) => Promise<any>,
  arg?: string
) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    func(arg ? arg : "").then((res) => {
      if (res.items.items) {
        setItems(res.items.items);
      } else {
        setItems(res.items);
      }
      setIsLoading(false);
    });
  }, []);
  return { isLoading, items };
}
