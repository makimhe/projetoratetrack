document.addEventListener('DOMContentLoaded', function() {
    // Elementos da barra de pesquisa
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button');
    const albums = document.querySelectorAll('.conteudo div');
    
    // Função para filtrar álbuns
    function performSearch() {
        const searchTerm = searchBar.value.toLowerCase().trim();
        
        albums.forEach(album => {
            const title = album.querySelector('h3').textContent.toLowerCase();
            const artist = album.querySelector('p').textContent.toLowerCase();
            
            // Mostra ou esconde com base na pesquisa
            if (title.includes(searchTerm) || artist.includes(searchTerm)) {
                album.style.display = 'block';
            } else {
                album.style.display = 'none';
            }
        });
    }
    
    // Event listeners
    searchButton.addEventListener('click', performSearch);
    searchBar.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});