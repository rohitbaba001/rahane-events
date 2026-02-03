/**
 * WhatsApp Integration for Catering Services Website
 * Handles WhatsApp link generation and redirection with pre-filled bilingual message
 */

class WhatsAppIntegration {
  /**
   * @param {string} phoneNumber - Phone number without country code (e.g., "7058737587")
   * @param {string} defaultMessage - Pre-filled message for WhatsApp
   */
  constructor(phoneNumber, defaultMessage) {
    this.phoneNumber = phoneNumber;
    this.defaultMessage = defaultMessage;
  }

  /**
   * Generates WhatsApp wa.me URL with phone number and pre-filled message
   * @returns {string} Complete WhatsApp URL
   */
  generateLink() {
    // Add India country code (91) to phone number
    const fullPhoneNumber = `91${this.phoneNumber}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(this.defaultMessage);
    
    // Return wa.me URL format
    return `https://wa.me/${fullPhoneNumber}?text=${encodedMessage}`;
  }

  /**
   * Opens WhatsApp in new window/tab or mobile app
   */
  openWhatsApp() {
    const whatsappUrl = this.generateLink();
    
    // Open in new window/tab
    // On mobile devices, browser will automatically detect and open WhatsApp app if installed
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }

  /**
   * Detects if user is on a mobile device
   * @returns {boolean} True if mobile device detected
   */
  _detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}

// Initialize WhatsApp integration when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Bilingual pre-filled message
  const defaultMessage = `Hello, I would like to inquire about your catering services.
नमस्कार, मला तुमच्या कॅटरिंग सेवांबद्दल चौकशी करायची आहे.`;

  // Create WhatsApp integration instance with phone number 7058737587
  const whatsappIntegration = new WhatsAppIntegration('7058737587', defaultMessage);

  // Wire WhatsApp button click event
  const whatsappButton = document.getElementById('whatsapp-btn');
  
  if (whatsappButton) {
    whatsappButton.addEventListener('click', function() {
      whatsappIntegration.openWhatsApp();
    });
  }
});
