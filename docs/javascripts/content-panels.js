document.addEventListener("DOMContentLoaded", () => {
  const documentBody = document.querySelector(".rst-content .document .section");
  if (!documentBody || documentBody.querySelector(".studio-hero")) return;

  const firstHeading = Array.from(documentBody.children).find((element) => element.tagName === "H1");
  if (firstHeading) {
    const intro = document.createElement("header");
    intro.className = "studio-page-intro";
    firstHeading.before(intro);
    intro.append(firstHeading);

    const openingCopy = intro.nextElementSibling;
    if (openingCopy?.tagName === "P") intro.append(openingCopy);
  }

  Array.from(documentBody.querySelectorAll(":scope > h2")).forEach((heading) => {
    const panel = document.createElement("section");
    panel.className = "studio-section-panel";
    heading.before(panel);
    panel.append(heading);

    let next = panel.nextElementSibling;
    while (next && next.tagName !== "H2") {
      const current = next;
      next = current.nextElementSibling;
      panel.append(current);
    }
  });
});
