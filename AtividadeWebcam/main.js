const camera = document.getElementById("camera");
var cameraOn = false;

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

function showCam() {
    if (cameraOn) {
        camera.innerHTML = "";
        cameraOn = false;
    } else {
        Webcam.attach(camera);
        cameraOn = true;
    }
}