const cursor =
document.querySelector(".cursor");

// MOUSE
document.addEventListener(
"mousemove",
(e) => {

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

});

// CLICK EFECTO
document.addEventListener(
"mousedown",
() => {

cursor.classList.add(
"click"
);

});

document.addEventListener(
"mouseup",
() => {

cursor.classList.remove(
"click"
);

});

// CELULAR
document.addEventListener(
"touchmove",
(e) => {

cursor.style.left =
e.touches[0].clientX + "px";

cursor.style.top =
e.touches[0].clientY + "px";

});
