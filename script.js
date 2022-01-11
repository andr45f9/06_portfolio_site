/* Burger menu */

function toggleNavigation() {
  const navigation = document.getElementById("navLinks");

  if (navigation.style.display === "flex") {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "flex";
  }
}

/* Back to top knap */

//Hent knappen
const mybutton = document.getElementById("myBtn");

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
