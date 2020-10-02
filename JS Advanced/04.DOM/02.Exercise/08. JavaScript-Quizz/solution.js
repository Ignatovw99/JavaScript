function findCorrectAnswersOrderedByQuestionOrder() {
    return  Array.from(
            document.getElementsByClassName('quiz-answer')
        )
        .filter(answerElement => {
            let currentAnswerDataIndexAttribute = answerElement.getAttribute('data-quizIndex');
            return currentAnswerDataIndexAttribute == 2
        })
        .reduce((correctAnswersAcc, current) => {
            correctAnswersAcc.push(current.getElementsByTagName('p')[0].innerHTML);
            return correctAnswersAcc;
        }, []);
}

function solve() {
    let rightAnswers = 0;

    let quizQuestionSectionElements = document.getElementsByTagName('section');
    let currentQuestion = 0;

    let correctAnswersByQuestionOrder = findCorrectAnswersOrderedByQuestionOrder();

    Array.from(document.getElementsByClassName('answer-text'))
        .forEach(a => a.addEventListener('click', answerClickHandler));

    function answerClickHandler(event) {
        let answerElement = event.target;
        let answerValue = answerElement.innerHTML;
        let correctAnswer = correctAnswersByQuestionOrder[currentQuestion];

        if (answerValue === correctAnswer) {
            rightAnswers++;
        }

        quizQuestionSectionElements[currentQuestion].style.display = 'none';
        currentQuestion++;
        
        if (currentQuestion === quizQuestionSectionElements.length) {
            let resultMessage;
            
            if (rightAnswers === quizQuestionSectionElements.length) {
                resultMessage = 'You are recognized as top JavaScript fan!';
            } else {
                resultMessage = `You have ${rightAnswers} right answers`;
            }
            document.getElementById('results').style.display = 'block';
            document.querySelector('.results-inner h1').innerHTML = resultMessage;
        } else {
            quizQuestionSectionElements[currentQuestion].style.display = 'block';
        }

    };
}
