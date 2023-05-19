const elementThatWillCloseModal = document.querySelectorAll(
    ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
  ) || [];

function openModal(element: HTMLElement) {
  element.classList.add("is-active");
}

function closeModal(element: HTMLElement) {
  element.classList.remove("is-active");
  // Prevent multiple images to be displayed
  document.getElementById("currentPhoto")?.remove();
}

elementThatWillCloseModal.forEach((element) => {
  const target = element.closest(".modal") as HTMLElement;

  target.addEventListener("click", () => {
    closeModal(target);
  });
});

export { openModal, closeModal };
