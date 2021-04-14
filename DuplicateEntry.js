const names = [
    'pitu',
    'ritu',
    'jitu',
    'situ',
    'mitu',
    'nitu',
    'situ',
    'litu',
    'litu',
    'bitu',
    'litu+ ',
];

const newNames = [];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const index = newNames.indexOf(name);

    if (index === -1) {
        newNames.push(name);
    }
}

// console.log(newNames);

const removeCharsDuplicate = () => {
    const sentence = 'Amr soner bangla ami tomay valo bashi chiro din';
    let newString = '';

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (newString.indexOf(char) === -1) {
            newString = newString.concat(char);
        }
    }
    console.log(newString);
};

removeCharsDuplicate();

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i < arr.length; i = i + 2) {
    const ele = arr[i];
    console.log(ele);
}
