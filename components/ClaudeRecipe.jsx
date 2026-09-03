import Markdown from "react-markdown"

export function ClaudeRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Claude Recomends:</h2>
            <Markdown>{props.recipe}</Markdown>
            <button onClick={props.newRecipe}>NEW RECIPE</button>
        </section>
        )
}