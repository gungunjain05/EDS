export default function decorate(block) {
    block.innerHTML = `
    <div class="contact-form-wrapper">
      <h2>Contact Us</h2>

      <form class="contact-form">

        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
          >
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          >
        </div>

        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          >
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit">
          Send Message
        </button>

      </form>
    </div>
  `;
    const form = block.querySelector('.contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        console.log('Form Submitted');
    });
}