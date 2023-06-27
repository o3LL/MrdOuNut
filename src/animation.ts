document.addEventListener("DOMContentLoaded", () => {
  const bezImg = document.getElementById("bezImg") as HTMLImageElement;
  let toggled = false;

  bezImg.addEventListener("click", () => {
    bezImg.style.transform = `translateY(${toggled ? '70' : '0'}%)`;
    toggled = !toggled;
  });
});
