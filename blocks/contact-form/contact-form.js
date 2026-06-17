export default function decorate(block) {
  block.innerHTML = `
    <form>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <button>Submit</button>
    </form>
  `;
}