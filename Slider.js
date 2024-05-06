let left = document.getElementById('btn-left');
let right = document.getElementById('btn-right');

let fream = document.querySelector('.fream');

left.addEventListener('click',()=>{
    fream.style.scrollBehavior='smooth';
    fream.scrollLeft -=800;
});

right.addEventListener('click',()=>{
    fream.style.scrollBehavior='smooth';
    fream.scrollLeft +=800;
});