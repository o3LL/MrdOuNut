async function analyseImage(image: HTMLCanvasElement): Promise<{ result: string; duration: number }> {
  return new Promise((resolve, reject) => {
    // Generate a random number between 2 seconds and 8 seconds in milliseconds
    const randomTimer = Math.floor(Math.random() * 6000) + 2000;

    // Simulate analysis delay (2 seconds)
    setTimeout(() => {
      const randomNumber = Math.random();
      const analysisResult = randomNumber < 0.5 ? "de la <strong>Merde</strong> 💩" : "du <strong>Nutella</strong> 🍫";
      resolve({
        result: analysisResult,
        duration: randomTimer
      });
    }, randomTimer);
  });
}

export default analyseImage;
