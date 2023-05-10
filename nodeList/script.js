var links = document.querySelectorAll('.link');
links.forEach(function (link) {
    if (link instanceof HTMLElement) {
        link.style.border = '1px solid black';
        link.style.color = 'red';
    }
});
