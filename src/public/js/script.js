document.querySelectorAll(".popular-tour-nav-link").forEach((btn) => {
  btn.addEventListener("click", function () {
    let selectedType = this.getAttribute("data-type");

    document
      .querySelectorAll(".popular-tour-nav-link")
      .forEach((button) => button.classList.remove("active"));

    this.classList.add("active");

    document
      .querySelectorAll(".popular-tour-card")
      .forEach(
        (item) =>
          (item.style.display =
            selectedType === "all" ||
            item.getAttribute("data-type") === selectedType
              ? "block "
              : "none")
      );
  });
});

document.querySelectorAll(".faq-title").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".faq-text").forEach((answ) => {
      answ.style.display = "none";
    });

    const answer = this.nextElementSibling;
    answer.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial-card");
  let index = 0;

  function showTestimonial() {
    testimonials.forEach((testimonial) => {
      testimonial.style.display = "none";
    });
    testimonials[index].style.display = "block";
  }

  document.getElementById("prev").addEventListener("click", function () {
    index = index <= 0 ? testimonials.length - 1 : index - 1;
    showTestimonial();
  });
  document.getElementById("next").addEventListener("click", function () {
    index = index >= testimonials.length - 1 ? 0 : index + 1;
    showTestimonial();
  });

  setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial();
  }, 4000);

  showTestimonial();
});
