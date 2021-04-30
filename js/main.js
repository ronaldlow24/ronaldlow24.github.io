var previousScrollPosition = window.pageYOffset;
var nav = document.getElementById("nav");
var menuIcon = document.getElementById("menu-icon");
var navItems = document.getElementById("nav-items");
//Get the button:
var mybutton = document.getElementById("myBtn");

// Show/Hide nav bar on scroll
window.onscroll = function () {
  var currentScrollPosition = window.pageYOffset;
  if (previousScrollPosition > currentScrollPosition) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-60px";
  }
  previousScrollPosition = currentScrollPosition;

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.visibility = "hidden";
  }
};

if (window.innerWidth <= 768) {
  // Toggle nav menu button
  menuIcon.addEventListener("click", function () {
    navItems.classList.toggle("show");
  });

  // Toggle to close menu if user clicks a link or anywhere else
  document.addEventListener("click", function (event) {
    if (navItems.classList.contains("show") && event.target != menuIcon) {
      navItems.classList.remove("show");
    }
  });
}

// Always show nav items on wide screen
if (window.innerWidth > 768) {
  if (!navItems.classList.contains("show")) {
    navItems.classList.add("show");
  }
}

// Page load / reload to top of page
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

function topFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $("#myBtn")
      .addClass("rocketAnimation")
      .delay(4100)
      .queue(function (next) {
        $(this).removeClass("rocketAnimation");
        next();
      });

    $("html, body").animate({ scrollTop: "0" }, 4000);
  } else {
    $("html, body").animate({ scrollTop: "0" }, 0);
  }
}

var typer = document.getElementById("typer");

var typewriter = new Typewriter(typer, {
  loop: true,
  delay: 75,
  cursor: "_",
});

typewriter
  .pauseFor(1100)
  .typeString("Hello")
  .pauseFor(1100)
  .deleteAll()
  .typeString("Welcome to my website")
  .pauseFor(1100)
  .deleteAll()
  .typeString("My name is")
  .pauseFor(1000)
  .start();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var ronaldData = {
  name: "Ronald Low Cheng Young",
  email: "ron556611@gmail.com",
  phone: "+60127848343",
  age: "22",
  github: "https://github.com/ronaldlow24",
  linkedin: "https://www.linkedin.com/in/ronald-low-cheng-young-872835167",
  resume: "ronald_cv.pdf",
  location: "Johor Bahru, Johor, Malaysia",
};
