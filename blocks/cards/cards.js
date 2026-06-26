import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');

    while (row.firstElementChild) {
      li.append(row.firstElementChild);
    }

    [...li.children].forEach((cell) => {
      if (cell.querySelector('picture')) {
        cell.className = 'cards-card-image';
      } else {
        cell.className = 'cards-card-body';
      }
    });

    ul.append(li);
  });

  ul.querySelectorAll('picture img').forEach((img) => {
    const picture = createOptimizedPicture(
      img.src,
      img.alt,
      false,
      [{ width: '750' }]
    );

    img.closest('picture').replaceWith(picture);
  });

  block.replaceChildren(ul);
}