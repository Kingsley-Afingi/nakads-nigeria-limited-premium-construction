
"use client"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Zap } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 via-slate-900/90 to-slate-900/95"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and detailed proposal
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Location */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-100 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Our Location</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              No.10 Rumuagholu, Off Rumuokoro<br />
              Obio-Akpor L.G.A<br />
              Port Harcourt, Rivers State
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-100 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Phone Numbers</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              0906 779 2881<br />
              0805 124 3180
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-100 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Email Address</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              nakadsconsltd@gmail.com
            </p>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-100 hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Business Hours</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Open 24 Hours<br />
              Monday - Sunday<br />
              Emergency Services Available
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours
              </p>

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                      placeholder="0906 779 2881"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your company name (optional)"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="civil">Civil Engineering</option>
                    <option value="engineering">Engineering Services</option>
                    <option value="cleaning">Commercial Cleaning</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || submitSuccess}
                  className="w-full bg-linear-to-br from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitSuccess ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* 24/7 Availability */}
            <div className=" from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">24/7 Availability</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Monday - Sunday</p>
                    <p className="text-sm text-slate-600">Open 24 Hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Emergency Services</p>
                    <p className="text-sm text-slate-600">24/7</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">Customer Support</p>
                    <p className="text-sm text-slate-600">24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">15+ Years Industry Experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">500+ Successful Projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">200+ Certified Professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">24/7 Emergency Response</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900">ISO Certified Quality Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Location Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Office Location</h2>
            <p className="text-xl text-slate-600">Visit us at our office in Port Harcourt, Rivers State</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Map/Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800"
                alt="Port Harcourt Office"
                className="w-full h-100 object-cover"
              />
            </div>

            {/* Office Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Port Harcourt Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Address</p>
                    <p className="text-slate-600">
                      No.10 Rumuagholu, Off Rumuokoro, Obio-Akpor L.G.A
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Phone</p>
                    <p className="text-slate-600">0906 779 2881</p>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full  from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg shadow-amber-600/30">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;