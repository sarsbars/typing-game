'use strict';

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


let wordList = [];


function getDate() {
    const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }
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

startGame() {
//start timer
//change 'start" to "Restart"

}

endGame() {
//when timer runs out this should run
//clear interval (global function)
// change "REstart" back to "Start"
}

resetGame() {
    let wordList = [...words];
    wordList.sort(() => Math.random() - 0.5);
//set time to - - -
// clear inputs
// hits = 0
//music resets
//shuffles wordList, using Andre's shuffle methods

}

// event listener to input, if all the letters are there then getNextWord();

getNextWord() {

}
