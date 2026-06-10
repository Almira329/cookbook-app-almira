import {useContext, useState} from "react";
import {RecipesContext} from "../context/recipesContext.jsx";

export function AddRecipeForm({setIsAddingRecipe}) {
    const [name, setName] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [image, setImage] = useState("")
    const [rating, setRating] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")

    const {data, setData} = useContext(RecipesContext)

    function addNewRecipe() {
        if(
            name !== "" &&
            cuisine !== "" &&
            difficulty !== "" &&
            image !== "" &&
            rating !== "" &&
            ingredients !== "" &&
            instructions !== ""
        ) {
            const newRecipe = {
                id: data.length + 1,
                name: name,
                cuisine: cuisine,
                difficulty: difficulty,
                image: image,
                rating: Number(rating),
                ingredients: ingredients.split(","),
                instructions: instructions.split(",")
            }

            setData((prevState) => {
                return [...prevState, newRecipe]
            })

            setName("")
            setCuisine("")
            setDifficulty("")
            setImage("")
            setRating("")
            setIngredients("")
            setInstructions("")
            setIsAddingRecipe(false)
        }
    }

    return (
        <div className="form-box">
            <h2>Add Recipe</h2>

            <label>Recipe Name</label>
            <input
                type="text"
                placeholder="Recipe name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Cuisine</label>
            <input
                type="text"
                placeholder="Cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
            />

            <label>Difficulty</label>
            <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            >
                <option value="">Select difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>

            <label>Image URL</label>
            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <label>Rating</label>
            <input
                type="number"
                placeholder="Rating from 1 to 5"
                value={rating}
                min="1"
                max="5"
                step="0.1"
                onChange={(e) => setRating(e.target.value)}
            />

            <label>Ingredients</label>
            <textarea
                placeholder="Ingredients separated by comma"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />

            <label>Instructions</label>
            <textarea
                placeholder="Instructions separated by comma"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
            />

            <button onClick={addNewRecipe}>
                Add Recipe
            </button>
        </div>
    )
}