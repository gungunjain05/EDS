export default async function decorate(block) {
  const response = await fetch('/team.json');
  const json = await response.json();

  block.innerHTML = '';

  json.data.forEach((member) => {
    const card = document.createElement('div');

    card.className = 'team-card';

    card.innerHTML = `
      <h3>${member.Name}</h3>
      <p>${member.Role}</p>
    `;

    block.append(card);
  });
}