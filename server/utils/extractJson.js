// const extractJson = async (text) => {
//   if (!text) return;
//   const cleaned = text
//     .replace(/```json/gi, "")
//     .replace(/```/g, "")
//     .trim();
//   const firstBrace = cleaned.indexOf("{");
//   const closedBrace = cleaned.lastIndexOf("}");
//   if (firstBrace == -1 || closedBrace == -1) return null;
//   const jsonString = cleaned.slice(firstBrace, closedBrace + 1);

//   try {
//     return JSON.parse(jsonString);
//   } catch (err) {
//     console.error("Failed to parse JSON:", err.message, "\nRaw text:", text);
//     return null;
//   }

//   // return JSON.parse(jsonString);
// };
// export default extractJson;

// const extractJson = async (text) => {
//   if (!text) return null;

//   const cleaned = text
//     .replace(/```json/gi, "")
//     .replace(/```/g, "")
//     .trim();
//   const firstBrace = cleaned.indexOf("{");
//   const closedBrace = cleaned.lastIndexOf("}");
//   if (firstBrace === -1 || closedBrace === -1) return null;

//   let jsonString = cleaned.slice(firstBrace, closedBrace + 1);

//   // Escape unescaped quotes inside HTML strings
//   jsonString = jsonString.replace(/\\?"/g, (match, offset, str) => {
//     // Only escape quotes inside code strings, naive approach
//     return match === '"' ? '\\"' : match;
//   });

//   try {
//     return JSON.parse(jsonString);
//   } catch (err) {
//     console.error("Failed to parse JSON:", err.message, "\nRaw text:", text);
//     return null;
//   }
// };
// export default extractJson;

// const extractJson = async (text) => {
//   if (!text) return null;

//   const cleaned = text
//     .replace(/```json/gi, "")
//     .replace(/```/g, "")
//     .trim();
//   const firstBrace = cleaned.indexOf("{");
//   const lastBrace = cleaned.lastIndexOf("}");
//   if (firstBrace === -1 || lastBrace === -1) return null;

//   let jsonString = cleaned.slice(firstBrace, lastBrace + 1);

//   // Escape inner quotes in "code" fields
//   jsonString = jsonString.replace(/"code"\s*:\s*"([\s\S]*?)"/g, (_, p1) => {
//     const escaped = p1
//     .replace(/```json/gi, "")
//     .replace(/```/g, "")
//     .trim();
//       // .replace(/\\/g, "\\\\") // escape backslashes
//       // .replace(/"/g, '\\"') // escape quotes
//       // .replace(/\n/g, "\\n"); // escape newlines
//     return `"code":"${escaped}"`;
//   });

//   try {
//     return JSON.parse(jsonString);
//   } catch (err) {
//     console.error("Failed to parse JSON:", err.message, "\nRaw text:", text);
//     return null;
//   }
// };

// export default extractJson;

// const extractJson = (text) => {
//   if (!text) return null;

//   try {
//     // Remove markdown
//     const cleaned = text
//       .replace(/```json/gi, "")
//       .replace(/```/g, "")
//       .trim();

//     // Direct parse attempt
//     return JSON.parse(cleaned);
//   } catch (err) {
//     try {
//       // Fallback: extract JSON block
//       const match = text.match(/\{[\s\S]*\}/);
//       if (!match) return null;

//       return JSON.parse(match[0]);
//     } catch (e) {
//       console.error("Final JSON parse failed:", e.message);
//       return null;
//     }
//   }
// };

// const extractJson = (text) => {
//   if (!text) return null;

//   try {
//     // Step 1: remove markdown wrappers like ```json ```
//     const cleaned = text
//       .replace(/```json/gi, "")
//       .replace(/```/g, "")
//       .trim();

//     // Step 2: try direct JSON parse
//     return JSON.parse(cleaned);
//   } catch (err) {
//     try {
//       // Step 3: fallback - extract JSON block
//       const match = text.match(/\{[\s\S]*\}/);
//       if (!match) return null;

//       return JSON.parse(match[0]);
//     } catch (e) {
//       console.error("JSON parse failed:", e.message, "\nRaw text:", text);
//       return null;
//     }
//   }
// };

// export default extractJson;

const extractJson = (text) => {
  if (!text) return null;

  try {
    // Remove markdown
    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    // Extract JSON safely
    const first = cleaned.indexOf("{");
    const last = cleaned.lastIndexOf("}");

    if (first === -1 || last === -1) return null;

    let jsonString = cleaned.slice(first, last + 1);

    // FIX: remove invalid control characters
    jsonString = jsonString.replace(/[\u0000-\u001F]+/g, "");

    return JSON.parse(jsonString);
  } catch (err) {
    console.error("❌ JSON Parse Failed:", err.message);
    return null;
  }
};

export default extractJson;
