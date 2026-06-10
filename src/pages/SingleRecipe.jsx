import {useNavigate, useParams} from "react-router-dom";
import {useContext, useState} from "react";
import {RecipesContext} from "../context/recipesContext.jsx";
import {EditRecipeForm} from "../components/EditRecipeForm.jsx";

export function SingleRecipe() {
    const [isEditingForm, setIsEditingForm] = useState(false)

    const {id} = useParams()
    const {data} = useContext(RecipesContext)
    const navigate = useNavigate()

    const currentRecipe = data.find((recipe) => recipe.id === Number(id))

    function backToRecipes() {
        navigate("/recipes")
    }

    if(!currentRecipe) {
        return <h2>Recipe not found</h2>
    }

    return (
        <div className="page">
            <div className="details-buttons">
                <button onClick={backToRecipes}>
                    Back to Recipes
                </button>

                <button onClick={() => setIsEditingForm(true)}>
                    Edit Recipe
                </button>
            </div>

            <div className="single-recipe">
                <img className="details-img" src={currentRecipe.image} alt={currentRecipe.name} />

                <div className="recipe-info">
                    <h1>{currentRecipe.name}</h1>

                    {isEditingForm && <EditRecipeForm recipe={currentRecipe} setIsEditingForm={setIsEditingForm} />}

                    <p><b>Cuisine:</b> {currentRecipe.cuisine}</p>
                    <p><b>Difficulty:</b> {currentRecipe.difficulty}</p>
                    <p><b>Rating:</b> {currentRecipe.rating}</p>

                    <h3>Ingredients</h3>

                    <ul>
                        {
                            currentRecipe.ingredients && currentRecipe.ingredients.map((ingredient, index) => {
                                return <li key={index}>{ingredient}</li>
                            })
                        }
                    </ul>

                    <h3>Instructions</h3>

                    <ol>
                        {
                            currentRecipe.instructions && currentRecipe.instructions.map((instruction, index) => {
                                return <li key={index}>{instruction}</li>
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}