export function addMenuHandlers(burgerButton, closeButton, mobileMenu) {
  burgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('opened');
  });

  closeButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('opened');
  });
}
