(() => {
  const images = [
    "/images/background-01.jpg",
    "/images/background-02.jpg",
    "/images/background-03.jpg",
    "/images/background-04.jpg",
    "/images/background-05.jpg",
    "/images/background-06.jpg",
  ];

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const slideshow = document.createElement("div");
  slideshow.id = "studio-background-slideshow";
  slideshow.setAttribute("aria-hidden", "true");
  if (prefersReducedMotion) slideshow.classList.add("studio-background-static");

  const activeImages = prefersReducedMotion ? images.slice(0, 1) : images;
  activeImages.forEach((image, index) => {
    const frame = document.createElement("div");
    frame.className = "studio-background-frame";
    frame.style.backgroundImage = `url("${image}")`;
    frame.style.animationDelay = `${-index * 10}s`;
    slideshow.appendChild(frame);
  });

  document.body.prepend(slideshow);
})();
