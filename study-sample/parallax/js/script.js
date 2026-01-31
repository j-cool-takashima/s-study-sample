// パララックス対象の要素を取得
const parallaxElements = document.querySelectorAll('.js-parallax');

const handleParallax = () => {
  const scrollY = window.scrollY;

  parallaxElements.forEach((element) => {
    const speed = Number(element.dataset.speed || 0);
    const offset = scrollY * speed;
    element.style.transform = `translateY(${offset}px)`;
  });
};

// 初期表示時にも位置を調整
handleParallax();

// スクロールに合わせて更新
window.addEventListener('scroll', handleParallax);
