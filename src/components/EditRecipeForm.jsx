import {useContext, useState} from "react";
import {RecipesContext} from "../context/recipesContext.jsx";

export function EditRecipeForm({recipe, setIsEditingForm}) {
    const [name, setName] = useState(recipe.name)
    const [cuisine, setCuisine] = useState(recipe.cuisine)
    const [difficulty, setDifficulty] = useState(recipe.difficulty)
    const [image, setImage] = useState(recipe.image)
    const [ingredients, setIngredients] = useState(recipe.ingredients.join(","))
    const [instructions, setInstructions] = useState(recipe.instructions.join(","))

    const {setData} = useContext(RecipesContext)

    function editRecipe() {
        if(
            name !== "" &&
            cuisine !== "" &&
            difficulty !== "" &&
            image !== "" &&
            ingredients !== "" &&
            instructions !== ""
        ) {
            setData((prevState) => {
                return prevState.map((prevRecipe) => {
                    if(recipe.id === prevRecipe.id) {
                        return {
                            ...prevRecipe,
                            name: name,
                            cuisine: cuisine,
                            difficulty: difficulty,
                            image: image,
                            ingredients: ingredients.split(","),
                            instructions: instructions.split(",")
                        }
                    } else return prevRecipe
                })
            })

            setName("")
            setCuisine("")
            setDifficulty("")
            setImage("")
            setIngredients("")
            setInstructions("")
            setIsEditingForm(false)
        }
    }

    return (
        <div className="form-box">
            <h2>Edit Recipe</h2>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
            />

            <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            >
                <option value="">Select difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>

            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />

            <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
            />

            <button onClick={editRecipe}>
                Edit Recipe
            </button>
        </div>
    )
}