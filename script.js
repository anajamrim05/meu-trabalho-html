// ======================
// Dados dos personagens
// ======================
const charactersData = {
  "Luke Skywalker": {
    name: "Luke Skywalker",
    planet: "Tatooine",
    species: "Humano",
    films: ["Episódios IV", "V", "VI", "VII", "VIII", "IX"],
    description: "Filho de Anakin Skywalker e Padmé Amidala, um dos últimos Jedi.",
    image: "images/luke.jpg"
  },
  "Leia Organa": {
    name: "Leia Organa",
    planet: "Alderaan",
    species: "Humana",
    films: ["Episódios IV", "V", "VI", "VII", "VIII", "IX"],
    description: "Irmã gêmea de Luke, líder da Aliança Rebelde.",
    image: "images/leia.jpg"
  },
  "Darth Vader": {
    name: "Darth Vader",
    planet: "Tatooine",
    species: "Humano",
    films: ["Episódios I", "II", "III", "IV", "V", "VI"],
    description: "Originalmente Anakin Skywalker, tornou-se um Sith Lord.",
    image: "images/darthvader.jpg"
  },
  "Obi-Wan Kenobi": {
    name: "Obi-Wan Kenobi",
    planet: "Stewjon",
    species: "Humano",
    films: ["Episódios I", "II", "III", "IV"],
    description: "Mestre Jedi que treinou Anakin e Luke Skywalker.",
    image: "images/obiwankenobi.jpg"
  },
  "Yoda": {
    name: "Yoda",
    planet: "Desconhecido",
    species: "Desconhecida",
    films: ["Episódios I", "II", "III", "V", "VI", "VIII"],
    description: "Mestre Jedi sábio e poderoso, líder do Conselho Jedi.",
    image: "images/yoda.jpg"
  },
  "Anakin Skywalker": {
    name: "Anakin Skywalker",
    planet: "Tatooine",
    species: "Humano",
    films: ["Episódios I", "II", "III"],
    description: "Jovem Jedi que sucumbe ao lado negro e vira Darth Vader.",
    image: "images/anakin.jpg"
  },
  "Han Solo": {
    name: "Han Solo",
    planet: "Corellia",
    species: "Humano",
    films: ["Episódios IV", "V", "VI", "VII"],
    description: "Contrabandista e herói da Aliança Rebelde.",
    image: "images/hansolo.jpg"
  },
  "Chewbacca": {
    name: "Chewbacca",
    planet: "Kashyyyk",
    species: "Wookiee",
    films: ["Episódios III", "IV", "V", "VI", "VII"],
    description: "Companheiro fiel de Han Solo e guerreiro Wookiee.",
    image: "images/chewbacca.jpg"
  },
  "Rey": {
    name: "Rey",
    planet: "Jakku",
    species: "Humana",
    films: ["Episódios VII", "VIII", "IX"],
    description: "Jedi que busca seu passado e enfrenta a Primeira Ordem.",
    image: "images/rey.jpg"
  },
  "Kylo Ren": {
    name: "Kylo Ren",
    planet: "Desconhecido",
    species: "Humano",
    films: ["Episódios VII", "VIII", "IX"],
    description: "Filho de Leia e Han, seduzido pelo lado negro.",
    image: "images/kyloren.jpg"
  },
  "Ahsoka Tano": {
    name: "Ahsoka Tano",
    planet: "Shili",
    species: "Togruta",
    films: ["The Clone Wars", "Rebels", "The Mandalorian"],
    description: "Aprendiz de Anakin que se torna uma guerreira independente.",
    image: "images/ahsoka.jpg"
  },
  "Mace Windu": {
    name: "Mace Windu",
    planet: "Haruun Kal",
    species: "Humano",
    films: ["Episódios I", "II", "III"],
    description: "Membro do Conselho Jedi, conhecido por sua sabre roxo.",
    image: "images/macewindu.jpg"
  },
  "Darth Maul": {
    name: "Darth Maul",
    planet: "Dathomir",
    species: "Zabrak",
    films: ["Episódio I", "The Clone Wars", "Rebels"],
    description: "Sith Lord com sabre duplo, inimigo de Obi-Wan Kenobi.",
    image: "images/darthmaul.jpg"
  },
  "Jyn Erso": {
    name: "Jyn Erso",
    planet: "Desconhecido",
    species: "Humana",
    films: ["Rogue One"],
    description: "Líder da missão para roubar os planos da Estrela da Morte.",
    image: "images/jynerso.jpg"
  },
  "Cassian Andor": {
    name: "Cassian Andor",
    planet: "Desconhecido",
    species: "Humano",
    films: ["Rogue One", "Andor (série)"],
    description: "Oficial rebelde dedicado à causa da Aliança.",
    image: "images/cassianandor.jpg"
  },
  "Bo-Katan Kryze": {
    name: "Bo-Katan Kryze",
    planet: "Kryze",
    species: "Togruta",
    films: ["The Clone Wars", "Rebels", "The Mandalorian"],
    description: "Líder Mandaloriana e guerreira habilidosa.",
    image: "images/bokatan.jpg"
  },
  "Din Djarin (Mandalorian)": {
    name: "Din Djarin",
    planet: "Desconhecido",
    species: "Humano",
    films: ["The Mandalorian"],
    description: "Caçador de recompensas Mandaloriano protagonista da série.",
    image: "images/mandalorian.jpg"
  },
  "Grand Admiral Thrawn": {
    name: "Grand Admiral Thrawn",
    planet: "Csilla",
    species: "Chiss",
    films: ["Rebels"],
    description: "Estratégista brilhante e líder imperial.",
    image: "images/thrawn.jpg"
  },
  "Palpatine (Darth Sidious)": {
    name: "Palpatine",
    planet: "Naboo",
    species: "Humano",
    films: ["Episódios I", "II", "III", "VI", "IX"],
    description: "Senador e Sith Lord que se torna Imperador do Império.",
    image: "images/palpatine.jpg"
  }
};


// ===================
// DOM + Busca dinâmica
// ===================
const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');
const errorDiv = document.getElementById('error');
const characterInfo = document.getElementById('characterInfo');

searchInput.addEventListener('input', () => {
  const val = searchInput.value.toLowerCase();
  suggestions.innerHTML = '';
  if (!val) return;

  Object.keys(charactersData).forEach(name => {
    if (name.toLowerCase().includes(val)) {
      const div = document.createElement('div');
      div.className = 'suggestion-item';
      div.textContent = name;
      div.addEventListener('click', () => {
        searchInput.value = name;
        suggestions.innerHTML = '';
        showCharacter(name);
      });
      suggestions.appendChild(div);
    }
  });
});

document.getElementById('searchButton').addEventListener('click', () => {
  const name = searchInput.value.trim();
  showCharacter(name);
});

function showCharacter(name) {
  const character = charactersData[name];
  if (!character) {
    errorDiv.textContent = 'Personagem não encontrado!';
    errorDiv.style.display = 'block';
    characterInfo.style.display = 'none';
    return;
  }
  errorDiv.style.display = 'none';
  characterInfo.style.display = 'block';

  document.getElementById('characterName').textContent = character.name;
  document.getElementById('characterPlanet').textContent = character.planet;
  document.getElementById('characterSpecies').textContent = character.species;
  document.getElementById('characterMovies').textContent = character.films.join(', ');
  document.getElementById('characterDescription').textContent = character.description;
  document.getElementById('characterImage').src = character.image;
}

// ==============
// Estrelas canvas
// ==============
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

const stars = [];
const starsCount = 200;

for (let i = 0; i < starsCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

// =======================
// Timeline de filmes
// =======================
const timelineData = [
  {
    title: "Episódio I – A Ameaça Fantasma",
    year: 1999,
    description: "Qui-Gon e Obi-Wan protegem Amidala e encontram Anakin.",
    image: "images/ep1.jpg"
  },
  {
    title: "Episódio II – Ataque dos Clones",
    year: 2002,
    description: "Obi-Wan investiga uma conspiração e Anakin se aproxima de Padmé.",
    image: "images/ep2.jpg"
  },
  {
    title: "Star Wars: The Clone Wars (Série)",
    year: 2008,
    description: "Série animada que aprofunda a Guerra dos Clones.",
    image: "images/clonewars.jpg"
  },
  {
    title: "Episódio III – A Vingança dos Sith",
    year: 2005,
    description: "Anakin vira Darth Vader e o Império surge.",
    image: "images/ep3.jpg"
  },
  {
    title: "Star Wars: The Bad Batch (Série)",
    year: 2021,
    description: "Clone Force 99 enfrenta o início do Império Galáctico.",
    image: "images/badbatch.jpg"
  },
  {
    title: "Obi-Wan Kenobi (Série)",
    year: 2022,
    description: "Obi-Wan em exílio tenta proteger Luke após a queda da Ordem Jedi.",
    image: "images/kenobi.jpg"
  },
  {
    title: "Star Wars Rebels (Série)",
    year: 2014,
    description: "Série animada que acompanha rebeldes contra o Império.",
    image: "images/rebels.jpg"
  },
  {
    title: "Andor (Série)",
    year: 2022,
    description: "A origem do espião Cassian Andor e o surgimento da Rebelião.",
    image: "images/andor.jpg"
  },
  {
    title: "Episódio IV – Uma Nova Esperança",
    year: 1977,
    description: "Luke inicia sua jornada e se junta à Rebelião.",
    image: "images/ep4.jpg"
  },
  {
    title: "Episódio V – O Império Contra-Ataca",
    year: 1980,
    description: "Luke treina com Yoda enquanto a Rebelião recua.",
    image: "images/ep5.jpg"
  },
  {
    title: "Episódio VI – O Retorno de Jedi",
    year: 1983,
    description: "Conflito final entre a Rebelião e o Império.",
    image: "images/ep6.jpg"
  },
  {
    title: "The Mandalorian (Série)",
    year: 2019,
    description: "Série live-action que segue um caçador de recompensas.",
    image: "images/mandalorian.jpg"
  },
  {
    title: "Ahsoka (Série)",
    year: 2023,
    description: "A ex-Jedi Ahsoka busca Thrawn e Ezra após os eventos de Rebels.",
    image: "images/ahsoka.jpg"
  },
  {
    title: "Star Wars: Resistance (Série)",
    year: 2018,
    description: "Série animada que se passa antes do Episódio VII.",
    image: "images/resistance.jpg"
  },
  {
    title: "Episódio VII – O Despertar da Força",
    year: 2015,
    description: "A Primeira Ordem ameaça e novos heróis surgem.",
    image: "images/ep7.jpg"
  },
  {
    title: "Episódio VIII – Os Últimos Jedi",
    year: 2017,
    description: "Rey busca Luke e enfrenta desafios com Kylo Ren.",
    image: "images/ep8.jpg"
  },
  {
    title: "Episódio IX – A Ascensão Skywalker",
    year: 2019,
    description: "O confronto final entre Resistência e Sith.",
    image: "images/ep9.jpg"
  },
  {
    title: "Star Wars: Visions (Série)",
    year: 2021,
    description: "Série antológica de curtas animados em estilos variados.",
    image: "images/visions.jpg"
  },
  {
    title: "Tales of the Jedi (Série)",
    year: 2022,
    description: "Série animada com histórias de Jedi como Dookan e Ahsoka.",
    image: "images/tales.jpg"
  }
];


const timelineContainer = document.querySelector('.timeline-items');

function createTimeline() {
  timelineContainer.innerHTML = '';

  // Ordena os filmes por ano
  timelineData.sort((a, b) => a.year - b.year);

  timelineData.forEach(film => {
    const card = document.createElement('div');
    card.className = 'timeline-item';

    const img = document.createElement('img');
    img.src = film.image;
    img.alt = film.title;

    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `
      <h3>${film.title}</h3>
      <p><strong>${film.year}</strong></p>
      <p>${film.description}</p>
    `;

    card.appendChild(img);
    card.appendChild(overlay);
    timelineContainer.appendChild(card);
  });
}

createTimeline();
