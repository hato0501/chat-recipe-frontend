import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const openaiApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { text } = req.body;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          prompt: `User: ${text}\nChatGPT: `,
          max_tokens: 500,
          n: 1,
          stop: null,
          temperature: 0.8,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${openaiApiKey}`,
          },
        }
      );

      const gptResponse = response.data.choices[0].text.trim();
      res.status(200).json({ message: gptResponse });
    } catch (error) {
      console.error("Error processing request:", error);
      res.status(500).json({ error: "Failed to process request." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
};

export default handler;