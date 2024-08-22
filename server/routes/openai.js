import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";

dotenv.config();
const router = express.Router();

router.post("/text", async (req, res) => {
  try {
    const { text, activeChatId } = req.body;

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: text },
      ],
    });

    const message = response.data.choices[0].message.content;

    await axios.post(
      `https://api.chatengine.io/chats/${activeChatId}/messages/`,
      { text: message },
      {
        headers: {
          "Project-ID": process.env.PROJECT_ID,
          "User-Name": process.env.BOT_USER_NAME,
          "User-Secret": process.env.BOT_USER_SECRET,
        },
      }
    );

    res.status(200).json({ text: message });
  } catch (error) {
    console.error(
      "Error in /text endpoint",
      error.response ? error.response.data.error : error.message
    );
    res.status(500).json({ error: error.message });
  }
});

router.post("/code", async (req, res) => {
  try {
    const { text, activeChatId } = req.body;

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an assistant coder who responds with only code and no explanations.",
        },
        { role: "user", content: text },
      ],
    });

    const message = response.data.choices[0].message.content;

    await axios.post(
      `https://api.chatengine.io/chats/${activeChatId}/messages/`,
      { text: message },
      {
        headers: {
          "Project-ID": process.env.PROJECT_ID,
          "User-Name": process.env.BOT_USER_NAME,
          "User-Secret": process.env.BOT_USER_SECRET,
        },
      }
    );

    res.status(200).json({ text: message });
  } catch (error) {
    console.error(
      "Error in /code endpoint",
      error.response ? error.response.data.error : error.message
    );
    res.status(500).json({ error: error.message });
  }
});

router.post("/assist", async (req, res) => {
  try {
    const { text } = req.body;

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that serves to only complete user's thoughts or sentences.",
        },
        { role: "user", content: `Finish my thought: ${text}` },
      ],
    });

    const message = response.data.choices[0].message.content;

    res.status(200).json({ text: message });
  } catch (error) {
    console.error("Error in /assist endpoint", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
