export function initProjectSlider() {
  const track = document.getElementById("project-track");
  const prevBtn = document.getElementById("prev-project");
  const nextBtn = document.getElementById("next-project");

  if (!track || !prevBtn || !nextBtn) return;

  const slides = Array.from(track.children);
  const totalSlides = slides.length; // 5 slides (Clone 3, 1, 2, 3, Clone 1)
  
  let currentIndex = 1; // Start at index 1 (First real slide: KURASHICOM)
  let autoSlideInterval;
  let isTransitioning = false;

  // Set initial position immediately (without animation)
  track.style.transition = 'none';
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  function updateSlider() {
    isTransitioning = true;
    track.style.transition = 'transform 500ms ease-in-out';
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Monitor transition end to perform instant jump for infinite loop
  track.addEventListener('transitionend', () => {
    isTransitioning = false;
    
    // Reached Clone 1 at the end (index 4) -> Jump back to index 1 instantly
    if (currentIndex === totalSlides - 1) {
      track.style.transition = 'none';
      currentIndex = 1;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    // Reached Clone 3 at the start (index 0) -> Jump forward to index 3 instantly
    if (currentIndex === 0) {
      track.style.transition = 'none';
      currentIndex = totalSlides - 2;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });

  function nextSlide() {
    if (isTransitioning) return;
    currentIndex++;
    updateSlider();
  }

  function prevSlide() {
    if (isTransitioning) return;
    currentIndex--;
    updateSlider();
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  }

  prevBtn.addEventListener("click", () => {
    prevSlide();
    startAutoSlide(); // Reset autoplay timer
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoSlide(); // Reset autoplay timer
  });

  // Start initial autoplay
  startAutoSlide();

  // Pause on hover
  const viewport = track.parentElement;
  if (viewport) {
    viewport.addEventListener("mouseenter", stopAutoSlide);
    viewport.addEventListener("mouseleave", startAutoSlide);
  }
}
