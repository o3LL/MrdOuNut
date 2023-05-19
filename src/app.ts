document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("preview") as HTMLVideoElement;

  navigator.mediaDevices
    .getUserMedia({
      audio: false,
      video: {
        facingMode: "environment",
      },
    })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function (error) {
      alert("Unable to access the camera: " + error);
    });

  const modal = document.getElementById("resultModal") as HTMLDivElement;
  const photo = document.getElementById("currentPhoto") as HTMLImageElement;

  function takePhoto() {
    console.log("Starting to take photo");
    modal.classList.add("is-active");

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const photoData = canvas.toDataURL("image/png");
    photo.setAttribute("src", photoData);

    // Perform the fake analysis and display the result
    const result = document.getElementById("result") as HTMLDivElement;
    result.innerHTML = "Analyse en cours...";

    // Generate a random number between 2secondes and 8secondes in milliseconds
    const randomTimer = Math.floor(Math.random() * 6000) + 2000;

    // Simulate analysis delay (2 seconds)
    setTimeout(function () {
      const randomNumber = Math.random();
      const analysisResult = randomNumber < 0.5 ? "Merde" : "Nutella";
      result.innerHTML = `Ca ressemble à ${randomNumber < 0.5 ? 'de la' : 'du' } <strong>${analysisResult}</strong>, ça m'a pris ${randomTimer/1000}sec pour analyser ton image!`;

      return null;
    }, randomTimer);
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });

  const button = document.getElementById("cameraBtn") as HTMLElement;
  button.addEventListener("click", takePhoto);
  });
