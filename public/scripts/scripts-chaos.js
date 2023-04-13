const lineSpans = document.querySelectorAll('.line span');

lineSpans.forEach(span => {
  span.addEventListener('click', () => {
    span.classList.toggle('glow');
  });
});
