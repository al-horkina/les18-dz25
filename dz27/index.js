const imglist = document.querySelectorAll('img');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let maxLeng = imglist.length - 1;
let count = 0;

nextBtn.addEventListener('click', function (event) {
    if (count < maxLeng) {
        nextBtn.classList.remove('hide');
        prevBtn.classList.remove('hide');
        imglist[count].classList.remove('show');
        ++count;
        imglist[count].classList.add('show');
        if (count === maxLeng){
            nextBtn.classList.add('hide');
        }
    }else {
        nextBtn.classList.add('hide');
    }
})

prevBtn.addEventListener('click', function (event) {
   if (count > 0){
       prevBtn.classList.remove('hide');
       nextBtn.classList.remove('hide');
       imglist[count].classList.remove('show');
       --count;
       imglist[count].classList.add('show');
       if (count === 0){
           prevBtn.classList.add('hide');
       }

   }else {
       prevBtn.classList.add('hide');
   }

})























