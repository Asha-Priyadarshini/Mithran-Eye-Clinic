import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import bgImage from '../../images/hero-bg.png';

const ContactContainer = () => {
  // State for form data and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Create mailto link with form data
      const subject = `Contact Form Submission from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
      `.trim();
      
      // Create and click a hidden mailto link
      const mailtoLink = `mailto:ashasomasundaralingam@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus({ success: true, message: 'Email client opened. Please send the email to complete your submission.' });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({ success: false, message: 'Failed to open email client. Please try again or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle WhatsApp submission
  const handleWhatsAppSubmit = () => {
    const message = `Hello! I would like to get in touch.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;
    
    const whatsappLink = `https://wa.me/918682088136?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    
    // Show success message
    setSubmitStatus({ success: true, message: 'WhatsApp opened. Please send the message to complete your submission.' });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="relative">
      <div className="bg-cover bg-no-repeat w-full h-full absolute inset-0" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="relative h-scree max-w-[1300px] mx-auto px-4 sm:px-6">
        {/* Contact Header */}
        <div className="pt-28 lg:pt-24 z-20">
          <div className="flex flex-col items-center space-y-4 mb-5">
            <p className="text-primary-900 font-semibold text-lg text-center">-Contact Us</p>
            <h1 className="h1 font-poppins text-3xl lg:text-5xl font-bold text-center leading-8" style={{ lineHeight: 1.3 }}>
              Get In <span className="text-primary-900">Touch</span> With Us
            </h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Have questions about our services or want to schedule an appointment? Reach out to us through any of the contact methods below, and our friendly team will be happy to assist you.
            </p>
          </div>
        </div>

        {/* Contact Information and Form */}
        <div className="grid lg:grid-cols-2 gap-8 pt-8 z-20 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-700 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-grayish-900">Visit Us</h3>
                    <p className="text-gray-600 mt-1">
                      18/25 A-2, Rajakamanagalam Road, Karavilai,<br />
                      Kanyakumari District, Tamil Nadu, India - 629201
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-700 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faPhone} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-grayish-900">Call Us</h3>
                    <p className="text-gray-600 mt-1">General Inquiries: <strong>+91 8682088136</strong></p>
                    <p className="text-gray-600">Appointments: <strong>+91 8300044644</strong></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-700 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-grayish-900">Email Us</h3>
                    <p className="text-gray-600 mt-1">ashasomasundaralingam@gmail.com</p>
                    <p className="text-gray-600">agpneuroclinic@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-grayish-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/mithraneyecare" className="bg-primary-700 p-3 rounded-full text-white hover:bg-primary-800 transition-all duration-300">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://wa.link/8hvhor" className="bg-primary-700 p-3 rounded-full text-white hover:bg-primary-800 transition-all duration-300">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Send us a Message</h2>
              {submitStatus && (
                <div className={`mb-4 p-3 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-grayish-900 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-grayish-900 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-grayish-900 font-medium mb-2">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-grayish-900 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  ></textarea>                </div>
                <div className="flex gap-4">
                  <button 
                    type="submit" 
                    className={`flex-1 px-6 py-3 bg-primary-900 text-white font-semibold rounded-md hover:bg-primary-800 transition-all duration-300 ease-out shadow-md flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    {isSubmitting ? 'Sending...' : 'Send Mail'}
                  </button>
                  <button 
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 ml-3 px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-all duration-300 ease-out shadow-md flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mb-16 z-20">
          <h2 className="text-2xl font-bold text-primary-900 mb-6 text-center">Find Us</h2>
          <div className="w-fullrounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.3971879580116!2d77.38222306968152!3d8.143279699492933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f10211a05b67%3A0x98856a96678844e4!2sMithran%20eye%20clinic%2Fopticals!5e0!3m2!1sen!2sin!4v1747480147571!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Mithran Eye Clinic Location"
            ></iframe>
          </div>
        </div>

        {/* Clinic Hours */}
        <div className="mb-16 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary-900 mb-6 text-center">Clinic Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-semibold text-grayish-900 mb-2">Regular Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monday - Saturday:</span>
                    <span className="font-medium">9:00 AM - 8:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Only Appointment</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="font-semibold text-grayish-900 mb-2">Special Services</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Emergency Care:</span>
                    <span className="font-medium">Available 24/7</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Consultations:</span>
                    <span className="font-medium">Book Online/Phone</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
