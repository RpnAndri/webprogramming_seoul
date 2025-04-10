about = document.getElementsByClassName("about")[0];
hobby = document.getElementsByClassName("hobby")[0];
cont = document.getElementsByClassName("container")[0];
const hobbies = ["Basketball", "Chess", "Animals"];
const abouts = [""]

function displayHobbies() {
    cont.style.display = "block";
    about.style.display = "none";
    hobby.style.display = "block";
    hobby.style.textAlign = "center";

    hbtn = document.getElementsByClassName("hobby-b")[0];
    hbtn.innerHTML = "Go Back";
    hbtn.onclick = goBack.bind(this, "hobby-b");

    

    hls = document.getElementsByClassName("hobbies")[0];
    for (var i=0; i<hobbies.length; i++) {
        item = document.createElement("li");
        item.className = "h-item";
        item.innerHTML = `
            <h2>HELLO WORLD</h2>
        `;
        hobby.appendChild(item);
    }
}

function goBack(id) {
    cont.style.display = "grid";
    about.style.display = "block";
    hobby.style.display = "block";

    btn = document.getElementsByClassName(id)[0];
    if (id == "hobby-b") {
        hobby.style.textAlign = "left";
        btn.innerHTML = "Reveal the hobbies";
        for (var i=0; i<hobbies.length; i++) {
            hobby.removeChild(document.getElementsByClassName("h-item")[0]);
        }
        btn.onclick = displayHobbies;
    } else {
        about.style.textAlign = "left";
        btn.innerHTML = "Know more about me";
        for (var i=0; i<abouts.length; i++) {
            about.removeChild(document.getElementsByClassName("a-item")[0]);
        }
        btn.onclick = displayAboutMe;
    }
}

function displayAboutMe() {
    cont.style.display = "block";
    hobby.style.display = "none";
    about.style.display = "block";
    about.style.textAlign = "center";

    abtn = document.getElementsByClassName("about-b")[0];
    abtn.innerHTML = "Go Back";
    abtn.onclick = goBack.bind(this, "about-b");

    als = document.getElementsByClassName("about")[0];
    for (var i=0; i<abouts.length; i++) {
        item = document.createElement("li");
        item.className = "a-item";
        item.innerHTML = `
            <h2>HELLO WORLD</h2>
        `;
        about.appendChild(item);
    }
}