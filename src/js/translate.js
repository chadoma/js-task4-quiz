const path = require('path');
const process = require('process');
const dotenv = require('dotenv');
dotenv.config({path: '.env'});

const KEY = process.env.GOOGLE_APPLICATION_CREDENTIALS;

const text = 'Hello world';
const target = 'ja';

translateTextSample(text, target);

function translateTextSample(text, target) {
    // [START translate_translate_text]
    // Imports the Google Cloud client library
    const {Translate} = require('@google-cloud/translate').v2;

    // Creates a client
    const translate = new Translate();

    // let text = 'The text to translate, e.g. Hello, world!';
    // let target = 'The target language, e.g. ru';

    async function translateText() {
        // Translates the text into the target language. "text" can be a string for
        // translating a single piece of text, or an array of strings for translating
        // multiple texts.
        let [translations] = await translate.translate(text, target);
        translations = Array.isArray(translations) ? translations : [translations];
        console.log('Translations:');
        translations.forEach((translation, i) => {
            console.log(`${text[i]} => (${target}) ${translation}`);
        });
    }

    translateText();
    // [END translate_translate_text]
}
