import { useState } from "react"
import { ClaudeRecipe } from "./ClaudeRecipe.jsx"
import {IngredientsList } from "/components/IngredientsList.jsx"
import { getRecipeFromChef } from "/ai.js"

export function Main() {
    const [recipeShown, setRecipeShown] = useState(false)
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
    }

    async function getRecipe(){
        setRecipe(await getRecipeFromChef(ingredients))
        setRecipeShown(!recipeShown)
    }

    function newRecipe(){
        setRecipeShown(!recipeShown)
        setIngredients([])
        setRecipe("")
    }

    return (
        <main>
            {!recipeShown && <form action={addIngredient} className="ingredient-form" aria-label="Add an ingredient">
                <input
                    name="ingredient"
                    className="ingredient-input"
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add an ingredient"
                />
                <button className="ingredient-button" type="submit">Add ingredient</button>
            </form>}

            {!recipeShown && ingredients.length > 0 && (<IngredientsList ingredients = {ingredients} getRecipe={getRecipe} />)}

            { recipeShown && <ClaudeRecipe recipe={recipe} newRecipe={newRecipe} />}
        </main>
    )
}

