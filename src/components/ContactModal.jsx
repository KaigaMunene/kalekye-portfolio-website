import { useState, useEffect, useRef } from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaTimes,
} from 'react-icons/fa';

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus first input when modal opens
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    setFormErrors({});
    setIsFormSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const errors = {};
    if (!formData.firstName.trim())
      errors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.service) {
      errors.service = 'Please select a service.';
    }
    if (!formData.message.trim()) errors.message = 'Message cannot be empty.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      // Send email via backend API
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send email');
      }

      setIsFormSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setIsFormSubmitted(false);
        closeModal();
      }, 3000);
    } catch (error) {
      console.error('Email sending error:', error);
      setFormErrors({
        api:
          error.message ||
          'Failed to send message. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full h-full text-inherit bg-transparent border-none cursor-pointer px-4 py-2 rounded hover:bg-opacity-10 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
        aria-label="Open contact modal"
      >
        Contact Us
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4 transition-opacity duration-300"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative flex flex-col lg:flex-row transform transition-all duration-300 scale-100"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1 sm:p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Close modal"
            >
              <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Contact Info */}
            <div className="bg-gold text-dark flex flex-col justify-center items-center p-4 sm:p-6 lg:w-1/2 w-full text-center">
              <h1
                id="modal-title"
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4"
              >
                Ready to elevate your voice?
              </h1>
              <h2 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                How to Reach Us
              </h2>
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <p className="text-sm sm:text-base">
                  <span className="font-medium">Email:</span>{' '}
                  <a
                    href="mailto:info@kalekyemumo.com"
                    className="underline hover:text-brown transition-colors duration-200 break-all"
                  >
                    info@kalekyemumo.com
                  </a>
                </p>
                <p className="text-sm sm:text-base">
                  <span className="font-medium">Phone:</span>{' '}
                  <a
                    href="tel:+254707233224"
                    className="underline hover:text-brown transition-colors duration-200"
                  >
                    +254 707 233224
                  </a>
                </p>
              </div>
              <h2 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4">
                Follow Us:
              </h2>
              <div className="flex space-x-2 sm:space-x-4">
                <a
                  href="https://www.instagram.com/kalekyemumo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:text-white hover:scale-110 transition-transform duration-200 p-1 sm:p-2 rounded-full hover:bg-dark"
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kalekye-mumo-71591139/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:text-white hover:scale-110 transition-transform duration-200 p-1 sm:p-2 rounded-full hover:bg-dark"
                  aria-label="Follow us on LinkedIn"
                >
                  <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@conversationswithkalekye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:text-white hover:scale-110 transition-transform duration-200 p-1 sm:p-2 rounded-full hover:bg-dark"
                  aria-label="Follow us on YouTube"
                >
                  <FaYoutube size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.facebook.com/kalekyemumo.publicfigure/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:text-white hover:scale-110 transition-transform duration-200 p-1 sm:p-2 rounded-full hover:bg-dark"
                  aria-label="Follow us on Facebook"
                >
                  <FaFacebook size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-4 sm:p-6 w-full lg:w-1/2">
              <h2 className="text-xl sm:text-2xl text-center font-semibold text-gray-900 mb-4 sm:mb-6">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      ref={firstInputRef}
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full p-2 sm:p-3 border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm sm:text-base ${
                        formErrors.firstName
                          ? 'border-red-500'
                          : 'border-gray-300'
                      }`}
                      placeholder="Enter your first name"
                      aria-describedby={
                        formErrors.firstName ? 'firstName-error' : undefined
                      }
                    />
                    {formErrors.firstName && (
                      <p
                        id="firstName-error"
                        className="text-red-500 text-xs mt-1"
                        role="alert"
                      >
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full p-2 sm:p-3 border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm sm:text-base ${
                        formErrors.lastName
                          ? 'border-red-500'
                          : 'border-gray-300'
                      }`}
                      placeholder="Enter your last name"
                      aria-describedby={
                        formErrors.lastName ? 'lastName-error' : undefined
                      }
                    />
                    {formErrors.lastName && (
                      <p
                        id="lastName-error"
                        className="text-red-500 text-xs mt-1"
                        role="alert"
                      >
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2 sm:p-3 border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm sm:text-base ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                    aria-describedby={
                      formErrors.email ? 'email-error' : undefined
                    }
                  />
                  {formErrors.email && (
                    <p
                      id="email-error"
                      className="text-red-500 text-xs mt-1"
                      role="alert"
                    >
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1"
                  >
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full p-2 sm:p-3 border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm sm:text-base ${
                      formErrors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-describedby={
                      formErrors.service ? 'service-error' : undefined
                    }
                  >
                    <option value="" disabled>
                      Select a Service
                    </option>
                    <option value="hosting">Hosting Services</option>
                    <option value="voiceover">Voiceover Services</option>
                    <option value="host-program">Host Program</option>
                    <option value="public-speaking">
                      Public Speaking Program
                    </option>
                    <option value="voiceover-program">Voiceover Program</option>
                    <option value="other">Other</option>
                  </select>
                  {formErrors.service && (
                    <p
                      id="service-error"
                      className="text-red-500 text-xs mt-1"
                      role="alert"
                    >
                      {formErrors.service}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-2 sm:p-3 border rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-vertical text-sm sm:text-base ${
                      formErrors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                    aria-describedby={
                      formErrors.message ? 'message-error' : undefined
                    }
                  />
                  {formErrors.message && (
                    <p
                      id="message-error"
                      className="text-red-500 text-xs mt-1"
                      role="alert"
                    >
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-md font-semibold transition-all duration-200 flex items-center justify-center text-sm sm:text-base ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-black text-white hover:bg-gold hover:scale-105 transform'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message →'
                  )}
                </button>
                {isFormSubmitted && (
                  <div className="text-center mt-3 sm:mt-4 p-2 sm:p-3 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-600 font-medium text-xs sm:text-sm">
                      ✓ Message sent successfully! We&apos;ll get back to you
                      soon.
                    </p>
                  </div>
                )}
                {formErrors.api && (
                  <div className="text-center mt-3 sm:mt-4 p-2 sm:p-3 bg-red-50 border border-red-200 rounded-md">
                    <p
                      className="text-red-600 font-medium text-xs sm:text-sm"
                      role="alert"
                    >
                      {formErrors.api}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
