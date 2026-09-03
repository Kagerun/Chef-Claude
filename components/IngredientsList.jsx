export function IngredientsList(props){
    
    const ingredientList = props.ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })
    
    return (
        <section>
                    <h2 className="list-header">Ingredients on hand:</h2>
                    <ul className="ingredient-list" aria-label="List of ingredients">
                        {ingredientList}
                    </ul>

                    {ingredientList.length > 3 && (
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients</p>
                            </div>
                            <button onClick = {props.getRecipe} >Get a recipe</button>
                        </div>
                    )}
        </section>
    )
}