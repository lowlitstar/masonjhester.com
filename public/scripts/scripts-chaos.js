document.addEventListener('DOMContentLoaded', (event) => {
  const lineSpans = document.querySelectorAll('.line span');

  lineSpans.forEach(span => {
    span.addEventListener('click', () => {
      span.classList.toggle('glow');
    });
  });

  document.getElementById("lightboxedImage").addEventListener("click", function() {
    document.getElementById("lightbox").classList.remove("hidden");
    document.getElementById("lightboxImage").src = this.src;
  });

  document.getElementById("lightbox").addEventListener("click", function() {
    this.classList.add("hidden");
  });
});
