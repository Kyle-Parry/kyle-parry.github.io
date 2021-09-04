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
function contentPage() {
  if (location == "html/content.html") {
    location.href = "#";
  } else {
    location.href = "../html/content.html";
  }
}
function webFormPage() {
  if (location == "html/web-form.html") {
    location.href = "#";
  } else {
    location.href = "../html/web-form.html";
  }
}
function tableOfDataPage() {
  if (location == "html/table-of-data.html") {
    location.href = "#";
  } else {
    location.href = "../html/table-of-data.html";
  }
}
function blogPage() {
  if (location == "html/blog-page.html") {
    location.href = "#";
  } else {
    location.href = "../html/blog-page.html";
  }
}
