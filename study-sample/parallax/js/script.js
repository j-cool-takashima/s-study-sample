// パララックス対象の要素を取得
const parallaxElements = document.querySelectorAll('.js-parallax');
let isTicking = false;

const updateParallax = () => {
  const scrollY = window.scrollY;

  parallaxElements.forEach((element) => {
    const speed = Number(element.dataset.speed || 0);
    const offset = scrollY * speed;
    element.style.transform = `translateY(${offset}px)`;
  });

  isTicking = false;
};

const handleScroll = () => {
  if (!isTicking) {
    window.requestAnimationFrame(updateParallax);
    isTicking = true;
  }
};

// 初期表示時にも位置を調整
updateParallax();

// スクロールに合わせて更新
window.addEventListener('scroll', handleScroll);
