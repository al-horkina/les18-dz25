/*const product = {
    dog: [
        {
            img: 'img/3.jpg',
            name: 'Pesuk1',
            text: 'Lorem ipsum dolor sit amet, consectetur',
            price: '200 грн'
        },
        {
            img: 'img/4.jpg',
            name: 'Pesuk2',
            text: 'ipsum dolor sit amet, consectetur',
            price: '300 грн'
        }
    ],
    cat: [
        {
            img: 'img/5.jpg',
            name: 'Kitty1',
            text: 'Lorem ipsum dolor sit amet, consectetur',
            price: '200 грн'
        },
        {
            img: 'img/6.jpg',
            name: 'Kitty2',
            text: 'ipsum dolor sit amet, consectetur',
            price: '300 грн'
        }
    ],
    bird: [
        {
            img: 'img/7.jpg',
            name: 'bird1',
            text: 'Lorem ipsum dolor sit amet, consectetur',
            price: '200 грн'
        },
        {
            img: 'img/8.jpg',
            name: 'bird2',
            text: 'ipsum dolor sit amet, consectetur',
            price: '300 грн'
        }
    ]

}*/
const dog = [
    {
        img: 'img/3.jpg',
        name: 'Pesuk1',
        text: 'Lorem ipsum dolor sit amet, consectetur',
        price: '200 грн'
    },
    {
        img: 'img/4.jpg',
        name: 'Pesuk2',
        text: 'ipsum dolor sit amet, consectetur',
        price: '300 грн'
    }
];

const cat = [
    {
        img: 'img/5.jpg',
        name: 'Kitty1',
        text: 'Lorem ipsum dolor sit amet, consectetur',
        price: '200 грн'
    },
    {
        img: 'img/6.jpg',
        name: 'Kitty2',
        text: 'ipsum dolor sit amet, consectetur',
        price: '300 грн'
    }
];

const bird = [
    {
        img: 'img/7.jpg',
        name: 'bird1',
        text: 'Lorem ipsum dolor sit amet, consectetur',
        price: '200 грн'
    },
    {
        img: 'img/8.jpg',
        name: 'bird2',
        text: 'ipsum dolor sit amet, consectetur',
        price: '300 грн'
    }
];

const List = document.querySelector('.list');
const prodMenu = document.querySelector('.shop_menu');

const itemShow = document.querySelector('.shop_info');
let prodShow;

List.addEventListener('click', function (event) {
    prodMenu.innerHTML = '';
    let kategory = event.target.value;
    console.log(kategory);
    if (kategory === 0) {
        for (let i = 0; i <= dog.length; i++) {
            const div = document.createElement('div');
            div.classList.add('shop_item');
            div.innerHTML = ` <img src=${dog[i].img} alt="" class="item_img">
            <p class="item_name">${dog[i].name}</p>`;
            prodMenu.appendChild(div);
            prodShow = document.querySelectorAll('.shop_item');

            for (let i = 0; i < prodShow.length; i++) {
                prodShow[i].addEventListener('click', function (event) {
                    itemShow.innerHTML = '';
                    const infoDiv = document.createElement('div');
                    infoDiv.classList.add('info_item');
                    itemShow.innerHTML = ` <img src=${dog[i].img} alt="" class="info_img">
                        <p class="info_name">${dog[i].name}</p>
                        <p class="info_text">${dog[i].text} </p>
                        <p>Вартість: <span class="info_price">${dog[i].price}</span></p>
                        <button id="buy">Замовити</button>`;
                    itemShow.appendChild(infoDiv);
                    let btn = document.getElementById("buy");
                    btn.addEventListener('click', function (event) {
                        itemShow.innerHTML = '';
                        itemShow.innerHTML = `<b1>Товар куплено!</b1>`;
                        setTimeout(cleanAll, 1000);

                    });
                });
            }
        }
    } else if (kategory === 1) {
        for (let i = 0; i <= cat.length; i++) {
            const div = document.createElement('div');
            div.classList.add('shop_item');
            div.innerHTML = ` <img src=${cat[i].img} alt="" class="item_img">
            <p class="item_name">${cat[i].name}</p>`;
            prodMenu.appendChild(div);
            prodShow = document.querySelectorAll('.shop_item');

            for (let i = 0; i < prodShow.length; i++) {
                prodShow[i].addEventListener('click', function (event) {
                    itemShow.innerHTML = '';
                    const infoDiv = document.createElement('div');
                    infoDiv.classList.add('info_item');
                    itemShow.innerHTML = ` <img src=${cat[i].img} alt="" class="info_img">
                        <p class="info_name">${cat[i].name}</p>
                        <p class="info_text">${cat[i].text} </p>
                        <p>Вартість: <span class="info_price">${cat[i].price}</span></p>
                        <button id="buy">Замовити</button>`;
                    itemShow.appendChild(infoDiv);
                    let btn = document.getElementById("buy");
                    btn.addEventListener('click', function (event) {
                        itemShow.innerHTML = '';
                        itemShow.innerHTML = `<b1>Товар куплено!</b1>`;
                        setTimeout(cleanAll, 1000);

                    });


                });
            }
        }
    } else if (kategory === 2) {
        for (let i = 0; i <= bird.length; i++) {
            const div = document.createElement('div');
            div.classList.add('shop_item');
            div.innerHTML = ` <img src=${bird[i].img} alt="" class="item_img">
            <p class="item_name">${bird[i].name}</p>`;
            prodMenu.appendChild(div);

            prodShow = document.querySelectorAll('.shop_item');
            for (let i = 0; i < prodShow.length; i++) {
                prodShow[i].addEventListener('click', function (event) {
                    itemShow.innerHTML = '';
                    const infoDiv = document.createElement('div');
                    infoDiv.classList.add('info_item');
                    itemShow.innerHTML = ` <img src=${bird[i].img} alt="" class="info_img">
                        <p class="info_name">${bird[i].name}</p>
                        <p class="info_text">${bird[i].text} </p>
                        <p>Вартість: <span class="info_price">${bird[i].price}</span></p>
                        <button id="buy">Замовити</button>`;
                    itemShow.appendChild(infoDiv);
                    let btn = document.getElementById("buy");
                    btn.addEventListener('click', function (event) {
                        itemShow.innerHTML = '';
                        itemShow.innerHTML = `<b1>Товар куплено!</b1>`;
                        setTimeout(cleanAll, 1000);

                    });


                });
            }
        }
    }


});


function cleanAll() {
    itemShow.innerHTML = '';
    prodMenu.innerHTML = '';

}

/*let btn = document.getElementById("buy");
btn.addEventListener('click', function (event) {
    itemShow.innerHTML = '';
    itemShow.innerHTML = `<b1>Товар куплено!</b1>`;
    setTimeout(cleanAll, 1000);

});*/



































