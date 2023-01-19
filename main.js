let player1 = '.content_SpacesPlayer1';
let player2 = '.content_SpacesPlayer2';
class Players {
    constructor(content, player){
        this.content = content;
        this.player = player;
    }
    
    pintarElmentos(){
        let section = document.querySelector(this.content);
        let draws;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 11; j++) {
                section.innerHTML += `<div class='drawer' id="${this.player}-C${j}-R${i}"></div>`;
            }
        }
    }
}


let barcos1 = new Players(player1, "P1");
let barcos2 = new Players(player2, "P2");

barcos1.pintarElmentos();
barcos2.pintarElmentos();


let draws;
draws = document.querySelectorAll('.drawer');


document.querySelectorAll('.drawer').forEach(el => {
    el.addEventListener('click', e => {
        let id = e.target.getAttribute("id");
        let element = document.querySelector("#" + id);
        element.classList.toggle("paint");
    });
});

