const links = document.querySelectorAll('.link');

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    link.style.border = '1px solid black';
    link.style.color = 'red';
  }
});
