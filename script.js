// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Form Booking Submit
  const form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.name.value;
      const date = form.date.value;
      const people = form.people.value;
      const pickup = form.pickup.value;

      const message = `Halo Toba Travel! Saya ingin booking:\nNama: ${name}\nTanggal: ${date}\nJumlah Orang: ${people}\nTitik Jemput: ${pickup}`;
      const whatsappURL = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    });
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.add('hidden');
    });
  });
});
