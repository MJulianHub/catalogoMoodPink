import React, { createContext, useState, useContext, ReactNode } from 'react';

type Filters = {
  minPrice?: number | null;
  maxPrice?: number | null;
};

type FilterContextValue = {
  filters: Filters;
  setFilters: (f: Filters) => void;
};

const FilterContext = createContext<FilterContextValue | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>({ minPrice: null, maxPrice: null });
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error('useFilters must be used within FilterProvider');
  return ctx;
};

export default FilterContext;
