
console.log("Form 2");

function validation() {
    const username = document.getElementById("name").value;

    const email = document.getElementById('email').value;

    const namemsg = document.getElementById('namemsg')

    // const msg = document.getElementById('msg')
    if (username == "") {
        namemsg.innerText = "username cannot be empty"
        return false;
    }

    if (username.length < 4) {
        msg.innerText = "username cannot be less than 4 characters"
        return false;
    }

    if (email == "") {
        emailmsg.innerText = "email cannot be empty"
        return false;
    }

    if (!email.includes("@")) {
        emailmsg.innerText = "email should be in abc@xyz.com format"
        return false;
    }
}