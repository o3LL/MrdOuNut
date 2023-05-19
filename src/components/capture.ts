import { openModal } from "./modal";
import analyseImage from "./ai";

let processIsRunning = true;

async function captureFromVideo(video: HTMLVideoElement, modal: HTMLDivElement) {
  if (!processIsRunning) return;
  openModal(modal);
  processIsRunning = false;

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const photoData = canvas.toDataURL("image/png");

  const photoContainer = document.getElementById(
    "imageContainer"
  ) as HTMLImageElement;

  const photo = document.createElement("img");
  photo.setAttribute("src", photoData);
  photo.setAttribute("id", "currentPhoto");
  photoContainer.appendChild(photo);

  // Perform the fake analysis and display the result
  const resultElement = document.getElementById("result") as HTMLDivElement;
  resultElement.innerHTML = "Analyse en cours... <span class='spin'>🤔</span>";

  photo.addEventListener("load", async function () {
    const data = await analyseImage(photo);

    resultElement.innerHTML = `Ca ressemble à ${data.result}, ça m'a pris ${
      data.duration / 1000
    }sec pour analyser ton image!`;

    processIsRunning = true;
  });
}

export {captureFromVideo, processIsRunning};
