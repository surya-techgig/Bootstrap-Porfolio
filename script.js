let preloader = document.querySelector(".preloader");

window.onload = function() {
    preloader.classList.add("active");
}
setTimeout(function() {
    preloader.classList.remove("active");
}, 2000)
let toogleBtn = document.querySelector(".navbar-toggler");
let navbarvis = document.querySelector(".navbar-collapse");
let navbrand = document.querySelector(".navbar-brand");
let navbar = document.querySelector(".navbar");
let scrollTrigger = 500;

window.onscroll = function() {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        navbar.classList.add("bg-dark");
    }else {
        navbar.classList.remove("bg-dark");
    }
};
toogleBtn.addEventListener("click", function() {
    navbarvis.style.right = "0px";
    toogleBtn.classList.toggle("navcentre");
    navbrand.classList.toggle("navnone");
    navbar.classList.toggle("navpad");
});

let cameraImg = document.querySelector(".camera");
let laptopImg = document.querySelector(".laptop");
let photoImg = document.querySelector(".photo");

let img1 = document.querySelector(".lap1");
let img2 = document.querySelector(".lap2");
let img3 = document.querySelector(".lap3");
let img4 = document.querySelector(".lap4");

let des1 = document.querySelector(".des1");
let des2 = document.querySelector(".des2");
let des3 = document.querySelector(".des3");
let des4 = document.querySelector(".des4");

let head1 = document.querySelector(".head1");
let head2 = document.querySelector(".head2");
let head3 = document.querySelector(".head3");
let head4 = document.querySelector(".head4");

cameraImg.addEventListener("click", () => {
    des1.innerText = "Photography";
    head1.innerText = "Photoshoot"
    des2.innerText = "Photography";
    head2.innerText = "Wedding Photoshoot"
    des3.innerText = "Photography";
    head3.innerText = "Beach Photoshoot"
    des4.innerText = "Photography";
    head4.innerText = "Nature Photoshoot"
    img1.style.background = "url(/Images/Camera/camera1.jpg)";
    img1.style.backgroundSize = "cover";
    img2.style.background = "url(/Images/Camera/camera2.jpg)";
    img2.style.backgroundSize = "cover";
    img3.style.background = "url(/Images/Camera/camera3.jpg)";
    img3.style.backgroundSize = "cover";
    img4.style.background = "url(/Images/Camera/camera4.jpg)";
    img4.style.backgroundSize = "cover";
    cameraImg.style.background = "#212529";
    cameraImg.classList.add("shadow");
    laptopImg.classList.remove("shadow");
    photoImg.classList.remove("shadow");
    laptopImg.style.background = "rgb(187, 184, 184)";
    photoImg.style.background = "rgb(187, 184, 184)";
});
laptopImg.addEventListener("click", () => {
    des1.innerText = "Web Development";
    head1.innerText = "Recent Project"
    des2.innerText = "Web Development";
    head2.innerText = "Startup Project"
    des3.innerText = "Web Development";
    head3.innerText = "Food Order Project"
    des4.innerText = "Web Development";
    head4.innerText = "Web Advertising Project"
    img1.style.background = "url(/Images/Laptop/laptop1.jpg)";
    img1.style.backgroundSize = "cover";
    img2.style.background = "url(/Images/Laptop/laptop2.jpg)";
    img2.style.backgroundSize = "cover";
    img3.style.background = "url(/Images/Laptop/laptop3.jpg)";
    img3.style.backgroundSize = "cover";
    img4.style.background = "url(/Images/Laptop/laptop4.jpg)";
    img4.style.backgroundSize = "cover";
    laptopImg.classList.add("shadow");
    photoImg.classList.remove("shadow");
    cameraImg.classList.remove("shadow");
    laptopImg.style.background = "#212529";
    cameraImg.style.background = "rgb(187, 184, 184)";
    photoImg.style.background = "rgb(187, 184, 184)";
});
photoImg.addEventListener("click", () => {
    des1.innerText = "Graphic Design";
    head1.innerText = "Traingle Pattern"
    des2.innerText = "Graphic Design";
    head2.innerText = "Abstract Umbrella"
    des3.innerText = "Graphic Design";
    head3.innerText = "Cube Surface Texture"
    des4.innerText = "Graphic Design";
    head4.innerText = "Abstract Line"
    img1.style.background = "url(/Images/Photo/photo1.jpg)";
    img1.style.backgroundSize = "cover";
    img2.style.background = "url(/Images/Photo/photo2.jpg)";
    img2.style.backgroundSize = "cover";
    img3.style.background = "url(/Images/Photo/photo3.jpg)";
    img3.style.backgroundSize = "cover";
    img4.style.background = "url(/Images/Photo/photo4.jpg)";
    img4.style.backgroundSize = "cover";
    img2.src = "/Images/Photo/photo2.jpg"
    img3.src = "/Images/Photo/photo3.jpg"
    img4.src = "/Images/Photo/photo4.jpg"
    photoImg.style.background = "#212529";
    photoImg.classList.add("shadow");
    laptopImg.classList.remove("shadow");
    cameraImg.classList.remove("shadow");
    cameraImg.style.background = "rgb(187, 184, 184)";
    laptopImg.style.background = "rgb(187, 184, 184)";
});

