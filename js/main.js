var previousScrollPosition = window.pageYOffset;
var nav = document.getElementById("nav");
var menuIcon = document.getElementById("menu-icon");
var navItems = document.getElementById("nav-items");
//Get the button:
var mybutton = document.getElementById("myBtn");

//activate animate on screen plugin CDN
AOS.init();

//project fade effect
$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0.3) {
            $(this).fadeTo(500, 1);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0.3);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
  nav.style.top = "0";
});

// Show/Hide nav bar on scroll
window.onscroll = function () {
  var currentScrollPosition = window.pageYOffset;
  if (previousScrollPosition > currentScrollPosition) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-60px";

    if (window.innerWidth <= 768) {
      if (navItems.classList.contains("show")) {
        navItems.classList.remove("show");
      }
    }
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

function switchMode() {
  var element = document.body;
  element.classList.toggle("funMode");

  $("#typer").toggleClass("typerFun");

  $("#star").toggle();
  $("#house").toggle();
  $("#houseFun").toggle();

  $("#twinkling").toggle();

  console.log($("#nav").css("background-color"));

  if ($("#nav").css("background-color") === "rgb(245, 222, 179)") {
    $("#nav").css("background-color", "rgb(228, 182, 255)");
  } else {
    $("#nav").css("background-color", "wheat");
  }

  if ($("#nav-items").css("background-color") === "rgb(245, 222, 179)") {
    $("#nav-items").css("background-color", "rgb(228, 182, 255)");
  } else {
    $("#nav-items").css("background-color", "wheat");
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
  .typeString("My name is Ronald")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I am a web developer")
  .pauseFor(1400)
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
