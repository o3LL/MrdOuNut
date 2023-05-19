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
    .catch((error: DOMException) => {
      if (error.name === "NotAllowedError") {
        writeError("Pour que ça fonctionne faut que tu acceptes l'acces à la caméra, sinon ça va pas marcher... Comment tu veux que je fasse une analyse d'image sans image ? NAN MAIS OOOOH !");
      } else if (error.name === "NotFoundError") {
        writeError("Pas de caméra détectée, t'as pas de caméra sur ton tel/ordi ou quoicoubeeeh ? BIG HONTE");
      } else if (error.name === "NotReadableError") {
        writeError("Impossible d'accéder à la caméra, t'as pas un autre onglet ou logiciel qui l'utilise ? Genre t pas sur chatroulette jspr mon reuf héhé.");
      } else if (error.name === "OverconstrainedError") {
        writeError("La caméra est pas dispo, t'as pas un autre onglet ou logiciel qui l'utilise ? Genre t pas sur chatroulette jspr mon reuf héhé.");
      } else if (error.name === "TypeError") {
        writeError("Alors la ya eu un problème, je sais pas trop quoi te dire, mais ça marche pas, c'est tout ce que je sais.");
      } else if (error.name === "AbortError") {
        writeError("Alors la ya eu un problème, je sais pas trop quoi te dire, mais ça marche pas, c'est tout ce que je sais.");
      } else if (error.name === "SecurityError") {
        writeError("Wiiiuu wiiuuu 🚨 Y'a un probleme de sécurité t'es sur Tor mec ou quoi lol, jsais pas comment t'aider là.");
      } else {
        writeError("Bah là je sais pas ce qu'il se passe mais ça fonctionne pas, pourtant j'avais tout prévu, j'ai fait des tests et tout, mais là ça marche pas, jsp quoi te dire.")
      }
    });
}

/**
 * P'tit handler d'erreur
 * @param message
 * @private
 */
function writeError(message: string) {
  const errorContainer = document.getElementById("error") as HTMLDivElement;
  errorContainer.innerHTML = message;
}

export default streamCamera;
