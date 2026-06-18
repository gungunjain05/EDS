export default function decorate(block) {
  const rows = [...block.children];

  const name = rows[0]?.textContent.trim();
  const role = rows[1]?.textContent.trim();
  const review = rows[2]?.textContent.trim();

  block.innerHTML = `
    <div class="testimonial-card">
      <p class="testimonial-review">"${review}"</p>
      <h3 class="testimonial-name">${name}</h3>
      <p class="testimonial-role">${role}</p>
    </div>
  `;
} 