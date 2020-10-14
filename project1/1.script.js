const text = document.getElementById("text");
const button = document.getElementById("btn");


button.onclick = () => {
    if (text.className == "show") {
        text.className = ""; // this will make class empty
        button.innerText = "Read More"
    }
    else {
        text.className = "show";
        button.innerText = "Read Less";
    }
}
