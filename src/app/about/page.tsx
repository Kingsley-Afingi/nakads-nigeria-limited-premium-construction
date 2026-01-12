
"use client";
import { Award, Target, Eye, Heart, Users, Lightbulb, Shield, Handshake, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreValues = [
    {
      icon: <Award className="w-10 h-10" />,
      title: "Excellence",
      description: "We pursue excellence in every project, setting industry standards and exceeding expectations consistently."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices form the foundation of all our business relationships."
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork, working closely with clients and partners to achieve shared goals."
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Innovation",
      description: "Embracing cutting-edge technology and methodologies to deliver efficient, sustainable solutions."
    }
  ];

  const expertise = [
    "Road Construction & Rehabilitation",
    "Structural Engineering & Design",
    "Drainage & Water Management Systems",
    "Building Construction & Renovation",
    "Mechanical & Electrical Engineering",
    "Project Management & Consultation",
    "Industrial & Commercial Cleaning",
    "Facility Management Services"
  ];

  const leadership = [
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
      name: "Engr. Jerry .A. Nakade",
      position: "Chief Executive Officer",
      description: "With over 25 years of experience in civil engineering and construction management, Engr. Nakade leads our vision for infrastructure excellence."
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
      name: "Mrs. Folake Adeleke",
      position: "Chief Operating Officer",
      description: "A seasoned operations expert with 18 years of experience in engineering services and project delivery optimization."
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
      name: "Engr. Olumide Okafor",
      position: "Chief Technical Officer",
      description: "Leading our technical innovation with expertise in structural design and advanced engineering solutions."
    }
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System"
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management"
    },
    {
      title: "OHSAS 18001",
      description: "Occupational Health & Safety"
    },
    {
      title: "COREN Certified",
      description: "Council for Regulation of Engineering in Nigeria"
    }
  ];

  const images = [
    "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=800",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="About us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-orange-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-amber-300 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About <span className='text-[#D4AF37]'>Nakads Nigeria Limited</span> 
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto">
              Building Nigeria's infrastructure with excellence, innovation, and unwavering commitment to quality
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            Our <span className='text-[#D4AF37]'>Story</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Founded in 2008, Nakads Nigeria Limited emerged from a vision to transform Nigeria's construction and engineering landscape. What started as a small civil engineering firm has grown into one of Nigeria's most trusted names in construction, engineering services, and commercial cleaning.
            </p>
            <p>
              Over the past 15+ years, we have successfully completed over 500 projects across Nigeria, ranging from major highway constructions to complex engineering installations and large-scale commercial facility management. Our commitment to quality, safety, and customer satisfaction has earned us partnerships with leading government agencies, multinational corporations, and private enterprises.
            </p>
            <p>
              Today, with a team of over 200 certified professionals and state-of-the-art equipment, we continue to set new standards in the industry, driving innovation while maintaining the core values that have defined our success from day one.
            </p>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 opacity-0 animate-fadeInUp transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <img
                src={image}
                alt={`Company image ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-linear-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className={`bg-white rounded-2xl p-10 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-500 opacity-0 animate-fadeInUp hover:-translate-y-2`}
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 bg-linear-to-r from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 hover:text-[#D4AF37]">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To deliver world-class construction and engineering solutions that exceed client expectations, contribute to Nigeria's infrastructure development, and create sustainable value for all stakeholders through innovation, quality, and unwavering commitment to excellence.
              </p>
            </div>

            {/* Vision */}
            <div className={`bg-white rounded-2xl p-10 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-500 opacity-0 animate-fadeInUp hover:-translate-y-2`}
              style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 bg-linear-to-r from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 hover:text-[#D4AF37]">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed ">
                To be Nigeria's most trusted and innovative construction and engineering company, recognized for setting industry benchmarks in quality, sustainability, and customer satisfaction, while expanding our footprint across West Africa and contributing to regional infrastructure excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className='text-[#D4AF37]'>Core Values</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The principles that guide our operations and define our corporate culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:-translate-y-2 opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="w-16 h-16 bg-linear-to-r from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our spa <span className='text-[#D4AF37]'>Expertise</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive capabilities across construction, engineering, and facility management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 opacity-0 animate-fadeInUp hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0 mt-1 animate-bounce" style={{ animationDelay: `${index * 150}ms` }} />
                <p className="text-base text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className='text-[#D4AF37]'>Leadership</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the experienced professionals driving our vision and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {leader.name}
                </h3>
                <p className="text-amber-600 font-semibold mb-4">
                  {leader.position}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Certifications <span className='text-[#D4AF37]'> & Accreditations</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Industry-recognized certifications demonstrating our commitment to quality and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:-translate-y-2 opacity-0 animate-fadeInUp text-center"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="w-20 h-20 bg-linear-to-r from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 transition-all duration-300 mx-auto">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-slate-600">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
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
      `}</style>
    </div>
  );
};

export default AboutPage;
