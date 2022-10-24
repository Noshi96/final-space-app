import { useState, createContext } from 'react'

import { getFavorites } from '../services/internal-api'

const FavoritesContext = createContext({
  reloadFavorites: () => {},
  favorites: []
})

export const FavoritesContextProvider = ({ children, favorites }) => {
  const [updatedFavoritesArray, setUpdatedFavoritesArray] = useState(favorites)

  const reloadFavorites = async () => {
    try {
      const { data } = await getFavorites()
      setUpdatedFavoritesArray(data)
    } catch (err) {
      console.error(err)
    }
  }

  const context = {
    reloadFavorites,
    favorites: updatedFavoritesArray
  }

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContext
