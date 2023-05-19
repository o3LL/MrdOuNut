import captureFromVideo from "./components/capture";
import streamCamera from "./components/video";

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("preview") as HTMLVideoElement;
  const modal = document.getElementById("resultModal") as HTMLDivElement;
  const button = document.getElementById("cameraBtn") as HTMLElement;

  streamCamera(video);

  button.addEventListener("click", () => captureFromVideo(video, modal));
});
