function solve() {
    let inputParagraphElement = document.getElementById('input');
    let outputParagraphElement = document.getElementById('output');

    inputParagraphElement.textContent
        .split('.')
        .map(x => x.trim())
        .filter(sentence => sentence.length > 0)
        .reduce((paragraphsAcc, currentSentence, index) => {
            if (index % 3 === 0) {
                paragraphsAcc.push("");
            }
            paragraphsAcc[paragraphsAcc.length - 1] += currentSentence + ". ";
            return paragraphsAcc;
        }, [])
        .forEach(paragraph => {
            let paragraphElement = document.createElement('p');
            paragraphElement.textContent = paragraph;
            outputParagraphElement.appendChild(paragraphElement);
        })
}