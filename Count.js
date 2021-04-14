// Word Counter Function single space
function wordCount() {
    let count = 0;
    const words = "Hi I am Sujon Hossain, I'm a Developer";

    for (let i = 0; i < words.length; i++) {
        const char = words[i];
        if (char === ' ') {
            count++;
        }
    }
    count++;

    return count;
}

// console.log(wordCount());

//Word Counter Function multiple space in texts;
const wordCountMultipleSpace = () => {
    let count = 0;
    const words =
        "      Hi I am Sujon Hossain,     I'm a Developer, I love Coding!!  Hi Rita        What's Up?   ";

    const wordsTrim = words.trim();
    const allChars = wordsTrim.split(' ');

    for (let i = 0; i < allChars.length; i++) {
        const word = allChars[i];
        if (word !== '') {
            count += 1;
        }
    }
    console.log(count);
};

// wordCountMultipleSpace();

//Count word and sentence in paragraph;

const sentenceCountWithWord = () => {
    let wordCount = 0;
    let sentenceCount = 0;

    const sentences = `The most common way to use the clear!
      property is after you have used a float property on an element.
       Have any question?
    When clearing floats,
    Your floated element will continue to float,
     but the cleared element will appear below it on the web page.`;

    const allContents = sentences.trim().split(' ');

    for (let i = 0; i < allContents.length; i++) {
        const word = allContents[i];

        if (word !== '') {
            wordCount++;
        }

        if (/[?|.|!|;|,]/.test(word)) {
            sentenceCount++;
        }
    }

    console.log('Words: ' + wordCount);
    console.log('Sentences: ' + sentenceCount);
};

// sentenceCountWithWord();

// found vowels in a sentence;
const foundVowels = (sentence) => {
    let vowels = 0;

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (
            char === 'a' ||
            char === 'e' ||
            char === 'i' ||
            char === 'o' ||
            char === 'u'
        ) {
            vowels++;
        }
    }
    return vowels;
};

console.log(foundVowels('My Name is Sujon Hossain '));
