export default function decorate(block) {
  const rows = [...block.children];

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  for (let i = 0; i < rows.length; i += 2) {
    const label = rows[i]?.textContent.trim();
    const url = rows[i + 1]?.textContent.trim();

    if (label && url) {
      const li = document.createElement('li');

      li.innerHTML = `
        <a href="${url}">
          ${label}
        </a>
      `;

      ul.append(li);
    }
  }

  nav.append(ul);

  block.textContent = '';
  block.append(nav);
}