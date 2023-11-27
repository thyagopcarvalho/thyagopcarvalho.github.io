console.log("Script carregado");
function carregarConteudo(secao) {
  fetch(`${secao}.html`)
    .then(response => response.text())
    .then(html => {
      document.getElementById('main-container').innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar a seção:', error));
}

document.getElementById('load-about-me').addEventListener('click', function(event) {
  event.preventDefault();
  carregarConteudo('about-me');
});

document.getElementById('load-experience').addEventListener('click', function(event) {
  event.preventDefault();
  carregarConteudo('experience');
});

