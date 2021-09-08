fetch("../html/header.html")
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    document.querySelector(".header").innerHTML = html;
  });

fetch("../html/nav.html")
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    document.querySelector(".nav").innerHTML = html;
  });

fetch("../html/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    document.querySelector(".footer").innerHTML = html;
  });

function homePage() {
  if (location == "index.html") {
    location.href = "#";
  } else {
    location.href = "../index.html";
  }
}
function contactPage() {
  if (location == "html/contact-us.html") {
    location.href = "#";
  } else {
    location.href = "../html/contact-us.html";
  }
}
function bookingPage() {
  if (location == "html/booking.html") {
    location.href = "#";
  } else {
    location.href = "../html/booking.html";
  }
}
function servicesPage() {
  if (location == "html/services.html") {
    location.href = "#";
  } else {
    location.href = "../html/services.html";
  }
}
function aboutPage() {
  if (location == "html/about-us.html") {
    location.href = "#";
  } else {
    location.href = "../html/about-us.html";
  }
}

