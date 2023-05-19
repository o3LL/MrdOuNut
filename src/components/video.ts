function streamCamera(video: HTMLVideoElement) {
  navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: {
        facingMode: "environment",
      },
    })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((error) => {
      alert("Unable to access the camera: " + error);
    });
}

export default streamCamera;
