// Choose random words
const randomGenerator = arr => {
    //console.log(arr);
    let indexOfWord = Math.floor(Math.random() * arr.length);
    return arr[indexOfWord];
}

const mixedMessage = () => { //main funtion to print out results
    let greeting = randomGenerator(possibleGreetings);
    let question1 = randomGenerator(things);
    let question2 = randomGenerator(things);
    let answer = randomGenerator(possibleAnswer);





    console.log(`Hello ${greeting}`);
    console.log(`What do you get when you cross a ${question1} with a ${question2}?`);
    console.log(`A big pile of ${answer}`)
}

// all of the nouns to use
let possibleGreetings = ["mate", "friend", "pal", "person", "human", "thing", "bucko", "kid", "you"];
let things = ["hot dog", "computer", "hand", "T-shirt", "finger", "pen", "table", "chair", "lamp", "window", "mouse", "cat", "dog"];
let possibleAnswer = ["fresh food", "crap", "fish and chips", "something gruesome", "poo", "gunk", "intertwined bodies" ];

