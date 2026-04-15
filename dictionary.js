// function to show sentence 
function showSentence() {
    const menu = document.getElementById("MenuForWord");
    const display = document.getElementById("BoxForSentence");
    if(menu.selectedIndex > 0) {
        const selectedOption = menu.options[menu.selectedIndex];
        display.value = selectedOption.dataset.sentence;
    } else {
        display.value = "";
    }
}
function speak(textToSay) {
    const message = new SpeechSynthesisUtterance(textToSay);
    message.pitch = 1.2;
    message.rate = 1.0;

    window.speechSynthesis.speak(message);
}

function speakWord() {
    const menu = document.getElementById("MenuForWord");
    if(menu.value) {
        speak(menu.value);
    }
}
function speakSentence() {
    const box = document.getElementById("BoxForSentence");
    if(box.value !== "") {
        speak(box.value);
    }
}
