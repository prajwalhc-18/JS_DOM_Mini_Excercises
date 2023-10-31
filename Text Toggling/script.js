let toggleButton = document.getElementById('toggleButton')
let toggleText = document.getElementById('toggleText')

toggleButton.addEventListener('click',function(){
    toggleText.textContent = toggleText.textContent === 'Hello'?'World!':'Hello'
})