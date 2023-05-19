import { openModal } from "./modal";
import analyseImage from "./ai";

async function captureFromVideo(video: HTMLVideoElement, modal: HTMLDivElement, photo: HTMLImageElement) {
  openModal(modal);

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext("2d") as CanvasRenderingContext2D;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const photoData = canvas.toDataURL("image/png");
  photo.setAttribute("src", photoData);

  // Perform the fake analysis and display the result
  const resultElement = document.getElementById("result") as HTMLDivElement;
  resultElement.innerHTML = "Analyse en cours...";

  const data = await analyseImage(canvas);

  resultElement.innerHTML = `Ca ressemble à ${data.result}, ça m'a pris ${
    data.duration / 1000
  }sec pour analyser ton image!`;
}

export default captureFromVideo;
