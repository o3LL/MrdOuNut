import ColorThief from "colorthief";
const colorThief = new ColorThief();

async function analyseImage(
  image: HTMLImageElement
): Promise<{ result: string; duration: number }> {
  return new Promise((resolve, reject) => {
    // Generate a random number between 2 seconds and 8 seconds in milliseconds
    const randomTimer = 1 || Math.floor(Math.random() * 6000) + 2000;
    const dominantColor = colorThief.getColor(image);
    // Check if dominantColor (array of 3 numbers representing RGB) is somehow pink
    const isPink =
      dominantColor[0] > 170 && dominantColor[1] < 100 && dominantColor[2] > 90;

    console.log(
      `La couleur dominante c'est ${isPink ? "du rose" : "pas du rose"} %c    `,
      `background: rgb(${dominantColor.concat(",").slice(0, -1)});`
    );

    console.log(`rgb(${dominantColor.concat(",").slice(0, -1)})`);

    // Simulate analysis delay (2 seconds)
    setTimeout(() => {
      const randomNumber = Math.random();
      const analysisResult = isPink
        ? "... heu, bah c'est <strong>Kronomuzik</strong>"
        : randomNumber < 0.5
        ? "de la <strong>Merde</strong> 💩"
        : "du <strong>Nutella</strong> 🍫";
      resolve({
        result: analysisResult,
        duration: randomTimer,
      });
    }, randomTimer);
  });
}

export default analyseImage;
