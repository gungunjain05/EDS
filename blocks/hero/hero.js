export default function decorate(block) {
  const picture = block.querySelector('picture');
  const paras = [...block.querySelectorAll('p')].filter((p) => !p.closest('picture'));
  const heading = block.querySelector('h1, h2, h3');
  const links = [...block.querySelectorAll('a')];

  // First leftover paragraph (without a link and before heading) = badge/eyebrow
  let badge = null;
  if (paras.length && heading && paras[0].compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_FOLLOWING) {
    badge = paras[0];
  }

  const bg = document.createElement('div');
  bg.className = 'hero-bg';
  if (picture) bg.append(picture);

  const content = document.createElement('div');
  content.className = 'hero-content';

  if (badge) {
    badge.className = 'hero-badge';
    content.append(badge);
  }
  if (heading) content.append(heading);

  paras.forEach((p) => {
    if (p !== badge && !p.querySelector('a')) content.append(p);
  });

  if (links.length) {
    const cta = document.createElement('div');
    cta.className = 'hero-cta';
    links.forEach((a, i) => {
      a.className = i === 0 ? 'hero-btn hero-btn-primary' : 'hero-btn hero-btn-secondary';
      cta.append(a);
    });
    content.append(cta);
  }

  block.classList.add('hero');

  block.innerHTML = '';

  block.append(bg);

  block.append(content);
}