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

// Culture & Events section: native horizontal scroll-snap carousel.
// On mobile the track scrolls one card at a time via the chevrons (or swipe),
// and auto-advances every 4s, looping back to the first card at the end.
// On desktop the track becomes a static 3-column grid, so scrollTo is a no-op there.
export function initCultureCarousel() {
  const track = document.getElementById("culture-track");
  const prevBtn = document.getElementById("prev-culture");
  const nextBtn = document.getElementById("next-culture");

  if (!track || !prevBtn || !nextBtn) return;

  let autoSlideInterval;

  function cardStep() {
    const card = track.children[0];
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  }

  function currentIndex() {
    const step = cardStep();
    return step ? Math.round(track.scrollLeft / step) : 0;
  }

  function scrollToIndex(index) {
    track.scrollTo({ left: index * cardStep(), behavior: "smooth" });
  }

  function nextSlide() {
    const total = track.children.length;
    scrollToIndex((currentIndex() + 1) % total);
  }

  function prevSlide() {
    const total = track.children.length;
    scrollToIndex((currentIndex() - 1 + total) % total);
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

  // Pause on hover/touch so the user isn't fighting the timer while swiping
  track.addEventListener("mouseenter", stopAutoSlide);
  track.addEventListener("mouseleave", startAutoSlide);
  track.addEventListener("touchstart", stopAutoSlide, { passive: true });
  track.addEventListener("touchend", startAutoSlide);
}
