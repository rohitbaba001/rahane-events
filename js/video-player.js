// Video player functionality for autoplay on scroll with infinite loop
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('#videos video');
  
  // Intersection Observer to detect when videos come into view
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Video needs to be 50% visible
  };
  
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      
      if (entry.isIntersecting) {
        // Video is in view, play it
        video.play().catch(err => {
          console.log('Autoplay prevented:', err);
        });
      } else {
        // Video is out of view, pause it to save bandwidth
        video.pause();
      }
    });
  }, observerOptions);
  
  // Observe all videos
  videos.forEach(video => {
    videoObserver.observe(video);
    
    // Ensure infinite loop
    video.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    });
  });
});
