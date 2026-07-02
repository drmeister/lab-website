/* ============================================================
   Lightbox — click any <figure> image to open it enlarged in a
   popup, with its <figcaption> shown underneath.
   No dependencies. Auto-wires every <figure> on the page, so
   figures you add later work with no extra code.
   Close with the × button, a click on the backdrop, or Escape.
   ============================================================ */
(function () {
  "use strict";

  // Build the overlay once and reuse it.
  var overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Enlarged figure");
  overlay.innerHTML =
    '<button class="lightbox__close" type="button" aria-label="Close">×</button>' +
    '<div class="lightbox__inner">' +
      '<img class="lightbox__img" alt="">' +
      '<p class="lightbox__cap"></p>' +
    "</div>";
  document.body.appendChild(overlay);

  var imgEl = overlay.querySelector(".lightbox__img");
  var capEl = overlay.querySelector(".lightbox__cap");

  function open(src, alt, caption) {
    imgEl.src = src;
    imgEl.alt = alt || "";
    capEl.textContent = caption || "";
    capEl.style.display = caption ? "" : "none";
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";   // stop background scroll
  }

  function close() {
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
    imgEl.src = "";                             // free the large image
  }

  // Make every figure image open the lightbox.
  document.querySelectorAll("figure img").forEach(function (img) {
    img.addEventListener("click", function () {
      var fig = img.closest("figure");
      var cap = fig ? fig.querySelector("figcaption") : null;
      var capText = cap ? cap.textContent.replace(/\s+/g, " ").trim() : "";
      open(img.currentSrc || img.src, img.alt, capText);
    });
  });

  // Close on backdrop click or the × button (but not when clicking the image).
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay || e.target.classList.contains("lightbox__close")) close();
  });

  // Close on Escape.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
  });
})();
