const cta = document.querySelector('[data-cta], .promo__btn');

if (cta) {
  cta.addEventListener('click', () => {
    cta.disabled = true;
    cta.textContent = 'Заявка отправляется…';

    window.setTimeout(() => {
      cta.textContent = 'Заявка принята';
    }, 900);
  });
}
