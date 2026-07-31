const cta = document.querySelector('[data-cta], .promo__btn');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function markImageLoaded(img) {
  img.classList.add('is-loaded');
}

for (const img of document.querySelectorAll('.js-img-load')) {
  if (img.complete && img.naturalWidth > 0) {
    markImageLoaded(img);
  } else {
    img.addEventListener('load', () => markImageLoaded(img), { once: true });
    img.addEventListener('error', () => markImageLoaded(img), { once: true });
  }
}

if (cta) {
  const defaultLabel = cta.textContent;

  cta.addEventListener('click', () => {
    cta.disabled = true;
    cta.textContent = 'Заявка отправляется…';

    window.setTimeout(() => {
      cta.textContent = 'Заявка принята';
    }, 900);
  });

  cta.addEventListener('mouseleave', () => {
    if (cta.disabled && cta.textContent === 'Заявка принята') {
      window.setTimeout(() => {
        cta.disabled = false;
        cta.textContent = defaultLabel;
      }, 1200);
    }
  });
}

const revealItems = document.querySelectorAll('.reveal');

if (revealItems.length > 0) {
  if (reducedMotion) {
    for (const item of revealItems) {
      item.classList.add('is-visible');
    }
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { root: null, threshold: 0.08, rootMargin: '0px 0px 0px 0px' },
    );

    for (const item of revealItems) {
      observer.observe(item);
    }
  }
}

const promoFrame = document.querySelector('.promo__frame');

if (promoFrame && !reducedMotion) {
  const promo = document.querySelector('.promo');

  if (promo) {
    promo.addEventListener('mousemove', (event) => {
      const rect = promo.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      promoFrame.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
    });

    promo.addEventListener('mouseleave', () => {
      promoFrame.style.transform = '';
    });
  }
}
