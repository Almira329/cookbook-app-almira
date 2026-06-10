import {createContext, useEffect, useState} from "react";
import {RECIPES_API} from "../api/constants.js";

export const RecipesContext = createContext(null)

export function RecipesContextProvider({children}) {
    const [data, setData] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch(RECIPES_API)
            .then((response) => response.json())
            .then((responseData) => setData(responseData.recipes))
    }, []);

    function addToFavorites(recipe) {
        const recipeExists = favorites.find((favorite) => favorite.id === recipe.id)

        if(!recipeExists) {
            setFavorites((prevState) => {
                return [...prevState, recipe]
            })
        }
    }

    function removeFromFavorites(id) {
        setFavorites((prevState) => {
            return prevState.filter((recipe) => recipe.id !== id)
        })
    }

    return (
        <RecipesContext.Provider value={{
            data,
            setData,
            favorites,
            setFavorites,
            addToFavorites,
            removeFromFavorites
        }}>
            {children}
        </RecipesContext.Provider>
    )
}