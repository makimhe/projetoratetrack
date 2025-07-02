// Lista de artistas com imagens customizadas
const artists = [
    { name: "Kill Bill", img: "killbill.jpg" },
    { name: "Can't Help Falling in Love", img: "elvis.jpg" },
    { name: "Sunflower", img: "miranha.jpg" },
    { name: "Butterfly Effect", img: "travis.jpg" }
  ];
  
  let currentArtist = "";
  let currentRating = 0;
  let username = ""; // Nome do usuário logado
  
  // Carrega os cards ao iniciar
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("artist-list");
    artists.forEach(artist => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${artist.img}" alt="${artist.name}">
        <h3>${artist.name}</h3>
        <button onclick="openRating('${artist.name}')">Avaliar</button>
      `;
      container.appendChild(card);
    });
  });
  
  // Abrir modal para avaliar
  function openRating(name) {
    currentArtist = name;
    currentRating = 0;
    document.getElementById("rating-artist-name").textContent = `Avaliar ${name}`;
    generateStars();
    document.getElementById("rating-modal").style.display = "flex";
  }
  
  // Gera estrelas
  function generateStars() {
    const starsContainer = document.getElementById("stars");
    starsContainer.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.innerHTML = "★";
      star.onclick = () => selectRating(i);
      starsContainer.appendChild(star);
    }
  }
  
  // Seleciona nota
  function selectRating(rating) {
    currentRating = rating;
    const stars = document.querySelectorAll("#stars .star");
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
      }
    });
  }
  
  // Salvar avaliação
  function submitRating() {
    if (currentRating >= 1 && currentRating <= 5) {
      let notes = JSON.parse(localStorage.getItem('ratings') || '{}');
      if (!notes[username]) notes[username] = {};
      notes[username][currentArtist] = currentRating;
      localStorage.setItem('ratings', JSON.stringify(notes));
      alert("Avaliação salva!");
      closeRating();
      loadProfile();
    } else {
      alert("Selecione uma nota!");
    }
  }
  
  // Carregar perfil
  function loadProfile() {
    const list = document.getElementById("profile-list");
    list.innerHTML = "";
    let notes = JSON.parse(localStorage.getItem('ratings') || '{}');
    if (notes[username]) {
      for (let artist in notes[username]) {
        const li = document.createElement("li");
        li.textContent = `${artist}: Nota ${notes[username][artist]}`;
        list.appendChild(li);
      }
    }
  }
  
  // Fechar modais
  function closeRating() {
    document.getElementById("rating-modal").style.display = "none";
  }
  
  function showProfile() {
    loadProfile();
    document.getElementById("profile-modal").style.display = "flex";
  }
  
  function closeProfile() {
    document.getElementById("profile-modal").style.display = "none";
  }
  