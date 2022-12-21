let section = document.querySelector('.content_Spaces');

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        section.innerHTML += `<div class='drawer'></div>`
        
    }
    section.innerHTML += `<br>`
    
}