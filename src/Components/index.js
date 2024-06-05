document.addEventListener("scroll", () => {
  const image = document.getElementById("founders-image");
  const rect = image.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top <= windowHeight && rect.bottom >= 0) {
    image.style.transform = "scale(1.0)";
  } else {
  image.style.transform = "scale(0.8)";
  }
});
