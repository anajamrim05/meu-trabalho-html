let charactersData = {};

fetch('characters.json')
  .then(response => response.json())
  .then(data => {
    charactersData = data;
  });

document.getElementById('searchInput').addEventListener('input', function () {
  const input = this.value.toLowerCase();
  const suggestions = document.getElementById('suggestions');
  suggestions.innerHTML = '';

  if (input.length === 0) return;

  Object.keys(charactersData).forEach(name => {
    if (name.toLowerCase().includes(input)) {
      const div = document.createElement('div');
      div.textContent = name;
      div.addEventListener('click', () => {
        document.getElementById('searchInput').value = name;
        suggestions.innerHTML = '';
        showCharacter(name);
      });
      suggestions.appendChild(div);
    }
  });
});

document.getElementById('searchButton').addEventListener('click', function () {
  const name = document.getElementById('searchInput').value.trim();
  showCharacter(name);
});

function showCharacter(name) {
  const character = charactersData[name];

  if (!character) {
    document.getElementById('error').textContent = 'Personagem não encontrado!';
    document.getElementById('error').style.display = 'block';
    document.getElementById('characterInfo').style.display = 'none';
    return;
  }

  document.getElementById('error').style.display = 'none';
  document.getElementById('characterInfo').style.display = 'block';

  document.getElementById('characterName').textContent = character.name;
  document.getElementById('characterPlanet').textContent = character.planet;
  document.getElementById('characterSpecies').textContent = character.species;
  document.getElementById('characterMovies').textContent = character.films.join(', ');
  document.getElementById('characterDescription').textContent = character.description;
  document.getElementById('characterImage').src = character.image;
}
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createStars(200);
});

resizeCanvas();
createStars(200);
animateStars();
