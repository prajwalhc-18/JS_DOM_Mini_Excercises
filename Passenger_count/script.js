let incrementButton = document.getElementById('increment-btn')
let decrementButton = document.getElementById('decrement-btn')
let save = document.getElementById('save')
let count = document.getElementById('count-el')

count.innerText = 0;

incrementButton.addEventListener('click',function(){
    count.innerText = parseInt(count.innerText)+1
})

decrementButton.addEventListener('click',function(){
    if(count.innerText>0){
        count.innerText = parseInt(count.innerText)-1
    }
})

save.addEventListener('click', function () {
    localStorage.setItem('count', count);
    alert('Count saved!');
});