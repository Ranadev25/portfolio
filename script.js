// ------------ScrollReveal setup-------------
ScrollReveal().reveal(".home, .header, .servic-h2, .skill-h2, .project-h2", {
  origin: "top",
  reset: true,
  distance: "100px",
  duration: 1000,
  delay: 10,
});
ScrollReveal().reveal(
  ".scervice-item1, .homein-h1, .skill-left,  .column-left, .fortfolio-box, .tittle-contract",
  {
    origin: "left",
    reset: true,
    distance: "20px",
    duration: 1000,
    delay: 10,
  },
);
ScrollReveal().reveal(".scervice-item3, .about-h2", {
  origin: "right",
  reset: true,
  distance: "20px",
  duration: 1000,
  delay: 10,
});
ScrollReveal().reveal(".column-right", {
  origin: "bottom",
  reset: true,
  distance: "20px",
  duration: 1000,
  delay: 10,
});

// -----------ScrollReveal end-----------------

const body = document.querySelector("body"),
  header = document.querySelector(".header"),
  themToggle = document.querySelector(".dirk-light"),
  sliderclose = document.querySelector(".sliderclose"),
  navopen = document.querySelector(".navopen"),
  navber = document.querySelector(".navber"),
  menu = document.querySelectorAll(".menu li a"),
  homesection = document.querySelector(".home"),
  circles = document.querySelectorAll(".circle");

let gettheme = localStorage.getItem("theme");
if (gettheme && gettheme === "light-theme") {
  body.classList.add("light");
}

// if (header.classList.toggle("sticky")) {
//     homesection.style.marginTop = "0px";
//   }
//------------ dark and light mode toggle-----------------
themToggle.addEventListener("click", () => {
  themToggle.classList.toggle("active");
  body.classList.toggle("light");

  if (!body.classList.contains("light")) {
    localStorage.setItem("theme", "dark-theme");
  } else {
    localStorage.setItem("theme", "light-theme");
  }
});

//--------------- open and close slide nevbar----------------------
navopen.addEventListener("click", () => {
  header.classList.add("active");
});
// if (!header.classList.contains("navopen") && !header.classList.contains("menu")) {
//   header.classList.remove("active");
// }
sliderclose.addEventListener("click", () => {
  header.classList.remove("active");
});
menu.forEach((li) => {
  li.addEventListener("click", () => {
    header.classList.remove("active");
  });
});
//------------------nevigration menu end----------------

// --------------text countint getitem in cdn---------------------
//------------home section start--------------------
var typed = new Typed("#element", {
  strings: ["Frontend Developer...", "YouTuber and", "Web Developer."],
  typeSpeed: 100,
  backDelay: 1000,
  backSpeed: 100,
  loop: true,
});
//------------home section end--------------------
//----------skills circle--------------
circles.forEach((elem) => {
  let dots = elem.getAttribute("data-dots");
  let marked = elem.getAttribute("data-percent");
  let percent = Math.floor((dots * marked) / 100);
  let points = "";
  let rotate = 360 / dots;
  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;
  const pointsMarked = elem.querySelectorAll(".points");
  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

const form = document.getElementById("message-from");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  if (!email || !name || !subject || !message) {
    alert("All fields are required");
    return;
  }

  try {
    const res = await fetch("http://localhost:5280/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    const data = await res.json();

    alert(data.message);
  } catch (error) {
    alert("Failed to send message: " + err.message);
  } finally {
    form.reset();
  }
});
