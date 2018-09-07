var banners =
["os melhores do Brasil", "Qualidade e preço baixo!"];
var bannerAtual = 0;

function trocaBanner(){
bannerAtual = (bannerAtual + 1) % 2;
document.queryselector('h2#mensagem').textContent =
banners[bannerAtual];
}

setInterval(trocaBanner,200);