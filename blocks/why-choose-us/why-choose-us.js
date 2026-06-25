export default function decorate(block) {
    [...block.children].forEach((row) => {
        [...row.children].forEach((cell) => {
            const heading = cell.querySelector('p');
            if (heading && heading.textContent.trim().length < 40 && !cell.dataset.tagged) {
                cell.dataset.tagged = 'true';
            }
        });
    });
}