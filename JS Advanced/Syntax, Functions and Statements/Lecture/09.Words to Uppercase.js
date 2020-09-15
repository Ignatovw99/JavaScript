function toUpper(words) {
    for (let i = 0; i < words.length; i++) { 
        words[i] = words[i].toUpperCase();
    }
    return words;
}

function solve(inputString) {
    let regex = /[\w]+/g;
    let words = inputString.match(regex);
    words = toUpper(words);
    console.log(words.join(', '));
}

solve('Dsadas,d s?ad adwa qd.as,dD. dwaqd! das')