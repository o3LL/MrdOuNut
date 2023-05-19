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
      alert("Pour que ça fonctionne faut que tu acceptes la caméra");
    });
}

export default streamCamera;
