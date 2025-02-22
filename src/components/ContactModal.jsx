import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

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
    setFormData({ firstName: '', lastName: '', email: '', service: '', message: '' });
    setTimeout(() => setIsFormSubmitted(false), 5000);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="">
        Contact Us
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 relative flex flex-col md:flex-row">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            {/* Contact Info */}
            <div className="bg-gold text-dark flex flex-col justify-center items-center p-6 md:w-1/2 w-full text-center">
              <h1 className="text-3xl font-bold mb-4">
                Ready to elevate your voice?
              </h1>
              <h2 className="font-semibold text-xl mb-2">How to Reach Us</h2>
              <p className="mb-2">
                Email:{' '}
                <a href="mailto:info@kalekyemumo.com" className="underline">
                  info@kalekyemumo.com
                </a>
              </p>
              <p className="mb-4">
                Phone:{' '}
                <a href="tel:+254707233224" className="underline">
                  +254 707 233224
                </a>
              </p>
              <h2 className="font-semibold text-xl mb-2">Follow Us:</h2>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/kalekyemumo/" className="text-dark hover:text-white">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/kalekye-mumo-71591139/" className="text-dark hover:text-white">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://www.youtube.com/@conversationswithkalekye" className="text-dark hover:text-white">
                  <FaYoutube size={24} />
                </a>
                <a href="https://www.facebook.com/kalekyemumo.publicfigure/" className="text-dark hover:text-white">
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 w-full md:w-1/2">
              <h2 className="text-2xl text-center font-semibold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      <p className="text-red-500 text-xs">
                        {formErrors.firstName}
                      </p>
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
                      <p className="text-red-500 text-xs">
                        {formErrors.lastName}
                      </p>
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
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gold"
                >
                  Submit →
                </button>
                {isFormSubmitted && (
                  <p className="text-green-500 text-center mt-4">
                    Message sent successfully!
                  </p>
                )}
                {formErrors.api && (
                  <p className="text-red-500 text-center mt-4">
                    {formErrors.api}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
