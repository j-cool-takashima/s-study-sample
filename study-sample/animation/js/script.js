// 画面に入った要素へ BEM Modifier を追加する
const observeTargets = document.querySelectorAll('.js-observe');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('motion-card--visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

observeTargets.forEach((target) => {
  observer.observe(target);
});
