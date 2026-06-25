export default function decorate(block) {
    [...block.children].forEach((row) => {
        const cells = [...row.children];
        const titleCell = cells[0];
        const bodyCell = cells[1];

        if (titleCell) {
            const titleP = titleCell.querySelector('p');
            if (titleP) {
                const h3 = document.createElement('h3');
                h3.innerHTML = titleP.innerHTML;
                titleP.replaceWith(h3);
            }
            // merge title content into a single wrapper div per card
            while (titleCell.firstChild) {
                row.appendChild(titleCell.firstChild);
            }
            titleCell.remove();
        }

        if (bodyCell) {
            while (bodyCell.firstChild) {
                row.appendChild(bodyCell.firstChild);
            }
            bodyCell.remove();
        }
    });
}