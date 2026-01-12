"use client"
import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, Wrench, ClipboardList, Network, Wind, Gauge, Building2, Heart, Hotel, GraduationCap, Landmark, Factory } from 'lucide-react';

const EngineeringServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrical Engineering",
      description: "Complete electrical design, installation, and maintenance services including power systems, lighting, and backup solutions."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Mechanical Engineering",
      description: "HVAC systems, mechanical installations, equipment maintenance, and optimization for industrial and commercial facilities."
    },
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "Project Management",
      description: "End-to-end project management services ensuring timely delivery, cost control, and quality assurance."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Systems Integration",
      description: "Integrated building systems, automation solutions, and smart facility management technologies."
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "HVAC Solutions",
      description: "Climate control systems design, installation, and maintenance for optimal comfort and energy efficiency."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Energy Management",
      description: "Energy audits, efficiency optimization, and sustainable power solutions for reduced operational costs."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "Comprehensive site evaluation, requirements analysis, and technical feasibility studies."
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Detailed engineering designs, technical specifications, and project timeline development."
    },
    {
      number: "03",
      title: "System Procurement",
      description: "Sourcing quality equipment and materials from certified suppliers and manufacturers."
    },
    {
      number: "04",
      title: "Installation & Setup",
      description: "Professional installation by certified engineers with strict adherence to safety standards."
    },
    {
      number: "05",
      title: "Testing & Commissioning",
      description: "Rigorous testing, system optimization, and performance validation before handover."
    },
    {
      number: "06",
      title: "Training & Support",
      description: "Comprehensive user training and ongoing technical support for optimal system operation."
    }
  ];

  const industries = [
    { icon: <Factory className="w-12 h-12" />, name: "Manufacturing" },
    { icon: <Heart className="w-12 h-12" />, name: "Healthcare" },
    { icon: <Building2 className="w-12 h-12" />, name: "Commercial Buildings" },
    { icon: <Hotel className="w-12 h-12" />, name: "Hospitality" },
    { icon: <GraduationCap className="w-12 h-12" />, name: "Education" },
    { icon: <Landmark className="w-12 h-12" />, name: "Government" }
  ];

  const whyChooseUs = [
    "Certified electrical and mechanical engineers",
    "Advanced diagnostic and testing equipment",
    "24/7 emergency response services",
    "Preventive maintenance programs",
    "Energy efficiency optimization",
    "Compliance with international standards",
    "Warranty and post-installation support",
    "Spare parts and equipment supply"
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070"
            alt="Engineering Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Engineering <span className='text-[#D4AF37]'>Services</span> Excellence
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Professional mechanical and electrical engineering solutions delivering efficiency, reliability, and innovation for modern facilities and industrial operations
            </p>
            <button className="bg-linear-to-br from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50 inline-flex items-center gap-2 hover:scale-105 transform">
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
              Advanced Engineering Solutions
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Our engineering services division brings together mechanical and electrical engineering expertise to deliver comprehensive solutions for industrial, commercial, and institutional facilities. We specialize in system design, installation, optimization, and maintenance services that ensure operational efficiency and reliability.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              From HVAC systems and electrical installations to complex automation and energy management solutions, our team of certified engineers leverages cutting-edge technology and industry best practices to deliver exceptional results. We serve clients across multiple sectors, providing tailored engineering solutions that meet specific operational requirements and regulatory standards.
            </p>
          </div>

          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:scale-105 transition-transform duration-300 animate-pulse-slow">
              <div className="text-5xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-slate-700 font-semibold">Systems Installed</p>
            </div>
            <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:scale-105 transition-transform duration-300 animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
              <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-slate-700 font-semibold">Certified Engineers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Large Image Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img
            src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070"
            alt="Engineering work"
            className="w-full h-125 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Engineering Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive mechanical and electrical engineering solutions for diverse facility needs
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
                <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
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
            A structured approach ensuring optimal performance and client satisfaction
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
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform hover:rotate-12 transition-transform duration-300">
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

      {/* Industries Section */}
      <div className="bg-linear-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Trusted engineering solutions across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 group hover:-translate-y-2 opacity-0 animate-fadeInUp text-center"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 inline-block">
                  {industry.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Our Engineering Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Partner with engineering experts who combine technical excellence with proven service delivery
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
                <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-1 animate-bounce" style={{ animationDelay: `${index * 200}ms` }} />
                <p className="text-base text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology & Innovation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070"
              alt="Engineering technology"
              className="w-full h-125 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Technology & Innovation
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              We leverage the latest engineering technologies and methodologies to deliver cutting-edge solutions. Our commitment to innovation ensures that your facility benefits from the most efficient, reliable, and sustainable engineering systems available.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              From building automation and IoT integration to energy management systems and predictive maintenance, we implement smart solutions that reduce operational costs, improve efficiency, and future-proof your infrastructure investments.
            </p>
            <button className="bg-linear-to-br from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 inline-flex items-center gap-2 hover:scale-105 transform">
              Discuss Your Engineering Needs
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-br from-blue-600 via-indigo-600 to-blue-700 text-white py-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-cyan-400/20 to-transparent animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your Facility Systems?
          </h2>
          <p className="text-xl md:text-2xl text-blue-50 mb-8">
            Contact us today for expert engineering consultation and customized solutions
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 hover:scale-105 transform">
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 1;
          }
          75% {
            transform: translateY(-20px) translateX(-20px);
            opacity: 0.6;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
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

export default EngineeringServicesPage;