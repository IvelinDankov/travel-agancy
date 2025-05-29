document.querySelectorAll(".popular-tour-nav-link").forEach((btn) => {
  btn.addEventListener("click", function () {
    let selectedType = this.getAttribute("data-type");

    document
      .querySelectorAll(".popular-tour-card")
      .forEach(
        (item) =>
          (item.style.display =
            item.getAttribute("data-type") === selectedType ? "block" : "none")
      );
  });
});
