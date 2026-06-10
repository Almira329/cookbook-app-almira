import {useContext, useState} from "react";
import {RecipesContext} from "../context/recipesContext.jsx";

export function AddRecipeForm({setIsAddingRecipe}) {
    const [name, setName] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [image, setImage] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [instructions, setInstructions] = useState("")

    const {data, setData} = useContext(RecipesContext)

    function addNewRecipe() {
        if(
            name !== "" &&
            cuisine !== "" &&
            difficulty !== "" &&
            image !== "" &&
            ingredients !== "" &&
            instructions !== ""
        ) {
            const newRecipe = {
                id: data.length + 1,
                name: name,
                cuisine: cuisine,
                difficulty: difficulty,
                image: image,
                rating: 4.5,
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
            setIngredients("")
            setInstructions("")
            setIsAddingRecipe(false)
        }
    }

    return (
        <div className="form-box">
            <h2>Add Recipe</h2>

            <input
                type="text"
                placeholder="Recipe name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
            />

            <input
                type="text"
                placeholder="Difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            />

            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            <textarea
                placeholder="Ingredients separated by comma"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />

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