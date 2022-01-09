/* Burger menu */

function myFunction() {
  const x = document.getElementById("navLinks");

  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

/* Back to top knap */

//Hent knappen
mybutton = document.getElementById("myBtn");

// Når man scroller ned til 20px fra toppen af, så viser knappen sig
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Når man klikker på knappen skal man blive transporteret tilbage til toppen.
function topFunction() {
  document.documentElement.scrollTop = 0;
}
