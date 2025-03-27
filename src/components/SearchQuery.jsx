import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [endpoint, setEndpoint] = useState("");

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, endpoint, setEndpoint }}
    >
      {children}
    </SearchContext.Provider>
  );
}
