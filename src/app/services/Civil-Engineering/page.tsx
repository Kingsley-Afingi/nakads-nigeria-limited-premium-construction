
"use client"
import { ArrowRight, CheckCircle2, Hammer, Layers, Droplet, MapPin, Users, Award, Clock, Shield, TrendingUp, Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';

const CivilEngineeringPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Road Construction",
      description: "Comprehensive highway and road construction services including asphalt paving, concrete roads, and road rehabilitation projects."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Structural Design",
      description: "Advanced structural engineering and design services for buildings, bridges, and other infrastructure projects."
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Drainage Systems",
      description: "Expert design and construction of drainage and water management systems for flood control and urban development."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Site Development",
      description: "Complete site preparation, excavation, grading, and foundation work for construction projects of all scales."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation & Planning",
      description: "Initial site assessment, feasibility studies, and comprehensive project planning with stakeholders."
    },
    {
      number: "02",
      title: "Design & Engineering",
      description: "Detailed engineering design, structural analysis, and technical specifications development."
    },
    {
      number: "03",
      title: "Approval & Permitting",
      description: "Handling all regulatory requirements, permits, and approvals from relevant authorities."
    },
    {
      number: "04",
      title: "Construction Execution",
      description: "Professional execution with quality materials, skilled workforce, and modern equipment."
    },
    {
      number: "05",
      title: "Quality Assurance",
      description: "Rigorous testing, inspection, and quality control throughout the construction process."
    },
    {
      number: "06",
      title: "Project Handover",
      description: "Final inspection, documentation, and smooth handover with comprehensive warranty support."
    }
  ];

  const whyChooseUs = [
    "Experienced team of certified civil engineers",
    "State-of-the-art construction equipment",
    "Compliance with international standards",
    "Competitive pricing and transparent billing",
    "On-time project delivery guarantee",
    "Comprehensive warranty and after-sales support"
  ];

  const featuredProjects = [
    {
      image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=800",
      category: "Road Construction",
      title: "Lagos-Ibadan Express Highway",
      description: "45km highway rehabilitation and expansion project"
    },
    {
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800",
      category: "Drainage & Water Management",
      title: "Abuja Urban Drainage System",
      description: "Comprehensive drainage infrastructure for flood prevention"
    },
    {
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
      category: "Structural Engineering",
      title: "Port Harcourt Bridge Project",
      description: "Design and construction of major transportation bridge"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=2070"
            alt="Civil Engineering"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Civil <span className='text-[#D4AF37]'>Engineering Excellence</span> 
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive civil engineering solutions building Nigeria's infrastructure foundation with precision, innovation, and unwavering commitment to quality
            </p>
            <button className="bg-linear-to-br from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50 inline-flex items-center gap-2 hover:scale-105 transform">
              Request a Quote
              <ArrowRight className="w-5 h-5 " />
            </button>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Building <span className='text-[#D4AF37]'>Infrastructure That Lasts</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Our civil engineering division specializes in delivering comprehensive infrastructure solutions that form the backbone of Nigeria's development. From major highway projects to complex drainage systems, we bring technical expertise, innovative approaches, and proven execution capabilities.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              With over 15 years of experience and 200+ successfully completed civil engineering projects, we have established ourselves as a trusted partner for government agencies, private developers, and corporate clients across Nigeria. Our commitment to quality, safety, and sustainability ensures that every project we deliver stands the test of time.
            </p>
          </div>

          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-amber-600 mb-2">200+</div>
              <p className="text-slate-700 font-semibold">Projects Completed</p>
            </div>
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold text-blue-600 mb-2">500km+</div>
              <p className="text-slate-700 font-semibold">Roads Constructed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Large Image Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <img
            src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2070"
            alt="Civil engineering work"
            className="w-full h-125 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Civil <span className='text-[#D4AF37]'>Engineering Services</span> 
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions covering every aspect of civil engineering and infrastructure development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:-translate-y-2 opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="w-16 h-16 bg-linear-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
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
            Our <span className='text-[#D4AF37]'>Process</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A systematic approach ensuring quality, efficiency, and client satisfaction
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
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform hover:rotate-12 transition-transform duration-300">
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
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className='text-[#D4AF37]'>Our Civil Engineering Services</span> 
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Partner with industry leaders who combine technical excellence with proven project delivery capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 opacity-0 animate-fadeInUp hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0 mt-1 animate-bounce" style={{ animationDelay: `${index * 200}ms` }} />
                <p className="text-lg text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing our excellence in civil engineering across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
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
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-br from-amber-600 via-orange-600 to-amber-700 text-white py-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-yellow-400/20 to-transparent animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Civil Engineering Project?
          </h2>
          <p className="text-xl md:text-2xl text-amber-50 mb-8">
            Contact us today for a free consultation and detailed project proposal
          </p>
          <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 hover:scale-105 transform">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CivilEngineeringPage;