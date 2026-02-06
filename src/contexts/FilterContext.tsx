import { createContext, useState, type ReactNode } from 'react';

export type Filters = {
  minPrice?: number | null;
  maxPrice?: number | null;
};

export type FilterContextValue = {
  filters: Filters;
  setFilters: (f: Filters) => void;
};

const FilterContext = createContext<FilterContextValue | null>(null);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>({ minPrice: null, maxPrice: null });
  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
