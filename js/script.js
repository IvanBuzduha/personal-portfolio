let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
let date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top > offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });

      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
  let footer = document.querySelector("footer");
  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

document.addEventListener("DOMContentLoaded", function (event) {
  const percentage = document.querySelectorAll(".percentage");
  const bar = document.querySelectorAll(".bar");

  let percent = 0;
  //   percentage.forEach((item) => {
  //     percent = parseInt(item.innerText);
  //     bar.item.insertAdjacentElement = `<span class="bar-span" style="width:${percent}%" ></span>`;
  //     console.log("item: ", item);
  //     console.log("bar: ", bar.item);
  //     // });
  //     // bar.item = `<span class="bar-span" style="width:${percent}%" ></span>`;
  //   });

  for (let i = 0; i < percentage.length; i++) {
    percent = parseInt(percentage[i].innerHTML);
    bar[
      i
    ].innerHTML = `<span class="bar-span" style="width:${percent}%" ></span>`;
  }
});
