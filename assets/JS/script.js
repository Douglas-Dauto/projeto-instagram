(function() {
const img = window.document.querySelectorAll('.main_content10-img-desenho>img');
const svg = window.document.getElementsByClassName('svg-img');
const path = window.document.getElementsByClassName('path-img');
let indiceArmz;

curtir(true);
function curtir(valor) {
    for(let indice in img) {
        if(valor) {
            img[indice].removeEventListener('dblclick', curtirRed);
            img[indice].addEventListener('dblclick', curtirRed);
            svg[indice].addEventListener('click', curtirRed);

            function curtirRed() {
                path[indice].setAttribute('fill', 'red');
                curtir(false);
                indiceArmz = indice;
            }
        } else if(valor === false && indiceArmz === indice) {
            img[indice].removeEventListener('dblclick', curtirBlack);
            img[indice].addEventListener('dblclick', curtirBlack);
            svg[indice].addEventListener('click', curtirBlack);

            function curtirBlack() {
                path[indice].setAttribute('fill', 'black');
                curtir(true);
            }
        }
    }
}
})();