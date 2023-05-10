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

function handleClick(e: Event): void {
  if (e instanceof MouseEvent) {
    nav?.classList.toggle('active');
    nav?.setAttribute(
      'aria-expanded',
      nav.classList.contains('active') ? 'true' : 'false'
    );
    nav?.setAttribute(
      'aria-label',
      nav.classList.contains('active') ? 'fechar menu' : 'abrir menu'
    );
  } else if (e instanceof PointerEvent || e instanceof TouchEvent) {
    nav?.classList.toggle('active');
    nav?.setAttribute(
      'aria-expanded',
      nav.classList.contains('active') ? 'true' : 'false'
    );
    nav?.setAttribute(
      'aria-label',
      nav.classList.contains('active') ? 'fechar menu' : 'abrir menu'
    );
  }
}

botaoAbrirMenu?.addEventListener('click', handleClick);
botaoAbrirMenu?.addEventListener('touchstart', handleClick);
botaoAbrirMenu?.addEventListener('pointerdown', handleClick);
