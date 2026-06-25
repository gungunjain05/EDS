export default function decorate(block) {
  const rows = [...block.children];
  if (rows.length < 2) return;

  const headingRow = rows[0];
  const bodyRow = rows[1];

  const headingCells = [...headingRow.children];
  const bodyCells = [...bodyRow.children];

  const cards = headingCells.map((headingCell, i) => {
    const bodyCell = bodyCells[i];
    const card = document.createElement('div');
    card.className = 'why-choose-us-card';

    const titleP = headingCell.querySelector('p');
    const h3 = document.createElement('h3');
    h3.innerHTML = titleP ? titleP.innerHTML : headingCell.innerHTML;
    card.appendChild(h3);

    if (bodyCell) {
      const bodyP = bodyCell.querySelector('p');
      const p = document.createElement('p');
      p.innerHTML = bodyP ? bodyP.innerHTML : bodyCell.innerHTML;
      card.appendChild(p);
    }

    return card;
  });

  // clear original rows and replace with a single wrapper containing all cards
  block.innerHTML = '';
  const wrapper = document.createElement('div');
  cards.forEach((card) => wrapper.appendChild(card));
  block.appendChild(wrapper);
}