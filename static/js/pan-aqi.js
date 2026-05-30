const readingProgressBar = document.getElementById('reading-progress-bar');
  const backToTopButton = document.getElementById('back-to-top');

  function updatePageProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    readingProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    backToTopButton.classList.toggle('show', scrollTop > 200);
  }

  window.addEventListener('scroll', updatePageProgress, { passive: true });
  window.addEventListener('resize', updatePageProgress);
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  updatePageProgress();