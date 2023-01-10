let section = document.querySelector('.content_Spaces');
let draws;
for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        section.innerHTML += `<div class='drawer' id="C${j}-R${i}"></div>`;
    }
}
draws = document.querySelectorAll('.drawer');


document.querySelectorAll('.drawer').forEach(el => {
    el.addEventListener('click', e => {
        let id = e.target.getAttribute("id");
        let element = document.querySelector("#"+id);
        element.classList.toggle("paint");
    });
});