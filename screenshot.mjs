import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

mkdirSync('screenshots', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('https://simurg.life/mudroe_vospitanie', { waitUntil: 'networkidle', timeout: 90000 });
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(2000);
await page.screenshot({ path: 'screenshots/01-hero.png' });

const empathy = page.locator('text=Душа ребенка полна загадок').first();
await empathy.scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
await page.screenshot({ path: 'screenshots/02-empathy.png' });

const data = await page.evaluate(() => {
  const pick = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      text: el.textContent?.trim().slice(0, 120),
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      lineHeight: cs.lineHeight,
      color: cs.color,
      backgroundColor: cs.backgroundColor,
      fontFamily: cs.fontFamily,
      width: Math.round(r.width),
      height: Math.round(r.height),
      top: Math.round(r.top + window.scrollY),
      left: Math.round(r.left),
    };
  };

  const findByText = (fragment) => {
    const el = [...document.querySelectorAll('*')].find(
      (e) => e.childElementCount === 0 && e.textContent?.includes(fragment)
    )?.closest('[class*="tn-elem"], h1, h2, h3, p, button, a, div') || 
    [...document.querySelectorAll('*')].find((e) => e.textContent?.trim() === fragment);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      text: el.textContent?.trim().slice(0, 120),
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      lineHeight: cs.lineHeight,
      color: cs.color,
      backgroundColor: cs.backgroundColor,
      fontFamily: cs.fontFamily,
      width: Math.round(r.width),
      height: Math.round(r.height),
      top: Math.round(r.top + window.scrollY),
      left: Math.round(r.left),
    };
  };

  const hero = document.querySelector('#rec2253574451');
  const empathyRec = document.querySelector('#rec2253574471, #rec2253574481');

  return {
    scrollY: window.scrollY,
    heroBlock: hero ? {
      height: hero.offsetHeight,
      bg: getComputedStyle(hero.querySelector('.t396__artboard') || hero).backgroundColor,
    } : null,
    empathyBlock: empathyRec ? { id: empathyRec.id, height: empathyRec.offsetHeight } : null,
    title: findByText('Мудрое воспитание детей'),
    subtitle: findByText('Духовный взгляд'),
    cta: findByText('Присоединиться'),
    empathyTitle: findByText('Душа ребенка полна загадок'),
    bodySample: findByText('Они способны увидеть вселенную'),
  };
});

console.log(JSON.stringify(data, null, 2));
await browser.close();
