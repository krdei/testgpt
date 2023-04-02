import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";  
import cors from "cors";

const configuration = new Configuration({
    organization: "org-vvdVslwZcM8zbWFmWPGJSPWP",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    const { messages } = req.body;
  
    console.log(messages);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "This is a conversation with an AI named Lola. Lola won't mention OpenAI or the fact that she is an AI." },
        ...messages,
      ],
    });
  
    res.json({
      completion: completion.data.choices[0].message,
    });
  });
  

 app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
 });

