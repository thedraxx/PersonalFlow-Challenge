import { createContext } from 'react';
import { Location, Result } from '../../interface/IgoogleMaps';

export interface SearchContextProps{
    search: Result[];
    address: string;
    // Methods
    handleSearch: () => void;
    setAddress: (address: string) => void;
}

export const SearchContext = createContext({} as SearchContextProps);