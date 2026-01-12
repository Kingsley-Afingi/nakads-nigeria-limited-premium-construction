"use client"
import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Briefcase, Factory, Hammer, Sparkles, Building2, Trash2, Clock, Shield, Leaf, Users } from 'lucide-react';

const CleaningServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Office Cleaning",
      description: "Daily or periodic professional cleaning services for corporate offices, ensuring pristine work environments."
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial Cleaning",
      description: "Specialized cleaning for manufacturing facilities, warehouses, and industrial complexes with heavy-duty equipment."
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Post-Construction Cleaning",
      description: "Thorough cleaning and debris removal after construction or renovation projects for immediate occupancy."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Sanitization Services",
      description: "Deep sanitization and disinfection services ensuring hygiene compliance and health safety standards."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Facility Maintenance",
      description: "Ongoing facility maintenance cleaning including floors, windows, restrooms, and common areas."
    },
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: "Waste Management",
      description: "Comprehensive waste collection, disposal, and recycling services for commercial and industrial facilities."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Site Assessment",
      description: "Detailed facility inspection to understand cleaning requirements and develop customized service plans."
    },
    {
      number: "02",
      title: "Custom Plan Development",
      description: "Creating tailored cleaning schedules and protocols based on facility type and client needs."
    },
    {
      number: "03",
      title: "Team Deployment",
      description: "Assigning trained, certified cleaning professionals with appropriate equipment and supplies."
    },
    {
      number: "04",
      title: "Quality Execution",
      description: "Systematic cleaning following established protocols with attention to detail and efficiency."
    },
    {
      number: "05",
      title: "Quality Inspection",
      description: "Regular quality checks and inspections ensuring consistent service standards."
    },
    {
      number: "06",
      title: "Continuous Improvement",
      description: "Ongoing optimization based on client feedback and performance metrics."
    }
  ];

  const whyChooseUs = [
    "Trained and certified cleaning staff",
    "Eco-friendly cleaning products",
    "Advanced cleaning equipment",
    "Flexible scheduling options",
    "24/7 service availability",
    "Quality assurance inspections",
    "Competitive pricing packages",
    "Emergency cleaning response"
  ];

  const facilities = [
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
      title: "Corporate Offices"
    },
    {
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800",
      title: "Manufacturing Plants"
    },
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
      title: "Healthcare Facilities"
    },
    {
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800",
      title: "Educational Institutions"
    },
    {
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800",
      title: "Shopping Centers"
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      title: "Hospitality Venues"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-slate-300 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070"
            alt="Commercial Cleaning"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Floating sparkle animations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-sparkle"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-400 rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-sparkle" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-sparkle" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-40 right-1/4 w-3 h-3 bg-green-300 rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Commercial <span className="text-green-500">Cleaning</span> Excellence
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Premium commercial and industrial cleaning services maintaining the highest standards of hygiene, cleanliness, and facility presentation
            </p>
            <button className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg shadow-green-600/30 hover:shadow-green-600/50 inline-flex items-center gap-2 hover:scale-105 transform">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Professional Cleaning Solutions
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Nakads Nigeria Limited's commercial cleaning division delivers comprehensive cleaning and facility maintenance services that create healthier, more productive environments. We understand that cleanliness is essential to business success, employee well-being, and customer satisfaction.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our team of trained professionals uses industry-leading equipment, eco-friendly products, and proven methodologies to deliver exceptional results. Whether you need daily office cleaning, industrial facility maintenance, or specialized sanitization services, we provide customized solutions that meet your specific requirements and budget.
            </p>
          </div>

          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:scale-105 transition-transform duration-300 animate-pulse-slow">
              <div className="text-5xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-slate-700 font-semibold">Active Clients</p>
            </div>
            <div className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100 hover:scale-105 transition-transform duration-300 animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
              <div className="text-5xl font-bold text-teal-600 mb-2">24/7</div>
              <p className="text-slate-700 font-semibold">Service Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Large Image Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070"
            alt="Professional cleaning"
            className="w-full h-125 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions tailored to diverse commercial and industrial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:-translate-y-2 opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="w-16 h-16 bg-linear-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Service Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A systematic approach ensuring consistent quality and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-500 opacity-0 animate-fadeInUp hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform hover:rotate-12 transition-transform duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 mt-4">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Our Cleaning Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the difference of professional cleaning with dedicated service excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 opacity-0 animate-fadeInUp hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1 animate-bounce" style={{ animationDelay: `${index * 200}ms` }} />
                <p className="text-base text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Facilities We Serve
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trusted cleaning solutions across diverse commercial and industrial sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {facility.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Eco-Friendly Section */}
      <div className="bg-linear-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070"
                alt="Eco-friendly cleaning"
                className="w-full h-125 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                <Leaf className="w-5 h-5" />
                <span className="font-semibold">Sustainable Practices</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Eco-Friendly Cleaning Solutions
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                We are committed to environmental sustainability and the health of our clients. Our cleaning services utilize eco-friendly, non-toxic products that are safe for people, pets, and the planet while delivering exceptional cleaning results.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                From biodegradable cleaning agents to water-efficient equipment and sustainable waste management practices, we ensure that our cleaning operations minimize environmental impact while maximizing cleanliness and hygiene standards.
              </p>
              <button className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg shadow-green-600/30 hover:shadow-green-600/50 inline-flex items-center gap-2 hover:scale-105 transform">
                Learn More About Our Green Practices
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-green-600 via-emerald-600 to-green-700 text-white py-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-teal-400/20 to-transparent animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Cleaner Facility?
          </h2>
          <p className="text-xl md:text-2xl text-green-50 mb-8">
            Contact us today for a free facility assessment and customized cleaning proposal
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 hover:scale-105 transform">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(15px) scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-50px) translateX(-15px) scale(1.5);
            opacity: 1;
          }
          75% {
            transform: translateY(-30px) translateX(-25px) scale(1.2);
            opacity: 0.8;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-sparkle {
          animation: sparkle 5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default CleaningServicesPage;