import axios from "axios";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (request: VercelRequest, response: VercelResponse) => {
  response.setHeader("Content-Type", "application/json");
  const speechKey = process.env.SPEECH_KEY;
  const speechRegion = process.env.SPEECH_REGION;

  if (speechKey === "" || speechRegion === "") {
    response
      .status(400)
      .send("Missing Microsoft Cognitive Services Speechs key or region");
  } else {
    const headers = {
      headers: {
        "Ocp-Apim-Subscription-Key": speechKey,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    try {
      const tokenResponse = await axios.post(
        `https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,
        null,
        headers
      );
      response
        .status(200)
        .send({ token: tokenResponse.data, region: speechRegion });
    } catch (err) {
      response
        .status(401)
        .send("There was an error authorizing your speech key.");
    }
  }
};
