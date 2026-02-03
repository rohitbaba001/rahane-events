# Design Document: Catering Services Website

## Overview

This design specifies a static, single-page website for Caterer's & Catering Services. The website will be built using vanilla HTML5, CSS3, and JavaScript without any frameworks or build tools, ensuring simplicity and ease of deployment. The design emphasizes mobile-first responsive layout, bilingual content presentation, and seamless WhatsApp integration for customer engagement.

The website will feature a modern, clean aesthetic with smooth animations, prominent contact information, and clear call-to-action elements. All content will be statically embedded in the HTML, with CSS handling responsive behavior and JavaScript managing interactive elements like text animation and WhatsApp integration.

## Architecture

### High-Level Structure

The website follows a single-page application (SPA) pattern with multiple sections:

```
┌─────────────────────────────────────┐
│         Header Section              │
│  - Logo.png (from images folder)    │
│  - Animated Tagline (EN/MR)         │
│  - Contact CTAs                     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         Hero Section                │
│  - Main Image/Banner                │
│  - Primary CTA (WhatsApp)           │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│       Services Section              │
│  - Event Management (EN/MR)         │
│  - Catering Services (EN/MR)        │
│  - Service Icons/Images             │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│        About Section                │
│  - Business Information             │
│  - Owner Details                    │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│       Contact Section               │
│  - All Phone Numbers                │
│  - Address                          │
│  - WhatsApp Button                  │
│  - Call Buttons                     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│         Footer Section              │
│  - Copyright                        │
│  - Quick Links                      │
└─────────────────────────────────────┘
```

### Technology Stack

- **HTML5**: Semantic markup for content structure
- **CSS3**: Styling with Flexbox/Grid for layout, CSS animations for transitions
- **Vanilla JavaScript**: DOM manipulation, animation control, WhatsApp integration
- **No Build Tools**: Direct file serving, no compilation required
- **No External Dependencies**: All code self-contained (except optional Google Fonts)

### File Structure

```
catering-website/
├── index.html          # Main HTML file with all content
├── css/
│   ├── styles.css      # Main stylesheet
│   └── responsive.css  # Media queries for responsive design
├── js/
│   ├── animations.js   # Text animation logic
│   └── whatsapp.js     # WhatsApp integration
└── images/
    ├── Logo.png        # Business logo (provided)
    └── [other images]  # Service images, icons, hero banner
```

## Components and Interfaces

### 1. HTML Structure Component

**Purpose**: Provides semantic markup for all website sections.

**Key Elements**:
- `<header>`: Contains business logo (Logo.png), animated tagline, and quick contact links
- `<main>`: Contains hero, services, about, and contact sections
- `<footer>`: Contains copyright and additional links
- `<section>`: Each major content area (hero, services, about, contact)
- `<article>`: Individual service descriptions

**Logo Implementation**:
```html
<header>
  <div class="logo-container">
    <img src="images/Logo.png" alt="Caterer's & Catering Services Logo" class="business-logo">
  </div>
  <div class="animated-tagline">
    <!-- Animated text here -->
  </div>
</header>
```

**Bilingual Content Pattern**:
```html
<p class="bilingual">
  <span class="en">Welcome to our catering services</span>
  <span class="mr">आमच्या कॅटरिंग सेवांमध्ये आपले स्वागत आहे</span>
</p>
```

### 2. Responsive Layout Component

**Purpose**: Adapts layout to different screen sizes using CSS media queries.

**Breakpoints**:
- Mobile: `< 768px` (single column, stacked layout)
- Tablet: `768px - 1024px` (two-column grid where appropriate)
- Desktop: `> 1024px` (multi-column grid, wider spacing)

**CSS Grid/Flexbox Strategy**:
- Header: Flexbox for horizontal alignment on desktop, vertical on mobile
- Services: CSS Grid with 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- Contact: Flexbox for button groups, wrapping on smaller screens

**Touch Target Sizing**:
- All clickable elements: minimum 44x44 pixels
- Buttons: minimum 48px height with adequate padding
- Phone number links: full-width on mobile for easy tapping

### 3. Text Animation Component

**Purpose**: Creates engaging alternating text animation between English and Marathi.

**JavaScript Interface**:
```javascript
class TextAnimator {
  constructor(elementId, words, interval) {
    // elementId: DOM element to animate
    // words: Array of {en: "English", mr: "Marathi"} objects
    // interval: milliseconds between transitions
  }
  
  start() {
    // Begin animation cycle
  }
  
  stop() {
    // Stop animation
  }
  
  _transition(currentWord, nextWord) {
    // Fade out current, fade in next with CSS transitions
  }
}
```

**Animation Behavior**:
- Fade out current word (300ms)
- Swap text content
- Fade in new word (300ms)
- Wait for interval duration
- Repeat cycle

**Accessibility**:
- Check for `prefers-reduced-motion` media query
- If enabled, disable animations and show static text

### 4. WhatsApp Integration Component

**Purpose**: Redirects users to WhatsApp with pre-filled message.

**JavaScript Interface**:
```javascript
class WhatsAppIntegration {
  constructor(phoneNumber, defaultMessage) {
    // phoneNumber: "7058737587" (without country code prefix)
    // defaultMessage: Pre-filled text for user
  }
  
  generateLink() {
    // Returns: "https://wa.me/917058737587?text=<encoded_message>"
  }
  
  openWhatsApp() {
    // Opens WhatsApp in new window/tab or mobile app
  }
  
  _detectMobile() {
    // Returns true if mobile device
  }
}
```

**URL Format**:
- Desktop/Web: `https://wa.me/917058737587?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20catering%20services`
- Mobile: Same URL, but browser will detect and open WhatsApp app if installed

**Pre-filled Message** (Bilingual):
```
Hello, I would like to inquire about your catering services.
नमस्कार, मला तुमच्या कॅटरिंग सेवांबद्दल चौकशी करायची आहे.
```

### 5. Contact Section Component

**Purpose**: Displays all contact information with clickable phone links.

**HTML Structure**:
```html
<section id="contact">
  <h2>Contact Us / संपर्क करा</h2>
  
  <div class="contact-info">
    <h3>Owner / मालक</h3>
    <p>Prop. Kishor Dagadu Rahane</p>
  </div>
  
  <div class="phone-numbers">
    <a href="tel:7058737587" class="phone-link primary">
      📞 7058737587
    </a>
    <a href="tel:9890707768" class="phone-link">
      📞 9890707768
    </a>
    <a href="tel:9049299981" class="phone-link">
      📞 9049299981
    </a>
  </div>
  
  <div class="address">
    <h3>Address / पत्ता</h3>
    <p>Sayyed Baba Chowk, Delhi Naka<br>Sangamner 422605</p>
  </div>
  
  <button id="whatsapp-btn" class="cta-button whatsapp">
    💬 WhatsApp Us / व्हाट्सअॅप करा
  </button>
</section>
```

**Phone Link Behavior**:
- Desktop: May open default calling app or show number
- Mobile: Initiates phone call directly

### 6. Services Display Component

**Purpose**: Presents catering and event management services with bilingual descriptions.

**Content Structure**:
```html
<section id="services">
  <h2>Our Services / आमच्या सेवा</h2>
  
  <div class="services-grid">
    <article class="service-card">
      <img src="assets/images/event-management.jpg" alt="Event Management">
      <h3>Event Management / कार्यक्रम व्यवस्थापन</h3>
      <p class="bilingual">
        <span class="en">Complete event planning and coordination for weddings, corporate events, and celebrations.</span>
        <span class="mr">विवाह, कॉर्पोरेट कार्यक्रम आणि उत्सवांसाठी संपूर्ण कार्यक्रम नियोजन आणि समन्वय.</span>
      </p>
    </article>
    
    <article class="service-card">
      <img src="assets/images/catering.jpg" alt="Catering Services">
      <h3>Catering Services / कॅटरिंग सेवा</h3>
      <p class="bilingual">
        <span class="en">Delicious food preparation and service for all types of events with customizable menus.</span>
        <span class="mr">सानुकूल मेनूसह सर्व प्रकारच्या कार्यक्रमांसाठी स्वादिष्ट अन्न तयारी आणि सेवा.</span>
      </p>
    </article>
  </div>
</section>
```

## Data Models

### Contact Information Model

Since this is a static website, data is embedded directly in HTML. However, for clarity, here's the conceptual model:

```javascript
const businessInfo = {
  name: "Caterer's & Catering Services",
  owner: "Prop. Kishor Dagadu Rahane",
  address: {
    line1: "Sayyed Baba Chowk, Delhi Naka",
    city: "Sangamner",
    pincode: "422605"
  },
  phoneNumbers: [
    { number: "7058737587", primary: true, whatsapp: true },
    { number: "9890707768", primary: false, whatsapp: false },
    { number: "9049299981", primary: false, whatsapp: false }
  ]
};
```

### Bilingual Content Model

```javascript
const bilingualContent = {
  tagline: {
    en: "Premium Catering Services",
    mr: "प्रीमियम कॅटरिंग सेवा"
  },
  services: [
    {
      title: { en: "Event Management", mr: "कार्यक्रम व्यवस्थापन" },
      description: {
        en: "Complete event planning and coordination",
        mr: "संपूर्ण कार्यक्रम नियोजन आणि समन्वय"
      }
    },
    {
      title: { en: "Catering Services", mr: "कॅटरिंग सेवा" },
      description: {
        en: "Delicious food for all occasions",
        mr: "सर्व प्रसंगांसाठी स्वादिष्ट अन्न"
      }
    }
  ]
};
```

### Animation Configuration Model

```javascript
const animationConfig = {
  taglineWords: [
    { en: "Premium", mr: "प्रीमियम" },
    { en: "Quality", mr: "गुणवत्ता" },
    { en: "Delicious", mr: "स्वादिष्ट" },
    { en: "Professional", mr: "व्यावसायिक" }
  ],
  interval: 2000, // milliseconds
  transitionDuration: 300 // milliseconds
};
```



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Text Animation Cycles Through All Words

*For any* animation configuration with N words, running the animation for N intervals should display each word exactly once in sequence.

**Validates: Requirements 4.1**

### Property 2: Animation Continues Indefinitely

*For any* animation instance that is started, the animation should continue cycling through words without stopping unless explicitly stopped by calling the stop() method.

**Validates: Requirements 4.4**

### Property 3: Touch Targets Meet Minimum Size

*For all* interactive elements (buttons, links) on the website, the computed width and height should each be at least 44 pixels to ensure accessibility on touch devices.

**Validates: Requirements 5.4**

### Property 4: CTA Button Color Contrast

*For all* call-to-action buttons, the color contrast ratio between text and background should meet or exceed 4.5:1 for normal text or 3:1 for large text (18pt+) according to WCAG AA standards.

**Validates: Requirements 8.5**

## Error Handling

### WhatsApp Integration Errors

**Scenario**: WhatsApp link fails to open or user doesn't have WhatsApp installed.

**Handling**:
- The wa.me URL will gracefully fall back to WhatsApp Web if the app is not installed
- No JavaScript error handling needed as this is handled by the browser and WhatsApp's infrastructure
- Provide alternative contact methods (phone numbers) prominently displayed

### Animation Errors

**Scenario**: JavaScript fails to load or execute.

**Handling**:
- Use progressive enhancement: display static text by default in HTML
- Animation JavaScript enhances the experience but is not required for core functionality
- CSS fallback: if JavaScript disabled, show first word in animation sequence

**Implementation**:
```html
<span id="animated-tagline" class="animated-text">
  Premium Catering Services
  <noscript>प्रीमियम कॅटरिंग सेवा</noscript>
</span>
```

### Responsive Layout Errors

**Scenario**: CSS fails to load or browser doesn't support modern CSS features.

**Handling**:
- Use mobile-first approach: base styles work on all devices
- Media queries enhance layout for larger screens
- Flexbox/Grid fallbacks: use display: block as base, enhanced with modern layout
- Content remains accessible even without CSS

### Image Loading Errors

**Scenario**: Images fail to load due to network issues.

**Handling**:
- Always include descriptive alt text for accessibility
- Use CSS to style broken image placeholders
- Consider using background colors that match image themes
- Ensure text content is sufficient without images

**Implementation**:
```html
<img src="images/catering.jpg" 
     alt="Delicious catering food spread for events"
     onerror="this.style.display='none'">
```

**Logo Handling**:
- Logo.png should always be available as it's a core branding element
- If Logo.png fails to load, display business name as text fallback
```html
<img src="images/Logo.png" 
     alt="Caterer's & Catering Services" 
     onerror="this.style.display='none'; document.querySelector('.logo-fallback').style.display='block';">
<h1 class="logo-fallback" style="display:none;">Caterer's & Catering Services</h1>
```

### Browser Compatibility Issues

**Scenario**: Older browsers don't support modern JavaScript/CSS features.

**Handling**:
- Use feature detection, not browser detection
- Provide fallbacks for critical features
- Test with @supports for CSS features
- Use polyfills sparingly (keep site lightweight)

**Example**:
```javascript
// Check for prefers-reduced-motion support
if (window.matchMedia) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (prefersReducedMotion.matches) {
    // Disable animations
  }
}
```

### Character Encoding Issues

**Scenario**: Marathi text displays as garbled characters.

**Handling**:
- Always declare UTF-8 encoding in HTML head: `<meta charset="UTF-8">`
- Ensure server sends correct Content-Type header: `text/html; charset=UTF-8`
- Save all HTML files with UTF-8 encoding
- Test Marathi text rendering across browsers

## Testing Strategy

### Overview

The testing strategy employs a dual approach combining unit tests for specific examples and edge cases with property-based tests for universal correctness properties. This ensures comprehensive coverage while maintaining test efficiency.

### Unit Testing

**Purpose**: Verify specific examples, edge cases, and integration points.

**Focus Areas**:
- Content presence verification (phone numbers, address, owner name)
- WhatsApp URL generation with correct parameters
- HTML structure and semantic markup
- Bilingual content presence
- Responsive breakpoint behavior at specific widths
- Static architecture verification (no server-side code)

**Testing Approach**:
- Use DOM parsing to verify HTML structure
- Check for presence of specific text content
- Validate link formats (tel:, https://wa.me/)
- Verify CSS media query breakpoints
- Test JavaScript functions with specific inputs

**Example Unit Tests**:
```javascript
// Test: All three phone numbers are displayed
test('displays all contact numbers', () => {
  const html = loadHTML('index.html');
  expect(html).toContain('7058737587');
  expect(html).toContain('9890707768');
  expect(html).toContain('9049299981');
});

// Test: WhatsApp link has correct format
test('WhatsApp link includes phone number and message', () => {
  const whatsapp = new WhatsAppIntegration('7058737587', 'Hello');
  const link = whatsapp.generateLink();
  expect(link).toContain('wa.me/917058737587');
  expect(link).toContain('text=');
});

// Test: Reduced motion preference disables animation
test('respects prefers-reduced-motion setting', () => {
  // Mock matchMedia to return reduced motion preference
  window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: query === '(prefers-reduced-motion: reduce)',
    media: query
  }));
  
  const animator = new TextAnimator('test', [], 1000);
  expect(animator.isAnimating).toBe(false);
});
```

### Property-Based Testing

**Purpose**: Verify universal properties across all inputs through randomized testing.

**Library**: Use **fast-check** for JavaScript property-based testing.

**Configuration**: Minimum 100 iterations per property test to ensure thorough coverage.

**Property Tests**:

#### Property Test 1: Animation Cycles Through All Words
```javascript
// Feature: catering-website, Property 1: Text Animation Cycles Through All Words
fc.assert(
  fc.property(
    fc.array(fc.record({ en: fc.string(), mr: fc.string() }), { minLength: 1, maxLength: 10 }),
    fc.integer({ min: 100, max: 1000 }),
    (words, interval) => {
      const element = document.createElement('div');
      const animator = new TextAnimator(element, words, interval);
      
      const displayedWords = [];
      for (let i = 0; i < words.length; i++) {
        animator._transition(i);
        displayedWords.push(element.textContent);
      }
      
      // Each word should appear exactly once
      const uniqueWords = new Set(displayedWords);
      return uniqueWords.size === words.length;
    }
  ),
  { numRuns: 100 }
);
```

#### Property Test 2: Animation Continues Indefinitely
```javascript
// Feature: catering-website, Property 2: Animation Continues Indefinitely
fc.assert(
  fc.property(
    fc.array(fc.record({ en: fc.string(), mr: fc.string() }), { minLength: 2, maxLength: 5 }),
    fc.integer({ min: 100, max: 500 }),
    (words, interval) => {
      const element = document.createElement('div');
      const animator = new TextAnimator(element, words, interval);
      
      animator.start();
      
      // Simulate multiple cycles
      const cycles = 3;
      const totalTransitions = words.length * cycles;
      
      // Animation should still be running after multiple cycles
      return animator.isRunning === true;
    }
  ),
  { numRuns: 100 }
);
```

#### Property Test 3: Touch Targets Meet Minimum Size
```javascript
// Feature: catering-website, Property 3: Touch Targets Meet Minimum Size
fc.assert(
  fc.property(
    fc.constantFrom('button', 'a', 'input[type="button"]'),
    (selector) => {
      const elements = document.querySelectorAll(selector);
      
      return Array.from(elements).every(element => {
        const rect = element.getBoundingClientRect();
        return rect.width >= 44 && rect.height >= 44;
      });
    }
  ),
  { numRuns: 100 }
);
```

#### Property Test 4: CTA Button Color Contrast
```javascript
// Feature: catering-website, Property 4: CTA Button Color Contrast
fc.assert(
  fc.property(
    fc.constantFrom('.cta-button', '.phone-link', '#whatsapp-btn'),
    (selector) => {
      const elements = document.querySelectorAll(selector);
      
      return Array.from(elements).every(element => {
        const styles = window.getComputedStyle(element);
        const bgColor = styles.backgroundColor;
        const textColor = styles.color;
        const fontSize = parseFloat(styles.fontSize);
        
        const contrastRatio = calculateContrastRatio(bgColor, textColor);
        const minRatio = fontSize >= 18 ? 3.0 : 4.5;
        
        return contrastRatio >= minRatio;
      });
    }
  ),
  { numRuns: 100 }
);
```

### Integration Testing

**Purpose**: Verify that components work together correctly.

**Focus Areas**:
- WhatsApp button click triggers correct URL
- Animation starts on page load
- Responsive layout changes at breakpoints
- Phone links work on mobile devices

**Approach**:
- Use browser automation tools (Playwright or Puppeteer) for E2E tests
- Test on actual devices or emulators
- Verify cross-browser compatibility manually

### Manual Testing Checklist

**Visual Design**:
- [ ] Color scheme is consistent and professional
- [ ] Typography is readable and appropriate
- [ ] Spacing and alignment are consistent
- [ ] Images are optimized and load quickly

**Functionality**:
- [ ] All phone numbers are clickable and initiate calls on mobile
- [ ] WhatsApp button opens WhatsApp with pre-filled message
- [ ] Text animation cycles smoothly between languages
- [ ] Reduced motion preference disables animations

**Responsive Design**:
- [ ] Layout adapts correctly on mobile (< 768px)
- [ ] Layout adapts correctly on tablet (768px - 1024px)
- [ ] Layout adapts correctly on desktop (> 1024px)
- [ ] Touch targets are large enough on mobile devices

**Accessibility**:
- [ ] All images have descriptive alt text
- [ ] Color contrast meets WCAG AA standards
- [ ] Site is navigable with keyboard only
- [ ] Screen readers can access all content

**Browser Compatibility**:
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)

**Performance**:
- [ ] Page loads within 3 seconds on broadband
- [ ] Images are optimized (WebP with JPEG fallback)
- [ ] No unnecessary JavaScript or CSS
- [ ] Minimal file sizes for fast loading

### Test Data

**Bilingual Content Samples**:
```javascript
const testContent = {
  services: [
    {
      en: "Wedding Catering",
      mr: "विवाह कॅटरिंग"
    },
    {
      en: "Corporate Events",
      mr: "कॉर्पोरेट कार्यक्रम"
    },
    {
      en: "Birthday Parties",
      mr: "वाढदिवस पार्टी"
    }
  ],
  taglines: [
    { en: "Premium", mr: "प्रीमियम" },
    { en: "Quality", mr: "गुणवत्ता" },
    { en: "Delicious", mr: "स्वादिष्ट" }
  ]
};
```

**Contact Information**:
```javascript
const testContactInfo = {
  phoneNumbers: ['7058737587', '9890707768', '9049299981'],
  address: 'Sayyed Baba Chowk, Delhi Naka Sangamner 422605',
  owner: 'Prop. Kishor Dagadu Rahane'
};
```

### Continuous Testing

**Pre-deployment Checklist**:
1. Run all unit tests and ensure 100% pass rate
2. Run all property-based tests with minimum 100 iterations each
3. Perform manual testing on at least 2 different devices
4. Validate HTML using W3C validator
5. Check CSS for errors using CSS validator
6. Test WhatsApp integration on mobile device
7. Verify Marathi text renders correctly across browsers

**Post-deployment Verification**:
1. Test live site on mobile device
2. Verify WhatsApp link works from live site
3. Check page load time using browser dev tools
4. Confirm all images load correctly
5. Test phone number links on mobile device
