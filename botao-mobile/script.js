"use strict";
/*
Utilizando a estrutura HTML/CSS abaixo, crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).

*/
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const botaoAbrirMenu = document.querySelector('#hamburguer');
const nav = document.querySelector('nav');
function handleClick(e) {
    if (e instanceof MouseEvent) {
        nav === null || nav === void 0 ? void 0 : nav.classList.toggle('active');
        nav === null || nav === void 0 ? void 0 : nav.setAttribute('aria-expanded', nav.classList.contains('active') ? 'true' : 'false');
        nav === null || nav === void 0 ? void 0 : nav.setAttribute('aria-label', nav.classList.contains('active') ? 'fechar menu' : 'abrir menu');
    }
    else if (e instanceof PointerEvent || e instanceof TouchEvent) {
        nav === null || nav === void 0 ? void 0 : nav.classList.toggle('active');
        nav === null || nav === void 0 ? void 0 : nav.setAttribute('aria-expanded', nav.classList.contains('active') ? 'true' : 'false');
        nav === null || nav === void 0 ? void 0 : nav.setAttribute('aria-label', nav.classList.contains('active') ? 'fechar menu' : 'abrir menu');
    }
}
botaoAbrirMenu === null || botaoAbrirMenu === void 0 ? void 0 : botaoAbrirMenu.addEventListener('click', handleClick);
botaoAbrirMenu === null || botaoAbrirMenu === void 0 ? void 0 : botaoAbrirMenu.addEventListener('touchstart', handleClick);
botaoAbrirMenu === null || botaoAbrirMenu === void 0 ? void 0 : botaoAbrirMenu.addEventListener('pointerdown', handleClick);
