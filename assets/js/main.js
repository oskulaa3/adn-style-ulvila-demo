(function () {
  var reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || !reveals.length) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(function (el) { observer.observe(el); });

  // Safety net: if something goes wrong, force everything visible after 4s
  setTimeout(function () {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }, 4000);
})();
