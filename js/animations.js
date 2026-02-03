/**
 * TextAnimator - Handles animated text transitions between multiple words
 * Supports bilingual content with smooth fade in/out effects
 */
class TextAnimator {
  /**
   * @param {HTMLElement} element - DOM element to animate
   * @param {Array<{en: string, mr: string}>} words - Array of bilingual word objects
   * @param {number} interval - Milliseconds between transitions
   */
  constructor(element, words, interval) {
    this.element = element;
    this.words = words;
    this.interval = interval;
    this.currentIndex = 0;
    this.isRunning = false;
    this.intervalId = null;
    this.prefersReducedMotion = false;

    // Check for reduced motion preference
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.prefersReducedMotion = mediaQuery.matches;
      
      // Listen for changes to the preference
      mediaQuery.addEventListener('change', (e) => {
        this.prefersReducedMotion = e.matches;
        if (this.prefersReducedMotion && this.isRunning) {
          this.stop();
        }
      });
    }

    // Set initial text if words array is not empty
    if (this.words.length > 0) {
      this.element.textContent = this.words[0].en;
    }
  }

  /**
   * Start the animation cycle
   */
  start() {
    // Don't start if reduced motion is preferred
    if (this.prefersReducedMotion) {
      return;
    }

    // Don't start if already running
    if (this.isRunning) {
      return;
    }

    // Don't start if no words to animate
    if (this.words.length === 0) {
      return;
    }

    this.isRunning = true;
    
    // Start the animation cycle
    this.intervalId = setInterval(() => {
      this._transition();
    }, this.interval);
  }

  /**
   * Stop the animation cycle
   */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
  }

  /**
   * Perform transition to next word with fade out/in effect
   * @private
   */
  _transition() {
    // Calculate next index
    const nextIndex = (this.currentIndex + 1) % this.words.length;
    const nextWord = this.words[nextIndex];

    // Fade out current text
    this.element.style.opacity = '0';
    this.element.style.transition = 'opacity 300ms ease-in-out';

    // After fade out completes, change text and fade in
    setTimeout(() => {
      // Update text content (alternate between English and Marathi)
      // Use English for even indices, Marathi for odd indices
      if (nextIndex % 2 === 0) {
        this.element.textContent = nextWord.en;
      } else {
        this.element.textContent = nextWord.mr;
      }

      // Fade in new text
      this.element.style.opacity = '1';
      
      // Update current index
      this.currentIndex = nextIndex;
    }, 300);
  }
}
