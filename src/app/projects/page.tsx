"use client"
import { Building2, MapPin, Calendar, ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  description: string;
}

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const projects: Project[] = [
    {
      id: 1,
      title: "Lagos Business District Tower",
      category: "Commercial",
      location: "Victoria Island, Lagos",
      year: "2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      status: "Completed",
      description: "A 25-story modern office complex with state-of-the-art facilities"
    },
    {
      id: 2,
      title: "Lekki Luxury Residences",
      category: "Residential",
      location: "Lekki Phase 1, Lagos",
      year: "2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      status: "Ongoing",
      description: "Premium residential apartments with world-class amenities"
    },
    {
      id: 3,
      title: "Abuja International Airport Expansion",
      category: "Infrastructure",
      location: "Abuja, FCT",
      year: "2023",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop",
      status: "Completed",
      description: "Major expansion project for Nigeria's capital airport terminal"
    },
    {
      id: 4,
      title: "Port Harcourt Shopping Mall",
      category: "Commercial",
      location: "Port Harcourt, Rivers",
      year: "2024",
      image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=800&h=600&fit=crop",
      status: "Ongoing",
      description: "Modern shopping and entertainment complex spanning 50,000 sqm"
    },
    {
      id: 5,
      title: "Ikoyi Bridge Rehabilitation",
      category: "Infrastructure",
      location: "Ikoyi, Lagos",
      year: "2023",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop",
      status: "Completed",
      description: "Complete structural rehabilitation and modernization of historic bridge"
    },
    {
      id: 6,
      title: "Banana Island Estate",
      category: "Residential",
      location: "Banana Island, Lagos",
      year: "2025",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      status: "Upcoming",
      description: "Ultra-luxury waterfront residential development"
    },
    {
      id: 7,
      title: "Enugu Industrial Park",
      category: "Industrial",
      location: "Enugu, Enugu State",
      year: "2024",
      image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&h=600&fit=crop",
      status: "Ongoing",
      description: "Large-scale industrial facility with modern manufacturing units"
    },
    {
      id: 8,
      title: "Ikeja City Mall Renovation",
      category: "Commercial",
      location: "Ikeja, Lagos",
      year: "2023",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
      status: "Completed",
      description: "Complete renovation and modernization of existing shopping center"
    },
    {
      id: 9,
      title: "Calabar Coastal Highway",
      category: "Infrastructure",
      location: "Calabar, Cross River",
      year: "2025",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop",
      status: "Upcoming",
      description: "15km coastal highway with modern drainage systems"
    }
  ];

  const categories = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Industrial'];
  const statuses = ['All', 'Completed', 'Ongoing', 'Upcoming'];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const statusMatch = selectedStatus === 'All' || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="min-h-screen  via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative  via-orange-600 to-amber-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=900&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-medium">Our Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-amber-50 max-w-3xl mx-auto">
              Building Nigeria's Future, One Project at a Time
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex items-center gap-2 text-slate-700">
              <Filter className="w-5 h-5" />
              <span className="font-semibold">Filter Projects</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Category Filter */}
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <span className="text-sm font-medium text-slate-600">Category:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                <span className="text-sm font-medium text-slate-600">Status:</span>
                <div className="flex flex-wrap gap-2">
                  {statuses.map(status => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedStatus === status
                          ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-slate-600">
            Showing <span className="font-semibold text-amber-600">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 b from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/90 text-white' 
                      : project.status === 'Ongoing'
                      ? 'bg-blue-500/90 text-white'
                      : 'bg-purple-500/90 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-600/90 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full flex items-center justify-center gap-2 bg-linear-to-br from-amber-600 to-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 group/btn">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No projects found</h3>
            <p className="text-slate-500">Try adjusting your filters to see more projects</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's bring your vision to life with our expertise and commitment to excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-all shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50">
              Get a Quote
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
              Contact Us
            </button>
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
      `}</style>
    </div>
  );
};

export default ProjectsPage;