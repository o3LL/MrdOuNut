# MrdOuNut

Bienvue sur le projet MrdOuNut ! J'ai pas mal utilisé ChatGPT pour générer le contenu de ce projet, voici les prompts que j'ai utilisé :
> ChatGPT Prompt : Generate a web app that require access to the phone camera, ask to take a photo and then do a fake analysis of this photo and show a result that would be half of the time "merde" and half of the time "nut"

Premier prototype par ChatGPT : 
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Camera Analysis App</title>
    <style>
      #preview {
        width: 100%;
        height: auto;
      }
    </style>
  </head>
  <body>
    <h1>Camera Analysis App</h1>
    <div>
      <video id="preview" autoplay></video>
    </div>
    <button onclick="takePhoto()">Take Photo</button>
    <p id="result"></p>

    <script>
      // Get access to the camera and display the video stream
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          var video = document.getElementById("preview");
          video.srcObject = stream;
          video.play();
        })
        .catch(function (error) {
          console.log("Unable to access the camera: " + error);
        });

      // Function to capture a photo from the video stream
      function takePhoto() {
        var video = document.getElementById("preview");
        var canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        var context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        var photoData = canvas.toDataURL("image/png");

        // Perform the fake analysis and display the result
        var result = document.getElementById("result");
        result.innerHTML = "Analyzing...";

        // Simulate analysis delay (2 seconds)
        setTimeout(function () {
          var randomNumber = Math.random();
          var analysisResult =
            randomNumber < 0.5 ? "merde" : "nut";
          result.innerHTML = "Analysis Result: " + analysisResult;
        }, 2000);
      }
    </script>
  </body>
</html>
```

Le reste je l'ai fait tout seul comme un grand promis les bougs aigris de Twitter.

Sauf le readme, j'avoue j'avais la flemme, j'ai **encore** utilisé ChatGPT pour le faire :
> ChatGPT Prompt : Fait un readme.md technique pour expliquer comment fonctionne le projet, j'utilise ParcelJS comme bundler

Ce projet est une application web qui utilise la caméra du téléphone pour capturer une photo et affiche un résultat d'analyse factice. Le résultat sera soit "merde" (50% de chance), soit "nut" (50% de chance).

## Fonctionnement

L'application est développée en utilisant les technologies suivantes :

- HTML : pour la structure de la page web.
- JavaScript (*ndla: TypeScript mais ça ChatGPT savait pas*): pour interagir avec l'API de la caméra et effectuer l'analyse factice.
- ParcelJS : un bundler pour gérer les dépendances et les fichiers de l'application.
- *ndla: ChatGPT savait pas non plus que j'utiliserais SCSS pour les styles*

L'application utilise l'API `getUserMedia` pour accéder à la caméra du téléphone et afficher le flux vidéo dans un élément `video` de la page web. Lorsque l'utilisateur clique sur le bouton "Prendre une photo", une capture d'écran est réalisée à partir du flux vidéo et transformée en image.

Ensuite, l'application effectue une analyse factice en utilisant une valeur aléatoire pour déterminer si le résultat sera "merde" ou "nut". Le résultat de l'analyse est ensuite affiché à l'écran.

## Configuration et exécution du projet

Pour exécuter le projet localement, suivez les étapes ci-dessous :

1. Assurez-vous d'avoir [Node.js](https://nodejs.org) installé sur votre machine.
2. Clonez ce dépôt de code sur votre machine.
3. Ouvrez une fenêtre de terminal et accédez au répertoire du projet.
4. Installez les dépendances en exécutant la commande suivante :
   ```bash
   npm install
   ```
5. Une fois l'installation terminée, exécutez la commande suivante pour démarrer l'application en mode développement :
   ```bash
   npm run dev
   ```
   Cette commande lancera ParcelJS qui surveillera les fichiers du projet et créera un serveur de développement accessible à l'adresse `http://localhost:1234`.
6. Ouvrez votre navigateur et accédez à `http://localhost:1234` pour utiliser l'application.

## Remarque

Ce projet a été développé en utilisant ChatGPT, un modèle de langage développé par OpenAI basé sur l'architecture GPT-3.5. ChatGPT est un modèle de langage pré-entraîné qui peut être utilisé pour générer du texte à partir d'une entrée utilisateur. Pour plus d'informations sur ChatGPT, consultez la [documentation officielle](https://beta.openai.com/docs/guides/chat).

Pour plus d'informations sur ParcelJS, consultez la [documentation officielle](https://parceljs.org/).

Enjoy!
