"use client";
import { getSearchStarted } from "@/utils/api/search";
import { createContext, useEffect, useState } from "react";
import { ICard } from "../types/types";
import { ez500 } from "@/utils/api/ez500";

interface ISearchContext {
  startedItems: ICard[];
  keys: string[];
  catalogs: { [key: string]: string | number, sort: number }[];
  contextLoading: boolean;
}

export const SearchContext = createContext<{} | null>(null);

interface ISearchContextProvider {
  children: React.ReactNode;
}

export function SearchContextProvider({ children, ref }: ISearchContextProvider) {
  const [startedItems, setStartedItems] = useState<ICard[]>([]);
  const [keys, setKeys] = useState<string[]>([]);
  const [contextLoading, setContextLoading] = useState(false);
  const [catalogs, setCatalogs] = useState<{ [key: string]: string | number, sort: number }[]>([]);
  useEffect(() => {
    setContextLoading(true)
    getSearchStarted()
      .then((res) => {
        setCatalogs(res.catalog);
        setStartedItems(res.items);
        setKeys(res.keys);
        setContextLoading(false)
      });
    // получить 500
    // ez500()
  }, []);
  return (
    <SearchContext.Provider
      value={{
        startedItems,
        keys,
        catalogs,
        contextLoading
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
