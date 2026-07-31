# Tilda handoff — Simurg тестовое (v2)

Источник: pixel-парсинг `simurg.life/mudroe_vospitanie` → блоки `rec2253574451`, `rec2253574471`.

## ЭКРАН 1 — Zero Block 1440×880

| Слой | top | left | size | стиль |
|------|-----|------|------|-------|
| Фон artboard | 0 | 0 | 1440×880 | `#FFFEFC` |
| Shape purple | 0 | 0 | 1440×948 | `#393B6F`, radius `0 0 45px 45px` |
| Ellipse_416.svg | −128 | −144 | 1012×auto | opacity 55% |
| Hero scene `0553195a.webp` | −280 | 520 | 1450×auto | opacity 96% |
| Mask_group.png | 726 | −256 | 943×auto | |
| Mask_group-1.png | 720 | 687 | 943×auto | |
| Logo `c77040ed.svg` | 33 | 36 | 75×98 | opacity 90% |
| Дата | 146 | 120 | — | 20px/600, `#FFFFFF` |
| H1 | 229 | 120 | 700×auto | **56px**/700, `#FFF2C8` (длинный заголовок ТЗ) |
| Lead | 520 | 123 | 560×auto | 20px/400, white |
| CTA | 640 | 120 | 400×78 | 22px/600, gradient `#EA9276→#F7C3B1`, text `#0F4345` |
| Fine print | 736 | 120 | 440×auto | 14px, white 65% |
| Ellipse decor | 812 | 0 | 1440×auto | SVG |

**Текст ТЗ:** без изменений.

## ЭКРАН 2 — Zero Block 1440×1280

| Слой | top | left | size | стиль |
|------|-----|------|------|-------|
| Фон | 0 | 0 | 1440×1280 | `#F5ECDC` + radial gradients (шторы) |
| Rose SVG | 72 | 698 | 44×46 | |
| H2 | 140 | 252 | 936×auto | 40px/600, `#314E7F`, center |
| P1 | 280 | 720 | 520×auto | 20px, `#464646`, center |
| P2 | 400 | 380 | 680×auto | 20px, center |
| P3 | 520 | 470 | 500×auto | 20px, center |
| P4 accent | 660 | 720 | 520×auto | 24px/600, `#0F4345`, center |
| Knight `42360e38.webp` | 740 | 0 | 760×auto | |
| Closing | 1120 | 252 | 936×auto | 28px/600, `#DC5B33`, center |

## Ассеты (public/assets/)

С Tilda CDN simurg.life — оригиналы блоков hero и story.

## Локально

`npm run dev` → http://localhost:5179/
