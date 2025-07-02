const artistas = [
  {
    nome: "2pac",
    tipo: "Album mais famoso: All Eyez on Me",
    imagem: "https://tse1.mm.bing.net/th/id/OIP.N-RSYK-jJs-SYhNqz7FVYwHaE5?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    nome: "21 Savage",
    tipo: "Album mais famoso: Savage Mode II",
    imagem: "https://images.sk-static.com/images/media/profile_images/artists/8801214/huge_avatar"
  },
  {
    nome: "BK",
    tipo: "Album mais famoso: Gigantes",
    imagem: "https://www.olharconceito.com.br/imgsite/noticias/171121905765ff2171d1f85_1711219057_3x2_md(1).jpg"
  },
  {
    nome: "Don Henley",
    tipo: "Album mais famoso: The End of the Innocence",
    imagem: "https://townsquare.media/site/295/files/2020/09/GettyImages-104322943.jpg"
  },
  {
    nome: "Chris Brown",
    tipo: "Album mais famoso: F.A.M.E.",
    imagem: "https://tse2.mm.bing.net/th/id/OIP.4pTeW6bwv_Ua8N6rFQVuIgHaEE?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    nome: "Drake",
    tipo: "Album mais famoso: Take Care",
    imagem: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9"
  },
  {
    nome: "Post Malone",
    tipo: "Album mais famoso: Beerbongs & Bentleys",
    imagem: "https://i.pinimg.com/236x/7f/81/32/7f813233d3d032ea5dcfd54fb67f856e.jpg"
  },
  {
    nome: "Taylor Swift",
    tipo: "Album mais famoso: 1989",
    imagem: "https://cdn-images.dzcdn.net/images/artist/d37ef92e54376529cc956a270827dd49/1900x1900-000000-80-0-0.jpg"
  }
];

const container = document.getElementById("cardContainer");

artistas.forEach(artista => {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-nome", artista.nome);


  card.innerHTML = `
    <img src="${artista.imagem}" alt="${artista.nome}">
    <h3>${artista.nome}</h3>
    <p>${artista.tipo}</p>
  `;

  container.appendChild(card);
});
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
  const filtro = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const nome = card.getAttribute('data-nome').toLowerCase();
    card.style.display = nome.includes(filtro) ? 'block' : 'none';
  });
});
