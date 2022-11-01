const SpeechRecognition = webkitSpeechRecognition;

const recFala = new SpeechRecognition();
const txtFala = document.getElementById("voiceOut");
const camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

function startVoice() {
    txtFala.innerHTML = "";
    recFala.start();
}

recFala.onresult = function (e) {
    console.log(e);

    const fala = e.results[0][0].transcript

    console.log(fala);
    txtFala.value = fala;

    // speak();
    // Webcam.attach(camera);

    if (fala === "tire minha selfie") {
        console.log("tirando selfie...")
        Webcam.attach(camera);
        txtFala.blur();
        speak();
        setTimeout(takeSelfie, 5000);
    }
}

function speak() {
    const synth = speechSynthesis;
    // const dadosVoz = txtFala.value;
    const dadosVoz = "Tirando sua selfie em 5 segundos";
    const utterThis = new SpeechSynthesisUtterance(dadosVoz);
    synth.speak(utterThis);
}

function takeSelfie() {
    Webcam.snap(function (dataURI) {
        const result = document.getElementById("result");
        result.innerHTML = "";
        // const ibagem =
        //     "<img id='ibagemSelfie' src='" +
        //     dataURI +
        //     "'>"
        // result.innerHTML = ibagem;
        const ibagem = document.createElement("img");
        ibagem.setAttribute("id", "selfie");
        ibagem.setAttribute("src", dataURI);
        result.appendChild(ibagem);
        console.log(result.children)
    });
    save();
}

function save() {
    const link = document.getElementById("link");
    const ibagem = document.getElementById("ibagemSelfie").src;
    link.href = ibagem;
    link.click()
}