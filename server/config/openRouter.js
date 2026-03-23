const openRouterUrl = "https://openrouter.ai/api/v1/chat/completions";
const model = "deepseek/deepseek-chat";

const generateResponse = async (prompt) => {
  const res = await fetch(openRouterUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      //   "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
      //   "X-OpenRouter-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { role: "system", content: "You must return ONLY valid raw JSON" },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
      // max_tokens: 12000,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error("openRouterError" + err);
  }
  const data = await res.json();
  return data.choices[0].message.content;
};
export default generateResponse;
