import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`
const client = new InferenceClient(import.meta.env.VITE_API_KEY);
export async function getRecipeFromChef(ingredientsArr) {
    
    const ingredientsString = ingredientsArr.join(", ")

    try{const chatCompletion = await client.chatCompletion({
        model: "deepseek-ai/DeepSeek-V4-Flash-0731:novita",
        messages: [
            {
                role:"system",
                content: SYSTEM_PROMPT,
            },
            {
                role: "user",
                content: `I have ${ingredientsString}. Please give me recipe you'd recommend I make!` 
            },
        ],
    });
    return (chatCompletion.choices[0].message.content);
    }catch(err){
    console.log(err)
    }
}