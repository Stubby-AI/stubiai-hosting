// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =========================
// Testimonial Slider Script
// =========================

// Select all testimonials and navigation buttons
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.testimonial-nav button:first-child');
const nextBtn = document.querySelector('.testimonial-nav button:last-child');

let currentIndex = 0;

// Function to show the active testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

// Initialize first testimonial as active
showTestimonial(currentIndex);

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});



const toggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});






























  const userIcon = document.getElementById("userIcon");
  const modal = document.getElementById("waitlistModal");
  const closeBtn = document.querySelector(".gbh-close");
  const joinBtn = document.getElementById("joinWaitlistBtn");

  userIcon.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.onclick = () => modal.style.display = "none";

  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };

  joinBtn.onclick = () => {
    const email = document.getElementById("waitlistEmail").value;

    if (!email) {
      alert("Please enter a valid email");
      return;
    }

    // Temporary storage (replace later with backend)
    let list = JSON.parse(localStorage.getItem("gbh_waitlist")) || [];
    list.push(email);
    localStorage.setItem("gbh_waitlist", JSON.stringify(list));

    alert("You're on the waitlist 🎉");
    modal.style.display = "none";
  };


