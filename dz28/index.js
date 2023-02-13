const list = document.querySelector('.list');
let num = 0;
let el = 0;
list.addEventListener('click', function (event) {
    const trigger = event.target.closest('span');
    if (trigger) {
        trigger.classList.toggle('hide');
    }
});

const listAdd = document.querySelector('#list-add');
listAdd.addEventListener('click', function (event) {
    if (num < 10) {
        num++;
        const li = document.createElement('li');
        li.innerHTML = '<span class="hide">' +
            mapLetterToNumber[num] + ' список</span>' +
            '<ul>' +
            '<li>' + ++el + ' елемент списку</li>' +
            '<li>' + ++el + ' елемент списку</li>' +
            '<li>' + ++el + ' елемент списку</li>' +
            '</ul>'
        list.appendChild(li);
    } else {
        alert('Максимальна кількість списків!')
    }
})
// // ДЗ: нумерувати додані списки
const mapLetterToNumber = {
    1: "Перший",
    2: "Другий",
    3: "Третій",
    4: "Четвертий",
    5: "П'ятий",
    6: "Шостий",
    7: "Сьомий",
    8: "Восьмий",
    9: "Дев'ятий",
    10: "Десятий"
}

const listDel = document.querySelector('#list-del');
listDel.addEventListener('click', function (event) {
    if (num >= 1) {
        const lastList = document.querySelector('.list');
        console.log(lastList);
        lastList.removeChild(lastList.lastChild);
        el = el - 3;
        num--;
    }else {
        alert('Списків нема!')
    }

})
















