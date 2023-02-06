const inputLink = document.getElementById('newLink');
const goToLink = document.getElementById('goLink');
let link;
let linkArr;
let stringLink;

inputLink.addEventListener('click',function (event) {
    link = prompt("Введіть адресу");
    linkArr = link.split("");
    let arrText = [];
    const checkHttp = ['h','t','t','p'];
    const checkHttps = ['h','t','t','p','s'];

    for(let i = 0; i < 5; i++) {
        arrText.push(linkArr[i]);
    }

    for(let i = 0; i < arrText.length; i++) {
        if(arrText[i] === checkHttps[i] || arrText[i] === checkHttp[i]) {
            console.log(stringLink);
        } else {
            linkArr.unshift('h','t','t','p','s',':','/','/');
            break
        }
    }

    stringLink = linkArr.join("");
    console.log(stringLink);
});

goToLink.addEventListener('click',function (event) {
    location.assign(stringLink);
});
