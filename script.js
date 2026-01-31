let slides = document.querySelector(".slides");
let index = 0;

let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if(startX - endX > 50) index++;
  if(endX - startX > 50) index--;

  index = Math.max(0, Math.min(index, 2));
  slides.style.transform = `translateX(-${index * 100}vw)`;
});
