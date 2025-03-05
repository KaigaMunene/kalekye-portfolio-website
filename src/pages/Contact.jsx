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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required.';
    if (!formData.lastName) errors.lastName = 'Last name is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.service) {
      errors.service = 'Please select a service.';
    }
    if (!formData.message) errors.message = 'Message cannot be empty.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsFormSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      service: '',
      message: '',
    });
    setTimeout(() => setIsFormSubmitted(false), 5000);
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
        <h2 className="font-semibold text-lg md:text-2xl mb-2">How to reach Us</h2>
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
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
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
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gold"
          >
            Submit →
          </button>
          {isFormSubmitted && (
            <p className="text-green-500 text-center mt-4">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
