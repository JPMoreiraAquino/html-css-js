const button = document.querySelector('#generate-activity-button');
const activityList = document.querySelector('#activity-list');

const activities = [
  'Caminhar na praia',
  'Assistir um filme',
  'Cozinhar um jantar gourmet',
  'Ler um livro',
  'Fazer ioga',
  'Jogar video game',
  'Passear com o cachorro',
  'Meditar',
  'Tomar um banho de sol',
  'Fazer compras'
];

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * activities.length);
  const activity = activities[randomIndex];
  
  const li = document.createElement('li');
  li.textContent = activity;
  activityList.appendChild(li);
});
