document.addEventListener("DOMContentLoaded", () => {
  // 1. Program Category Filter Functionality
  const filterButtons = document.querySelectorAll(".tab-btn");
  const programCards = document.querySelectorAll(".program-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      programCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || filterValue === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 2. Testimonials Slider Functionality
  const track = document.getElementById("testimonialTrack");
  const nextBtn = document.getElementById("nextTestimonial");
  const prevBtn = document.getElementById("prevTestimonial");
  const slides = document.querySelectorAll(".testimonial-card");

  let currentIndex = 0;

  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }, 6000);
  }

  // 3. Counter Animation for Impact Stats
  const statNumbers = document.querySelectorAll(".stat-number");
  let animated = false;

  function animateCounters() {
    statNumbers.forEach((stat) => {
      const target = +stat.getAttribute("data-target");
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.innerText = target.toLocaleString();
          clearInterval(timer);
        } else {
          stat.innerText = Math.ceil(current).toLocaleString();
        }
      }, stepTime);
    });
  }

  window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      const sectionPos = statsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight;

      if (sectionPos < screenPos && !animated) {
        animated = true;
        animateCounters();
      }
    }
  });
});

// 4. Modal Handlers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("active");
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("active");
  }
}

window.addEventListener("click", (e) => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
