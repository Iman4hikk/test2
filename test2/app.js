let score = 0;
let num1, num2, correctAnswer;

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

function showNewQuestion() {
    num1 = getRandomNumber();
    num2 = getRandomNumber();
    correctAnswer = num1 * num2;

    document.getElementById("question").innerText = `Сколько будет ${num1} * ${num2}?`;
    document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("feedback").innerText = "Правильно!";
    } else {
        score--;
        document.getElementById("feedback").innerText = `Неправильно. Правильный ответ был ${correctAnswer}.`;
    }

    document.getElementById("score").innerText = score;
    document.getElementById("answer").value = "";
    showNewQuestion();
}


window.onload = showNewQuestion;
