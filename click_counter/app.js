let clickButton = document.getElementById('clickButton')
let counter = document.getElementById('counter')

let clickCount = 0; 

clickButton.addEventListener('click',function(){
    clickCount++
    counter.textContent = `Click Count: ${clickCount}`
})