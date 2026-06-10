import {useContext} from "react";
import {RecipesContext} from "../context/recipesContext.jsx";
import {useNavigate} from "react-router-dom";

export function FavoritesPage() {
    const {favorites, removeFromFavorites} = useContext(RecipesContext)
    const navigate = useNavigate()

    function goToRecipe(id) {
        navigate("/recipes/" + id)
    }

    return (
        <div className="page">
            <h1>Favorite Recipes</h1>

            {
                favorites.length === 0 && (
                    <p>You do not have any favorite recipes yet.</p>
                )
            }

            <div className="recipes">
                {
                    favorites.map((recipe) => {
                        return (
                            <div className="recipe-card" key={recipe.id}>
                                <img src={recipe.image} alt={recipe.name} />

                                <h3>{recipe.name}</h3>

                                <p>Cuisine: {recipe.cuisine}</p>
                                <p>Difficulty: {recipe.difficulty}</p>
                                <p>Rating: {recipe.rating}</p>

                                <button onClick={() => goToRecipe(recipe.id)}>
                                    Go to Recipe
                                </button>

                                <button onClick={() => removeFromFavorites(recipe.id)}>
                                    Remove
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}