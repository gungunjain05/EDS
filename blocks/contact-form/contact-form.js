export default function decorate(block) {
  block.innerHTML = `
    <div class="contact-form-container">
      <input type="text" placeholder="Name">
      <input type="email" placeholder="Email">
      <button>Submit</button>
    </div>
  `;
}