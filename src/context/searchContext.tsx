
import React, { createContext, ReactNode, useContext, useState } from "react"

interface iSearchContext {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
    searchState: boolean,
    setSearchState: React.Dispatch<React.SetStateAction<boolean>> 
}

interface iSearchProps{
    children: React.ReactNode
}

export const SearchContext = createContext({} as iSearchContext)

const SearchProvider = ({children}:iSearchProps) => {
    const [search, setSearch] = useState<string>('')
    const [searchState, setSearchState] = useState<boolean>(false)
    return ( 
        <SearchContext.Provider value={{search, setSearch, searchState, setSearchState}}>
            {children}
        </SearchContext.Provider>
     );
}
 
export default SearchProvider;