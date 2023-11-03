document.getElementById('click').addEventListener('click', () => 
    navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(stream => document.body
    .appendChild(Object.assign(document.createElement('video'), { srcObject: stream })).play())
    .catch(error => console.error('Error accessing camera:', error)));
