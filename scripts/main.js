let sliderTop = document.querySelector('.input-range__top');
let sliderBottom = document.querySelector('.input-range__bottom');
let periodVal = document.querySelector('.input-range__value_bottom');
let borrowValue = document.querySelector('.input-range__value_top');

sliderTop.addEventListener("input", function(){
    let x = sliderTop.value;
    borrowValue.textContent = x;
    let color = `linear-gradient(to right, #67ac5b ${ x / 1000000  * 100}%, #c5c4c4 ${x / 1000000  * 100}%)`;
    sliderTop.style.background = color;
})
sliderBottom.addEventListener("input", function(){
    let x = sliderBottom.value;
    periodVal.textContent = x;
    let color = `linear-gradient(to right, #67ac5b ${(x-2) / 10  * 100}%, 
    #c5c4c4 ${(x-2) / 10  * 100}%)`;
    sliderBottom.style.background = color;
})
