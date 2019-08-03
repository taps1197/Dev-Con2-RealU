// After enrolling, change the buttons action to verify.
function changeToVerify() {
    snapBtn.removeEventListener('click', enroll, false);
    snapBtn.innerHTML = 'Verify';
    snapBtn.addEventListener('click', verify);

}

// End the session if more than one persons are detected in the image
function unfair() {
    // do the session ending code here
    // CAUTION : This log is not meant for any developers involved in the project ;)
    console.log('Some Fool Is Peeking.');
    let count = 3;
    clearInterval(interval);
    let intruderInterval = setInterval(() => {
        console.log(`You've ${count} seconds to secure the location`);
        alert("You've be alone to secure the location");
        count--;

        if (count === 0) {
            clearInterval(intruderInterval);

            detect();

            //Blow Up The Intruder
            // window.location.href="session_out.html";
        }
    }, 1000);
}

function notuser() {
    // do the session ending code here
    // CAUTION : This log is not meant for any developers involved in the project ;)
    console.log('U');
    let count = 3;
    clearInterval(interval);
    let intruderInterval = setInterval(() => {
        console.log(`You've ${count} seconds to secure the location`);
        alert("You've be alone to secure the location");
        count--;

        if (count === 0) {
            clearInterval(intruderInterval);

            detect();

            //Blow Up The Intruder
            // window.location.href="session_out.html";
        }
    }, 1000);
}

// Capture feed from the webcam
function cam() {
    snapBtn.addEventListener('click', enroll);
    // detectButton.addEventListener('click', detect);
    navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                width: 500,
                height: 500
            }
        })
        .then(stream => {
            video.srcObject = stream;
            video.onloadedmetadata = video.play()
        })
        .catch(err => console.error(err));
}

// Send Request to the kairos api
function apiAction(action, img, label, gallery) {
    let bodyData = {
        "image": `${img}`,
    }
    bodyData = action !== 'detect' ? {...bodyData, "subject_id": `${label}`, "gallery_name": `${gallery}` } : bodyData;
    return fetch(`https://api.kairos.com/${action}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "app_id": "86dc9b15",
                "app_key": "ddeb4bc7ce382fb6110462d77836723d"
            },
            body: JSON.stringify(bodyData)
        })
        .then(data => {
            return data.json();
        })
        .then(data => {
            return data;
        })
        .catch(err => {
            return true;
        });
}
