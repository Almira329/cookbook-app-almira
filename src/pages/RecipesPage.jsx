import {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import {RecipesContext} from "../context/recipesContext.jsx";
import {RecipeCard} from "../components/RecipeCard.jsx";
import {AddRecipeForm} from "../components/AddRecipeForm.jsx";

export function RecipesPage() {
    const [isAddingRecipe, setIsAddingRecipe] = useState(false)
    const [search, setSearch] = useState("")

    const inputRef = useRef(null)

    const {data} = useContext(RecipesContext)

    useEffect(() => {
        inputRef.current.focus()
    }, []);

    const handleSearch = useCallback((e) => {
        setSearch(e.target.value)
    }, [])

    const filteredRecipes = useMemo(() => {
        return data.filter((recipe) => {
            return recipe.name.toLowerCase().includes(search.toLowerCase())
        })
    }, [data, search])

    return (
        <div className="page">
            <h1>Recipes!</h1>

            <button onClick={() => setIsAddingRecipe(true)}>
                Add a Recipe
            </button>

            <br />
            <br />

            <input
                ref={inputRef}
                type="text"
                placeholder="Search recipe..."
                value={search}
                onChange={handleSearch}
            />

            {isAddingRecipe && <AddRecipeForm setIsAddingRecipe={setIsAddingRecipe} />}

            <div className="recipes">
                {
                    filteredRecipes.length > 0 && filteredRecipes.map((recipe) => {
                        return <RecipeCard key={recipe.id} recipe={recipe} />
                    })
                }
            </div>
        </div>
    )
}