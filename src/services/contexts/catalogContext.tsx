import { createContext } from "react";

export const CatalogContext = createContext(null);

interface ICatalogContextProvider {
  children: React.ReactNode;
  currentSearchParams: {
    [N: string]: string;
  };
}

export function CatalogContextProvider({
  children,
  currentSearchParams,
}: ICatalogContextProvider) {
  const searchParams = new URLSearchParams(currentSearchParams);
  return (
    <CatalogContext.Provider value={searchParams}>
      {children}
    </CatalogContext.Provider>
  );
}
