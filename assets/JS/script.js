(function() {
const img = window.document.querySelectorAll('.main_content10-img-desenho>img');
const svg = window.document.getElementsByClassName('svg-img');
const path = window.document.getElementsByClassName('path-img');

curtir();
function curtir() {
    let indiceArmz, curtirValue = true;

    for(let indice = 0; indice < img.length; indice++) {
        img[indice].addEventListener('dblclick', () => curtirChange(indice));
        svg[indice].addEventListener('click', () => curtirChange(indice));
    }

    function curtirChange(indice) {
        if(curtirValue || indiceArmz !== indice) {
            path[indice].setAttribute("class", "path-img path-img--red");
            indiceArmz = indice;
            curtirValue = false;
        } else if(curtirValue === false || indiceArmz === indice) {
            path[indice].setAttribute("class", "path-img path-img--black");
            curtirValue = true;
        }
    }
}

// abrirFecharMenuMobile(true);
// function abrirFecharMenuMobile(valor) {
//     if(valor) {
//         buttonMenuMobile.addEventListener('click', () => {
//             menuMobile.setAttribute('id', 'div-logo-lista-conjunto-087--return');
//             abrirFecharMenuMobile(false);
//         });
//     } else {
//         buttonMenuMobile.addEventListener('click', removerMenu);
//         menuMobile.addEventListener('click', removerMenu);
//         document.body.style.overflowY = 'hidden';

//         for(let i = 0; i < divPartMenuMobile.length; i++) {
//             divPartMenuMobile[i].addEventListener('click', removerMenu);
//         }
//     }
// }

// function removerMenu() {
//     menuMobile.removeAttribute('id', 'div-logo-lista-conjunto-087--return');
//     abrirFecharMenuMobile(true);
//     document.body.style.overflowY = 'scroll';
// }
})();