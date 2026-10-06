document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".tool-tab-carousel");

  carousels.forEach((carousel) => {
    const tabs = carousel.querySelector(".tool-subtools");
    const expandButton = carousel.closest(".tool-card")?.querySelector(".tool-tab-expand");
    const card = carousel.closest(".tool-card");
    if (!tabs || !expandButton || !card) return;
    expandButton.dataset.expandLabel = expandButton.getAttribute("aria-label");

    const update = () => {
      const maxScroll = Math.max(0, tabs.scrollWidth - tabs.clientWidth);
      const expanded = carousel.classList.contains("is-expanded");
      const overflowing = expanded || maxScroll > 1;
      carousel.classList.toggle("has-overflow", overflowing);
      card.classList.toggle("has-tool-overflow", overflowing);
      expandButton.setAttribute("aria-label", expanded ? expandButton.dataset.collapseLabel : expandButton.dataset.expandLabel);
    };

    expandButton.addEventListener("click", () => {
      const expanded = carousel.classList.toggle("is-expanded");
      expandButton.setAttribute("aria-expanded", String(expanded));
      if (!expanded) tabs.scrollTo({ left: 0, behavior: "auto" });
      update();
    });

    let drag = null;
    let suppressClick = false;

    tabs.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0 ||
          carousel.classList.contains("is-expanded") || tabs.scrollWidth <= tabs.clientWidth + 1) return;
      suppressClick = false;
      drag = { id: event.pointerId, x: event.clientX, scroll: tabs.scrollLeft, moved: false };
    });

    tabs.addEventListener("pointermove", (event) => {
      if (!drag || event.pointerId !== drag.id) return;
      const distance = event.clientX - drag.x;
      if (!drag.moved && Math.abs(distance) < 6) return;
      if (!drag.moved) {
        drag.moved = true;
        tabs.setPointerCapture(event.pointerId);
        tabs.classList.add("is-dragging");
      }
      event.preventDefault();
      tabs.scrollLeft = drag.scroll - distance;
    });

    const finishDrag = (event) => {
      if (!drag || event.pointerId !== drag.id) return;
      suppressClick = drag.moved && event.type !== "pointercancel";
      drag = null;
      tabs.classList.remove("is-dragging");
    };
    window.addEventListener("pointerup", finishDrag);
    window.addEventListener("pointercancel", finishDrag);
    tabs.addEventListener("lostpointercapture", finishDrag);
    tabs.addEventListener("dragstart", (event) => event.preventDefault());
    tabs.addEventListener("click", (event) => {
      if (suppressClick && event.detail !== 0) {
        event.preventDefault();
        event.stopPropagation();
        suppressClick = false;
      }
    }, true);

    tabs.addEventListener("scroll", update, { passive: true });
    new ResizeObserver(update).observe(tabs);
    update();
  });
});
