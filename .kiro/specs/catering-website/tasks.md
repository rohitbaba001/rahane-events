# Implementation Plan: Catering Services Website

## Overview

This implementation plan breaks down the static catering website into discrete, incremental coding tasks. Each task builds on previous work, starting with the basic HTML structure and progressively adding styling, interactivity, and responsive behavior. The plan follows a mobile-first approach and includes property-based tests to verify correctness properties from the design document.

## Tasks

- [x] 1. Set up project structure and create base HTML
  - Create project directory structure (css/, js/, images/ folders)
  - Create index.html with proper DOCTYPE, meta tags, and UTF-8 encoding
  - Add semantic HTML5 structure (header, main, footer)
  - Include Logo.png reference in header with fallback text
  - Add all contact information (phone numbers, address, owner name) in HTML
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 9.1, 9.4_

- [ ]* 1.1 Write unit tests for HTML structure
  - Test that all three phone numbers are present in HTML
  - Test that business address is present
  - Test that owner name is present
  - Test that Logo.png is referenced in header
  - Test that HTML uses UTF-8 encoding
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 3.3_

- [x] 2. Create bilingual content sections
  - Add services section with event management and catering descriptions
  - Implement bilingual content structure with English and Marathi text
  - Add about section with business information
  - Ensure proper Devanagari Unicode characters for Marathi text
  - _Requirements: 3.1, 3.3, 6.1, 6.2, 6.3_

- [ ]* 2.1 Write unit tests for bilingual content
  - Test that service descriptions exist in both English and Marathi
  - Test that Marathi text uses proper Unicode encoding
  - Test that both languages are present in service sections
  - _Requirements: 3.1, 3.3, 6.3_

- [x] 3. Implement contact section with clickable links
  - Create contact section with all three phone numbers as tel: links
  - Add WhatsApp button placeholder (functionality added later)
  - Add call-to-action buttons for phone contact
  - Format address with proper line breaks
  - _Requirements: 1.1, 1.2, 1.3, 8.1, 8.2, 8.3_

- [ ]* 3.1 Write unit tests for contact links
  - Test that phone numbers use tel: protocol
  - Test that WhatsApp button element exists
  - Test that CTA buttons are present
  - _Requirements: 8.1, 8.2, 8.3_

- [x] 4. Create base CSS stylesheet
  - Create css/styles.css with mobile-first base styles
  - Define color scheme variables for consistency
  - Style header with logo and business name
  - Style contact section with proper spacing
  - Add typography styles (font families, sizes, weights)
  - _Requirements: 7.1, 7.2, 7.3_

- [x] 5. Implement responsive CSS layout
  - Create css/responsive.css with media queries
  - Add mobile styles (< 768px): single column, stacked layout
  - Add tablet styles (768px - 1024px): two-column grid for services
  - Add desktop styles (> 1024px): multi-column layout
  - Ensure touch targets are minimum 44x44 pixels
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ]* 5.1 Write property test for touch target sizes
  - **Property 3: Touch Targets Meet Minimum Size**
  - **Validates: Requirements 5.4**
  - Test that all interactive elements (buttons, links) have minimum 44x44 pixel dimensions
  - Use property-based testing with 100+ iterations
  - _Requirements: 5.4_

- [x] 6. Style call-to-action buttons with accessible colors
  - Design CTA button styles with contrasting colors
  - Ensure color contrast ratio meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
  - Add hover and active states for buttons
  - Style WhatsApp button distinctively
  - _Requirements: 8.5_

- [ ]* 6.1 Write property test for color contrast
  - **Property 4: CTA Button Color Contrast**
  - **Validates: Requirements 8.5**
  - Test that all CTA buttons meet minimum contrast ratios
  - Calculate contrast ratios programmatically
  - Use property-based testing with 100+ iterations
  - _Requirements: 8.5_

- [x] 7. Checkpoint - Verify static structure and styling
  - Ensure all tests pass, ask the user if questions arise
  - Manually verify responsive layout at different breakpoints
  - Check that all content is visible and properly formatted

- [x] 8. Implement WhatsApp integration JavaScript
  - Create js/whatsapp.js with WhatsAppIntegration class
  - Implement generateLink() method to create wa.me URL with phone number 7058737587
  - Add pre-filled bilingual message parameter
  - Implement openWhatsApp() method to open link in new window/tab
  - Add mobile detection to handle WhatsApp app opening
  - Wire WhatsApp button click event to openWhatsApp()
  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [ ]* 8.1 Write unit tests for WhatsApp integration
  - Test that generateLink() includes correct phone number (917058737587)
  - Test that URL includes pre-filled message parameter
  - Test that link opens in new window (target="_blank" or window.open)
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 9. Implement text animation JavaScript
  - Create js/animations.js with TextAnimator class
  - Implement constructor to accept element, words array, and interval
  - Implement start() method to begin animation cycle
  - Implement stop() method to halt animation
  - Implement _transition() method with fade out/in effects using CSS transitions
  - Add prefers-reduced-motion detection to disable animations if needed
  - _Requirements: 4.1, 4.4, 4.5_

- [ ]* 9.1 Write property test for animation cycling
  - **Property 1: Text Animation Cycles Through All Words**
  - **Validates: Requirements 4.1**
  - Test that animation displays each word exactly once in sequence
  - Use property-based testing with random word arrays
  - Run with 100+ iterations
  - _Requirements: 4.1_

- [ ]* 9.2 Write property test for continuous animation
  - **Property 2: Animation Continues Indefinitely**
  - **Validates: Requirements 4.4**
  - Test that animation continues cycling without stopping
  - Verify animation runs through multiple cycles
  - Use property-based testing with 100+ iterations
  - _Requirements: 4.4_

- [ ]* 9.3 Write unit test for reduced motion
  - Test that animation is disabled when prefers-reduced-motion is set
  - Mock matchMedia to return reduced motion preference
  - Verify static text is displayed instead
  - _Requirements: 4.5_

- [x] 10. Wire animation to header tagline
  - Add animated tagline element to header in HTML
  - Define bilingual word pairs for animation (Premium/प्रीमियम, Quality/गुणवत्ता, etc.)
  - Initialize TextAnimator on page load with tagline element
  - Set animation interval to 2000ms
  - Ensure static fallback text is visible if JavaScript disabled
  - _Requirements: 4.1, 4.4_

- [x] 11. Add service images and optimize
  - Add placeholder images or icons for services section
  - Ensure images have descriptive alt text
  - Add error handling for failed image loads
  - Optimize image file sizes for fast loading
  - _Requirements: 6.4, 7.5_

- [x] 12. Final integration and polish
  - Link CSS files to index.html
  - Link JavaScript files to index.html
  - Add noscript fallbacks for JavaScript features
  - Verify all sections are properly connected
  - Test that static architecture has no server-side dependencies
  - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [ ]* 12.1 Write unit tests for static architecture
  - Test that no server-side code exists in files
  - Test that no database connections are present
  - Test that all content is embedded in HTML
  - _Requirements: 9.1, 9.3, 9.4_

- [ ] 13. Final checkpoint - Comprehensive testing
  - Ensure all tests pass, ask the user if questions arise
  - Manually test on mobile device
  - Verify WhatsApp integration works on mobile
  - Test phone number links initiate calls on mobile
  - Check responsive layout at all breakpoints
  - Verify Marathi text renders correctly
  - Validate HTML and CSS using W3C validators

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties with 100+ iterations each
- Unit tests validate specific examples and edge cases
- The implementation follows mobile-first responsive design principles
- All JavaScript features have progressive enhancement fallbacks
