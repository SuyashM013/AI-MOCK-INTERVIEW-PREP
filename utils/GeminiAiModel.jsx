// See https://developers.google.com/apps-script/guides/properties
// for instructions on how to set the API key.
// const apiKey = PropertiesService.getScriptProperties().getProperty('NEXT_PUBLIC_API_KEY');

const {
  GoogleGenerativeAI,

} = require('@google/generative-ai')

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
})

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
  };

  // const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  // const options = {
  //   method: 'POST',
  //   contentType: 'application/json',
  //   payload: JSON.stringify(data)
  // };


  export const chatSession = model.startChat({
    generationConfig,
  })

  // const response = UrlFetchApp.fetch(url, options);
  // console.log(response.getContentText());
