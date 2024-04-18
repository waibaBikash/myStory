const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);

    // Get the target section's vertical position from the top of the page
    const targetPosition = section.offsetTop;

    // Smooth scroll animation using requestAnimationFrame
    const startPosition = window.pageYOffset;
    const duration = 750; // Adjust duration for desired scroll speed (milliseconds)

    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = timeElapsed / duration;
      const easeInOutQuad = (t) => t<.5 ? 2*t*t : 1-Math.pow(-2*(t-1), 2)/2;
      const newPosition = startPosition + easeInOutQuad(progress) * (targetPosition - startPosition);

      window.scrollTo(0, newPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  });
});
