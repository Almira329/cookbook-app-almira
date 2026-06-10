import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {RecipesContext} from "../context/recipesContext.jsx";

export function RecipeCard({recipe}) {
    const {setData, addToFavorites} = useContext(RecipesContext)
    const navigate = useNavigate()

    function goToRecipe() {
        navigate("/recipes/" + recipe.id)
    }

    const onDelete = () => {
        setData((prevState) => {
            return prevState.filter((prevRecipe) => prevRecipe.id !== recipe.id)
        })
    }

    function onAddToFavorites() {
        addToFavorites(recipe)
    }

    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.name} />

            <h3>{recipe.name}</h3>

            <p>Cuisine: {recipe.cuisine}</p>
            <p>Difficulty: {recipe.difficulty}</p>
            <p>Rating: {recipe.rating}</p>

            <button onClick={goToRecipe}>
                Go to Recipe
            </button>

            <button onClick={onAddToFavorites}>
                Add to Favorites
            </button>

            <button onClick={onDelete}>
                Delete
            </button>
        </div>
    )
}