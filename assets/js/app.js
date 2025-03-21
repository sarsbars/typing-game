'use strict';

const countdownDisplay = document.querySelector('.countdown');
const userInput = document.querySelector('.user-input');
const currentWordDisplay = document.querySelector('.current-word');
const startButton = document.querySelector('.start-restart');
const hitCounterDisplay = document.querySelector('.hit-counter'); 
const catImage = document.querySelector('.cat-image');

let timeLeft = 100; 
let currentWord = '';
let hits = 0;
let countdownInterval; 
let gameStarted = false; 
let wordList = [];
const backgroundMusic = new Audio("./assets/media/background.mp3");


//Asked chatGPT for an array of cat words :) 
const catWords = [
    'cat', 'kitten', 'feline', 'purr', 'meow', 'whiskers', 'paws', 'claws', 'tail',
    'litter', 'scratch', 'groom', 'nap', 'sleep', 'play', 'hunt', 'mouse', 'bird',
    'toy', 'yarn', 'ball', 'feather', 'string', 'laser', 'treat', 'food', 'water',
    'milk', 'cream', 'salmon', 'tuna', 'kibble', 'bed', 'basket', 'carrier',
    'collar', 'bell', 'tag', 'rescue', 'shelter', 'adopt', 'stray', 'feral',
    'siamese', 'persian', 'maine coon', 'ragdoll', 'sphynx', 'bengal', 'tabby',
    'calico', 'tortoiseshell', 'tuxedo', 'alley', 'roof', 'fence', 'window', 'sunbeam',
    'lap', 'cuddle', 'snuggle', 'nuzzle', 'knead', 'biscuit', 'zoomies', 'hiss',
    'growl', 'mew', 'yowl', 'tomcat', 'queen', 'litterbox', 'vet', 'vaccine', 'chip',
    'fur', 'hairball', 'shed', 'grooming', 'brush', 'comb', 'ruby', 'charlie',
    'creamcheese', 'bagel', 'leash', 'harness', 'catnip', 'scratching post', 'perch',
    'tree', 'fence', 'pounce', 'stalk', 'ambush', 'curious', 'independent', 'aloof',
    'companion', 'pet', 'animal'
];

const words = [ 
    'dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 'weather',  
    'bottle', 'history', 'dream', 'character', 'money', 'absolute', 'machine',  
    'accurate', 'rainbow', 'bicycle', 'eclipse', 'trouble', 'developer',  
    'database', 'periodic', 'fortune', 'phone', 'future', 'pasta', 'microwave',  
    'jungle', 'wallet', 'canada', 'velvet', 'potion', 'treasure', 'beacon',  
    'whisper', 'breeze', 'coffee', 'beauty', 'agency', 'chocolate', 'eleven',  
    'alphabet', 'magician', 'triangle', 'baseball', 'beyond', 'banana', 'perfume', 
    'computer', 'butterfly', 'music', 'eagle', 'crown', 'chess', 'laptop',  
    'bedroom', 'enemy', 'button', 'door', 'bird', 'superman', 'library',  
    'bookstore', 'language', 'homework', 'beach', 'economy', 'awesome',  
    'science', 'mystery', 'famous', 'league', 'memory', 'leather', 'planet',  
    'software', 'update', 'yellow', 'keyboard', 'window', 'beans', 'truck',  
    'sheep', 'blossom', 'secret', 'wonder', 'destiny', 'quest', 'download',  
    'blue', 'actor', 'desk', 'watch', 'giraffe', 'brazil', 'audio', 'school',  
    'detective', 'hero', 'progress', 'winter', 'passion', 'rebel', 'amber',  
    'jacket', 'article', 'paradox', 'social', 'resort', 'mask', 'escape',  
    'promise', 'band', 'level', 'hope', 'moonlight', 'media', 'orchestra',  
    'volcano', 'guitar', 'raindrop', 'diamond', 'illusion', 'firefly', 'ocean',  
    'cascade', 'journey', 'laughter', 'horizon', 'marvel', 'compiler', 'twilight',  
    'harmony', 'symphony', 'solitude', 'essence', 'forest', 'melody',  
    'vision', 'silence', 'eternity', 'embrace', 'poet', 'ricochet', 'mountain',  
    'dance', 'sunrise', 'dragon', 'adventure', 'galaxy', 'echo', 'fantasy',  
    'radiant', 'mermaid', 'legend', 'monitor', 'plastic', 'pressure', 'bread',  
    'cake', 'caramel', 'juice', 'mouse', 'charger', 'pillow', 'candle', 'sunset',  
    'farmer', 'garden', 'whistle', 'blanket', 'picnic', 'sweater', 'lantern',  
    'theater', 'traffic', 'website', 'courage', 'shelter', 'painter', 'twinkle',  
    'squeeze', 'forever', 'stadium', 'gourmet', 'flower', 'bravery', 'playful',  
    'captain', 'vibrant', 'damage', 'outlet', 'general', 'batman', 'enigma',  
    'storm', 'universe', 'engine', 'mistake', 'hurricane' 
    ]; 

function getDate() {
    const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    };
}

class Score {
    #date;
    #hits;
    #percentage;
      
    constructor(hits, percentage) {
        this.#date = Date.now();
        this.#hits = hits;
        this.#percentage = percentage;
    }
      
    get hits() { return this.#hits; }
    get percentage() { return this.#percentage; }
    get date() { return getDate(this.#date); } 
}

function startCountdown() {
    if (countdownInterval) {
      clearInterval(countdownInterval);
    }
  
    timeLeft = 100; 
  
    countdownInterval = setInterval(() => {
      if (timeLeft >= 0) {
        countdownDisplay.textContent = timeLeft; 
        timeLeft--;
      } else {
        endGame();
        countdownDisplay.textContent = "Time's up!";
        clearInterval(countdownInterval);
      }
    }, 1000);
  }

function startGame() {
    gameStarted = true;
    startCountdown();
    backgroundMusic.play();

    wordList = [...words]; 
    wordList.sort(() => Math.random() - 0.5); 
    currentWord = wordList[wordList.length - 1];
    wordList.pop();

    currentWordDisplay.textContent = currentWord; 
    userInput.value = '';
    userInput.focus();
    userInput.placeholder = "Enter word here";
    
    hits = 0; 
    hitCounterDisplay.textContent = `${hits} Hits`;

    startButton.textContent = "Restart";
    updateCatImage();
}

function resetGame() {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = '- - -';
    userInput.value = '';
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;

    startGame();

}

function endGame() {
    gameStarted = false;
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;

    startButton.textContent = "Restart";
    updateCatImage();
}

function getNextWord() {
    if (wordList.length > 0) {
        currentWord = wordList[wordList.length - 1];
        currentWordDisplay.textContent = currentWord;
        wordList.pop();
        userInput.value = '';
    } else {
        endGame();
    }
}

startButton.addEventListener('click', () => {
    if (startButton.textContent === "Start") {
        startGame();
        startButton.textContent = "Restart";
        gameStarted = true;
    } else if (startButton.textContent === "Restart") {
        resetGame();
    }
  });


userInput.addEventListener('input', () => {
    const typedWord = userInput.value;
    let displayWord = '';
    let correct = true;

    for (let i = 0; i < currentWord.length; i++) {
        if (typedWord[i] === currentWord[i]) {
            displayWord += '<span class="correct">' + currentWord[i] + '</span>';
        } else {
            displayWord += currentWord[i];
            correct = false;
        }
    }
   
    currentWordDisplay.innerHTML = displayWord;

    if (typedWord === currentWord && correct) {
        hits++;
        hitCounterDisplay.textContent = `${hits} Hits`;
        getNextWord();
        updateCatImage()
    }
});

//The following from AI, how to prevent form submission if user hits enter
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
    }
});

//used W3 schools to get a switch to work 
function updateCatImage() {
    if (!gameStarted) {
      catImage.src = 'cat1.png';
      return;
    }
    switch (true) {
        case hits < 5:
            catImage.src = './assets/media/cat1.png';
            break;
        case hits < 15:
            catImage.src = './assets/media/cat2.png';
            break;
        case hits < 25:
            catImage.src = './assets/media/cat3.png';
            break;
        case hits < 35:
            catImage.src = './assets/media/cat4.png';
            break;
        case hits < 45:
            catImage.src = './assets/media/cat5.png';
            break;
        default:
            catImage.src = './assets/media/cat6.png';
    }
}