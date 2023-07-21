(function() {
const img = window.document.querySelectorAll('.main_content10-img-desenho>img');
const svg = window.document.getElementsByClassName('svg-img');
const path = window.document.getElementsByClassName('path-img');
let indiceArmz, curtirValue = true;

curtir();
function curtir() {
    for(let indice = 0; indice < img.length; indice++) {
        img[indice].addEventListener('dblclick', () => curtirChange(indice));
        svg[indice].addEventListener('click', () => curtirChange(indice));
    }

    function curtirChange(indice) {
        if(curtirValue) {
            path[indice].setAttribute("class", "path-img path-img--red");
            indiceArmz = indice;
            curtirValue = false;
        } else if(curtirValue === false && indiceArmz === indice) {
            path[indice].setAttribute("class", "path-img path-img--black");
            curtirValue = true;
        }
    }
}
})();