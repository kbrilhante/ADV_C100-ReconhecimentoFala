const txtFala = document.getElementById("txtOutput");

function textToSpeech() {
    const synth = speechSynthesis;
    const dadosVoz = txtFala.value;
    const utterThis = new SpeechSynthesisUtterance(dadosVoz);
    synth.speak(utterThis);
}
