import { getTokenOrRefresh } from "@/lib/token";
import { ResultReason } from "microsoft-cognitiveservices-speech-sdk";
const speechsdk = require("microsoft-cognitiveservices-speech-sdk");

export async function sttFromMic() {
  const tokenObj = await getTokenOrRefresh();
  const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(
    tokenObj.authToken,
    tokenObj.region
  );
  speechConfig.speechRecognitionLanguage = "en-US";

  const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
  const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

  recognizer.recognizeOnceAsync((result) => {
    if (result.reason === ResultReason.RecognizedSpeech) {
      console.log(`RECOGNIZED: Text=${result.text}`);
    } else {
      console.log(
        "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly."
      );
    }
  });
}
