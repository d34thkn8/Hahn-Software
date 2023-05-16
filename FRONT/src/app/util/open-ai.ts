import {Configuration, OpenAIApi} from 'openai'
const configuration=new Configuration({
    apiKey:'sk-',
    organization:'org-'
});
delete configuration.baseOptions.headers['User-Agent'];
const openai=new OpenAIApi(configuration);

export async function talkWithChatGPT(prompt:string){
    try {
        const completion=await openai.createCompletion({
            model:"gpt-3.5-turbo-0301",
            prompt:[prompt],
            
        })
        return completion.data.choices[0].text;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to talk with Chat GPT");
    }
}