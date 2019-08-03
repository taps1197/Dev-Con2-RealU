const video = document.getElementById('vd'),
    canv = document.getElementById('canv'),
    ctx = canv.getContext('2d'),
    snapBtn = document.querySelector('#clickPic'),
    // detectButton = document.querySelector('#detectFaces'),
    // stopBtn = document.querySelector('#stop'),
    // verifyBtn = document.querySelector('#verifyFace'),
    enrolled = false;

let interval = null;

//stopBtn.addEventListener('click', () => { clearInterval(interval) });

window.onload = cam;
