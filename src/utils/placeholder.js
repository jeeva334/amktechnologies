// Real, freely-licensed stock photos (served by Lorem Picsum, backed by
// Unsplash) used as stand-ins until the business supplies its own product
// and project photography. Each "seed" always returns the same image, so
// swapping one out later is just a matter of changing this call to a real
// file path (see README → "Replacing placeholder images").
export function stockImage(seed, w = 800, h = 600) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${w}/${h}`;
}

// Generates a clean inline SVG placeholder so the site never shows broken
// images before real product/project photography is dropped into /public/images.
export function placeholder(label, bg = '123B70', fg = 'FFFFFF', w = 800, h = 600) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="100%" height="100%" fill="#${bg}"/>
    <text x="50%" y="50%" fill="#${fg}" font-family="Inter, sans-serif" font-size="${Math.round(
      w / 18
    )}" font-weight="600" text-anchor="middle" dominant-baseline="middle" opacity="0.9">${label}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
