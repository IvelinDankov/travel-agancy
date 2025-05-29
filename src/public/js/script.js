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
