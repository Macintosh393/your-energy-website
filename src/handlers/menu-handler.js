export function addMenuHandlers(burgerButton, closeButton, mobileMenuBackdrop) {
  burgerButton.addEventListener('click', () => {
    mobileMenuBackdrop.classList.add('opened');
  });

  closeButton.addEventListener('click', () => {
    mobileMenuBackdrop.classList.remove('opened');
  });

  mobileMenuBackdrop.addEventListener('click', () => {
    mobileMenuBackdrop.classList.remove('opened');
  });
}
