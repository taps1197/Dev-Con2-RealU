const inputLabel = document.createElement('input');
// enroll faces
function enroll() {
    canv.style.display = 'block';
    const image = ctx.drawImage(video, 0, 0, canv.width, canv.height);
    video.pause();

    // Define The Person's ID
    inputLabel.setAttribute('type', 'text');
    inputLabel.addEventListener('keydown', async(e) => {
        if (e.keyCode === 13) {
            console.log('enrolling...');

            const response = await apiAction('enroll', canv.toDataURL(), inputLabel.value, 'mygallery');
            if (response.faceid) {
                enrolled = true;
                console.log('enrolled face');
            }
            canv.style.display = 'none';
            video.play();
            changeToVerify();
        }
    })

    document.body.appendChild(inputLabel);
}

// detect faces
function detect() {
    clearInterval(interval);
    (async() => {
        console.log('detecting...');
        ctx.drawImage(video, 0, 0, canv.width, canv.height);
        const response = await apiAction('detect', canv.toDataURL());
        console.log(response);
        console.log(response.images[0].faces.length);
        if (response.images[0].faces.length > 1) unfair();

    })()
    interval = setInterval(detect, 5000)
    verify();
    for (i = 0; i < 10000000; i++) {
}
}

// verify faces
function verify() {
    clearInterval(interval);
    (async() => {
        const label = inputLabel.value;
        console.log('verifying...');
        ctx.drawImage(video, 0, 0, canv.width, canv.height);
        const response = await apiAction('verify', canv.toDataURL(), label, 'mygallery');
        if(response.images)
        {
                console.log(response.images);
            if (response.images[0].transaction.confidence >= 0.7) console.log('Verified!');

            else
                {
                console.log('Intruder Alert!!!');
                alert("Intruder Alert!!!.Please stay in the middle to verify your Face and remove all sunglasses");
                }
        }
            else
            {
                    console.log('no face found');
                    alert("No face found.Please stay in the middle to verify your Face and remove all sunglasses.");
            }
            detect();
    })()

changeToVerify();
    interval = setInterval(verify, 5000)

}

// recognize faces
function recognize() {
    // face recognition
    // const response = await apiAction('recognize',canv.toDataURL(),null,'mygallery');
}


function final_timeout() {
     setTimeout(function(){ alert("Only 3 minutes left. Vote now else you will be TimedOut...Many are in the queue."); }, 1800);
}

function final_timeout() {
     setTimeout(function(){ alert("Your Voting Time is up.If you have not voted,you'll be informed about next timing "); }, 900000);
     window.location.href="session_out.html";

}
