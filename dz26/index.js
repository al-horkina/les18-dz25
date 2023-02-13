function count(e){
    let sp = this.nextElementSibling;
    sp.innerText = Number(sp.innerText) + 1;
}

let ps = document.getElementsByTagName('img');

for(let i = 0; i < ps.length; i++){
    ps[i].addEventListener('click', count, false);
}



















