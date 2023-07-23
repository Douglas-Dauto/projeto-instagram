(function() {
curtir();
function curtir() {
    const img = window.document.querySelectorAll('.main_content10-img-desenho>img');
    const svg = window.document.getElementsByClassName('svg-img');
    const path = window.document.getElementsByClassName('path-img');
    const arrayCurtirValue = [];

    for(let indice = 0; indice < img.length; indice++) {
        arrayCurtirValue.push(true);
        img[indice].addEventListener('dblclick', () => curtirChange(indice));
        svg[indice].addEventListener('click', () => curtirChange(indice));
    }
}

function curtirChange(indice) {
    if(arrayCurtirValue[indice]) {
        path[indice].setAttribute("class", "path-img path-img--red");
        indiceArmz = indice;
        arrayCurtirValue[indice] = false;
    } else if(arrayCurtirValue[indice] === false) {
        path[indice].setAttribute("class", "path-img path-img--black");
        arrayCurtirValue[indice] = true;
    }
}

home();
function home() {
    const container = window.document.getElementsByClassName('main_contain2')[0];
    const home = window.document.getElementById('icon--home');
    let valueMove = true;
    
    const moveHome = () => {
        if(valueMove) {
            container.setAttribute('id', 'main_contain2');
            home.setAttribute('fill', 'white');
            valueMove = false;
        } else {
            container.removeAttribute('id', 'main_contain2');
            home.setAttribute('fill', '#262626');
            valueMove = true;
        }
    }
    
    home.addEventListener('click', moveHome);
}

const send = () => {
    const sendPublication = window.document.getElementsByClassName('send-publication');
    const contentSocial = window.document.getElementsByClassName('main_content10-social');
    const arrayControlContent = [];

    for(let indice = 0; indice < sendPublication.length; indice++) {
        arrayControlContent.push(true);
        sendPublication[indice].addEventListener('click', () => moveContent(indice));
    }
}
send();

function moveContent(indice) {
    if(arrayControlContent[indice]) {
        contentSocial[indice].setAttribute('id', 'main_content10-social');
        arrayControlContent[indice] = false;
    } else if(arrayControlContent[indice] === false) {
        contentSocial[indice].removeAttribute('id', 'main_content10-social');
       arrayControlContent[indice] = true;
    }
}

// Código de referência:
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