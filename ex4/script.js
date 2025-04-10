document.getElementById("rest").style.display = "none";
btn = document.createElement("button");
btn.className = "rbtn"
btn.innerText = "Show More";
btn.onclick = showMore;
document.getElementsByClassName("head")[0].appendChild(btn);

var bg_sound = document.getElementById("bg_sound");
bg_sound.loop = true;
var jumpscare_sound = document.getElementById("jumpscare_sound");
function showMore() {
    document.getElementsByClassName("rbtn")[0].style.display = "none";
    document.getElementById("rest").style.display = "block";
    bg_sound.play();
}

// The rest of the website
about = document.getElementsByClassName("about")[0];
hobby = document.getElementsByClassName("hobby")[0];
cont = document.getElementsByClassName("container")[0];
const hobbies = ["Basketball", "Chess", "Animals"];
const hobbies_img = [
    "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maxime_Vachier-Lagrave_au_tournoi_des_candidats_%28cropped%29.jpg/1200px-Maxime_Vachier-Lagrave_au_tournoi_des_candidats_%28cropped%29.jpg",
    "https://manilaoceanpark.com/wp-content/uploads/2024/04/24-1200x800.png",
];
const hobbies_description = [
    "Basketball is more than just a sport to me—it’s a passion that keeps me active, focused, and energized. I enjoy the fast-paced nature of the game, the strategic plays, and the sense of teamwork it fosters. Whether I'm playing in a competitive match or just shooting hoops with friends, basketball always helps me clear my mind and stay physically fit. It’s also a great way to bond with others and challenge myself to improve every time I step on the court.",
    "Chess has always fascinated me because of the deep strategy and mental discipline it requires. Every game feels like a battle of wits, where patience, foresight, and careful planning are the keys to success. I love how no two games are ever the same, and how even a small move can completely change the outcome. Playing chess sharpens my thinking, teaches me to stay calm under pressure, and pushes me to always think a few steps ahead.",
    "I’ve always had a soft spot for animals—they bring so much joy, comfort, and life into the world. Whether it’s caring for pets or observing wildlife, I find a deep sense of connection and responsibility toward them. Animals have unique personalities, and getting to know them has taught me empathy, patience, and respect for nature. I genuinely enjoy learning about different species and how they interact with their environment, and I dream of being able to help in animal welfare and conservation someday.",
]

const abouts = ["Born in the Philippines", "Aspiring Computer Scientist"]
const abouts_img = [
    "https://cdn.britannica.com/34/183734-050-CAFE5B38/World-Data-Locator-Map-Philippines.jpg",
    "https://www.eecs.mit.edu/wp-content/uploads/2021/06/compscihero-1024x545.jpg",
]
const abouts_description = [
    "I was born and raised in the Philippines, a country rich in culture, community, and resilience. Growing up there taught me the value of hard work, creativity, and staying close to family and friends. The vibrant environment, from bustling city life to the beauty of nature, shaped my perspective and inspired me to dream big. My roots in the Philippines are a big part of who I am and continue to influence the way I approach life and learning.",
    "I’ve always been fascinated by how technology works and how it can be used to solve real-world problems, which is why I’m pursuing a path to become a computer scientist. I love the idea of building systems, apps, and tools that can help improve people’s lives. Whether it’s through coding, exploring new tech, or collaborating with others, I’m driven by the desire to innovate and make a difference in the world through technology."
]

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
            <h2 class="bp-title">${hobbies[i]}</h2>
            <img class="bp-img" src=${hobbies_img[i]}>
            <p class="bp-p">${hobbies_description[i]}</p>
            </br>
        `;
        hls.appendChild(item);
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
        hls = document.getElementsByClassName("hobbies")[0];
        for (var i=0; i<hobbies.length; i++) {
            hls.removeChild(document.getElementsByClassName("h-item")[0]);
        }
        btn.onclick = displayHobbies;
    } else {
        about.style.textAlign = "left";
        btn.innerHTML = "Know more about me";
        als = document.getElementsByClassName("abouts")[0];
        for (var i=0; i<abouts.length; i++) {
            als.removeChild(document.getElementsByClassName("a-item")[0]);
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

    als = document.getElementsByClassName("abouts")[0];
    for (var i=0; i<abouts.length; i++) {
        item = document.createElement("li");
        item.className = "a-item";
        item.innerHTML = `
            <h2 class="bp-title">${abouts[i]}</h2>
            <img class="bp-img" src=${abouts_img[i]}>
            <p class="bp-p">${abouts_description[i]}</p>
            </br>
        `;
        als.appendChild(item);
    }
}

var number_of_p = 0;
document.addEventListener("keypress", function(event) {
    if (event.key == "p") {
        document.getElementById("p").innerText += "p";
        number_of_p += 1;
        if (number_of_p > 10) {
            document.getElementById("all").remove();
            document.body.style.backgroundImage = "url('./jumpscare.gif')";
            document.body.style.backgroundColor = "black";

            bg_sound.pause();
            bg_sound.currentTime = 0;
            jumpscare_sound.play();
        }
    }
  });