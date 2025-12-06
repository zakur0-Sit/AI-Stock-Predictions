import express from "express";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post("/generate-report", async (req, res) => {
    const {data} = req.body;

    if (!data) {
        return res.status(400).json({error: "Missing data field"});
    }

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4.1",
            messages: [
                {
                    role: "system",
                    content:
                        "You are a trading expert. Given stock info, write a short report (max 100 words) recommending buy, hold, or sell."
                },
                {
                    role: "user",
                    content: data
                }
            ]
        });

        const report = response.choices[0].message.content;

        res.json({report});
    } catch (error) {
        console.error("OpenAI API error:", error);
        res.status(500).json({error: "Error generating report"});
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
