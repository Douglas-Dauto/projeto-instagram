(function() {
const img = window.document.querySelectorAll('.main_content10-img-desenho>img');
const svg = window.document.getElementsByClassName('svg-img');
const path = window.document.getElementsByClassName('path-img');
let indiceArmz;

curtir(true);
function curtir(valor) {
    for(let indice in img) {
        if(valor) {
            img[indice].addEventListener('dblclick', () => curtirRed(indice));
            svg[indice].addEventListener('click', () => curtirRed(indice));
        } else if(valor === false && indiceArmz === indice) {
            img[indice].addEventListener('dblclick', () => curtirBlack(indice));
            svg[indice].addEventListener('click', () => curtirBlack(indice));
        }
    }

    function curtirRed(indice) {
        path[indice].setAttribute('fill', 'red');
        indiceArmz = indice;
        curtir(false);
    }
    
    function curtirBlack(indice) {
        path[indice].setAttribute('fill', 'black');
        curtir(true);
    }
}
})();