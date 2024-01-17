import React, { createContext, useMemo, useState } from "react"

const SearchModalContext = createContext()

const SearchModalProvider = ({ children }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState()

  const initialValue = useMemo(() => {
    return {
      isSearchModalOpen,
      openSearchModal: () => setIsSearchModalOpen(true),
      closeSearchModal: () => setIsSearchModalOpen(false),
    }
  }, [isSearchModalOpen])
  return (
    <SearchModalContext.Provider value={initialValue}>{children}</SearchModalContext.Provider>
  )
}

export { SearchModalProvider, SearchModalContext }
