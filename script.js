function checkAnswer(answer) {

    const result = document.getElementById("result");

    if (answer === 8) {
        result.textContent = "✅ إجابة صحيحة!";
    } else {
        result.textContent = "❌ حاول مرة أخرى";
    }

}