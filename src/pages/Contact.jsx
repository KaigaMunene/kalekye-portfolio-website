import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactPage = () => {
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

  // Function to reset form completely
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      service: '',
      message: '',
    });
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

      // Show success message
      setIsFormSubmitted(true);

      // Clear form data immediately after successful validation
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsFormSubmitted(false);
      }, 5000);
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
    <section
      className="flex flex-col md:flex-row w-full min-h-screen font-forum"
      id="contact"
    >
      {/* Left Side: Contact Info */}
      <div className="bg-gold text-dark flex flex-col justify-center items-center px-12 py-16 md:w-1/2">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold mt-4 mb-6">
          Ready to elevate your voice{' '}
        </h1>
        <h2 className="font-semibold text-lg md:text-2xl mb-2">
          How to reach Us
        </h2>
        <p className="mb-2">
          Email:{' '}
          <Link to="mailto:info@kalekyemumo.com" className="underline">
            info@kalekyemumo.com
          </Link>
        </p>
        <p className="mb-4">
          Phone:{' '}
          <Link to="tel:+254707233224" className="underline">
            +254 707 233224
          </Link>
        </p>
        <h2 className="font-semibold text-lg md:text-2xl mb-2">Follow Us:</h2>
        <div className="flex justify-center space-x-6">
          <Link to="#" className="text-dark hover:text-white">
            <FaInstagram size={24} />
          </Link>
          <Link to="#" className="text-dark hover:text-white">
            <FaLinkedin size={24} />
          </Link>
          <Link to="#" className="text-dark hover:text-white">
            <FaYoutube size={24} />
          </Link>
          <Link to="#" className="text-dark hover:text-white">
            <FaFacebook size={24} />
          </Link>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="bg-cream flex flex-col justify-center items-center px-12 py-16 md:w-1/2">
        <h2 className="text-xl md:text-3xl font-semibold text-dark mb-6">
          Get in Touch
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-6"
          key={isFormSubmitted ? 'submitted' : 'active'}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {formErrors.firstName && (
                <p className="text-red-500 text-xs">{formErrors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {formErrors.lastName && (
                <p className="text-red-500 text-xs">{formErrors.lastName}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs">{formErrors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Service of Interest
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>
                Select a Service
              </option>
              <option value="hosting">Hosting</option>
              <option value="voiceover">Voiceover</option>
              <option value="own-your-mic">Own Your Mic</option>
              <option value="other">Other</option>
            </select>
            {formErrors.service && (
              <p className="text-red-500 text-xs">{formErrors.service}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-xs">{formErrors.message}</p>
            )}
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 py-3 rounded-md font-semibold transition-all duration-200 flex items-center justify-center ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-gold'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                'Submit →'
              )}
            </button>
            <button
              type="button"
              onClick={resetForm}
              disabled={isSubmitting}
              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Clear
            </button>
          </div>
          {isFormSubmitted && (
            <div className="text-center mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-600 font-medium text-sm">
                ✓ Message sent successfully! We&apos;ll get back to you soon.
              </p>
            </div>
          )}
          {formErrors.api && (
            <div className="text-center mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 font-medium text-sm" role="alert">
                {formErrors.api}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
