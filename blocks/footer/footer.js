export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta
    ? new URL(footerMeta, window.location).pathname
    : '/footer';

  const fragment = await loadFragment(footerPath);

  block.textContent = '';

  const rows = [...fragment.querySelectorAll('table tr')];

  const wrapper = document.createElement('div');
  wrapper.classList.add('footer-grid');

  rows.forEach((row) => {
    const col = document.createElement('div');

    [...row.cells].forEach((cell) => {
      const item = document.createElement('div');
      item.textContent = cell.textContent;
      col.append(item);
    });

    wrapper.append(col);
  });

  block.append(wrapper);
}