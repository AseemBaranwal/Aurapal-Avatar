// azure-cognitiveservices-speech.js
require("dotenv").config();
const sdk = require("microsoft-cognitiveservices-speech-sdk");
const blendShapeNames = require("./blendshapeNames");
const _ = require("lodash");

let SSML = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xml:lang="en-US">
<voice name="en-IN-NeerjaNeural">
  <mstts:viseme type="FacialExpression"/>
  __TEXT__
</voice>
</speak>`;

const key = process.env.AZURE_KEY;
const region = process.env.AZURE_REGION;

/**
 * Node.js server code to convert text to speech
 * @returns stream
 * @param {*} key your resource key
 * @param {*} region your resource region
 * @param {*} text text to convert to audio/speech
 * @param {*} filename optional - best for long text - temp file for converted speech/audio
 */
const textToSpeech = async (text, voice) => {
  // convert callback function to promise
  return new Promise((resolve, reject) => {
    let ssml = SSML.replace("__TEXT__", text);

    const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
    speechConfig.speechSynthesisOutputFormat = 5; // mp3

    let audioConfig = null;

    // if (filename) {
    let randomString = Math.random().toString(36).slice(2, 7);
    let filename = `./public/speech-${randomString}.mp3`;
    audioConfig = sdk.AudioConfig.fromAudioFileOutput(filename);
    // }

    let blendData = [];
    let timeStep = 1 / 60;
    let timeStamp = 0;

    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

    // Subscribes to viseme received event
    synthesizer.visemeReceived = function (s, e) {
      // `Animation` is an xml string for SVG or a json string for blend shapes
      var animation = JSON.parse(e.animation);

      _.each(animation.BlendShapes, (blendArray) => {
        // console.log(blendArray);
        let blend = {};
        _.each(blendShapeNames, (shapeName, i) => {
          // // happy
          // if (i === 23 || i === 24) {
          //   // mouthLeft, mouthRight
          //   blend[shapeName] = blendArray[i] + 1.5;
          // } else if (i === 6 || i === 13) {
          //   // eyeWideLeft, eyeWideRight
          //   blend[shapeName] = 0.5;
          // } else if (i === 44 || i === 45) {
          //   // browOuterUpLeft, browOuterUpRight
          //   blend[shapeName] = 0.4;
          // } else if (i === 47 || i === 48) {
          //   // cheekSquintLeft, cheekSquintRight
          //   blend[shapeName] = 0.4;
          // } else if (i === 27 || i === 28) {
          //   // mouthDimpleLeft, mouthDimpleRight
          //   blend[shapeName] = 0.5;
          // } else if (i === 43) {
          //   // browInnerUp
          //   blend[shapeName] = 0.5;
          // } else {
          //   blend[shapeName] = blendArray[i];
          // }
          // // sad
          // if (i === 25 || i === 26) {
          //   // Mouth Frown Left & Right
          //   blend[shapeName] = blendArray[i] + 1.0;
          // } else if (i === 23 || i === 24) {
          //   // mouthLeft, mouthRight
          //   blend[shapeName] = blendArray[i] - 1.5;
          // } else if (i === 43) {
          //   // Brow Inner Up
          //   blend[shapeName] = 0.2;
          // } else if (i === 1 || i === 8) {
          //   // Eye Look Down Left & Right
          //   blend[shapeName] = 0.3;
          // } else if (i === 37 || i === 38) {
          //   // Mouth Lower Down Left & Right
          //   blend[shapeName] = 0.3;
          // } else if (i === 5 || i === 12) {
          //   // Eyelid Squint Left & Right
          //   blend[shapeName] = 0.4;
          // } else if (i === 47 || i === 48) {
          //   // Cheek Squint Left & Right
          //   blend[shapeName] = 0.15;
          // } else if (i === 41 || i === 42) {
          //   // Brow Down Left & Right
          //   blend[shapeName] = 0.3;
          // } else {
          //   blend[shapeName] = blendArray[i];
          // }
          // // disgust
          // if (i === 49 || i === 50) {
          //   // Nose Sneer Left & Right
          //   blend[shapeName] = 1.3;
          // } else if (i === 17) {
          //   // Mouth Upper Up Right
          //   blend[shapeName] = blendArray[i] - 0.3;
          // } else if (i === 5 || i === 12) {
          //   // Eye Squint Left & Right
          //   blend[shapeName] = 0.5;
          // } else if (i === 25 || i === 26) {
          //   // Mouth Frown Left & Right
          //   blend[shapeName] = blendArray[i] + 0.3;
          // } else {
          //   blend[shapeName] = blendArray[i];
          // }
          // // surprise
          // if (i === 6 || i === 13) {
          //   // Eye Wide Left & Right (originally 7 & 14, so index - 1)
          //   blend[shapeName] = 1.0; // Maximally open the eyes
          // } else if (i === 43 || i === 44) {
          //   // Brow Inner Up & Brow Outer Up Left & Right (originally 45 & 46, so index - 1)
          //   blend[shapeName] = 0.8; // Raise the eyebrows
          // } else if (i === 17) {
          //   // Jaw Open (originally 18, so index - 1)
          //   blend[shapeName] = blendArray[i] + 0.3; // Open the jaw for a surprised mouth expression, adjust as needed
          // } else {
          //   blend[shapeName] = blendArray[i]; // Keep other values as they are
          // }
          // // fear
          // if (i === 6 || i === 13) {
          //   // eyeWideLeft, eyeWideRight
          //   blend[shapeName] = 0.8;
          // } else if (i === 43 || i === 44) {
          //   // browOuterUpLeft, browOuterUpRight
          //   blend[shapeName] = 0.7;
          // } else if (i === 41 || i === 42) {
          //   // browDownLeft, browDownRight
          //   blend[shapeName] = 0.6;
          // } else if (i === 17) {
          //   // jawOpen
          //   blend[shapeName] = blendArray[i] - 0.2; // Slightly open mouth as part of the fear expression
          // } else {
          //   blend[shapeName] = blendArray[i]; // Keep other values as they are
          // }
        });

        blendData.push({
          time: timeStamp,
          blendshapes: blend,
        });
        timeStamp += timeStep;
      });
    };

    synthesizer.speakSsmlAsync(
      ssml,
      (result) => {
        synthesizer.close();
        resolve({ blendData, filename: `/speech-${randomString}.mp3` });
      },
      (error) => {
        synthesizer.close();
        reject(error);
      }
    );
  });
};

module.exports = textToSpeech;
