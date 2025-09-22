import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Shield, ShoppingBag, Star, Users, Camera, ArrowRight, Globe, Menu, X } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const HeroPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const destinations = [
    {
      name: 'Betla National Park',
      image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      description: 'Wildlife sanctuary with tigers and elephants'
    },
    {
      name: 'Hundru Falls',
      image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.6,
      description: 'Majestic waterfall surrounded by hills'
    },
    {
      name: 'Deoghar Temple',
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      description: 'Sacred Jyotirlinga temple'
    }
  ];

  // const marketplaceItems = [
  //   {
  //     name: 'Handwoven Textiles',
  //     images: [
  //       'https://images.pexels.com/photos/6292/red-blue-orange-pattern.jpg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400'
  //     ],
  //     price: '₹800-2500',
  //     description: 'Traditional tribal fabrics and sarees'
  //   },
  //   {
  //     name: 'Tribal Jewelry',
  //     images: [
  //       'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/4226770/pexels-photo-4226770.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=400'
  //     ],
  //     price: '₹500-3000',
  //     description: 'Authentic silver and brass ornaments'
  //   },
  //   {
  //     name: 'Dokra Metal Craft',
  //     images: [
  //       'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/6292/red-blue-orange-pattern.jpg?auto=compress&cs=tinysrgb&w=400'
  //     ],
  //     price: '₹1200-4000',
  //     description: 'Ancient lost-wax casting technique'
  //   },
  //   {
  //     name: 'Bamboo Products',
  //     images: [
  //       'https://images.pexels.com/photos/4226770/pexels-photo-4226770.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400'
  //     ],
  //     price: '₹200-1500',
  //     description: 'Eco-friendly baskets and home decor'
  //   },
  //   {
  //     name: 'Stone Carvings',
  //     images: [
  //       'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/4226770/pexels-photo-4226770.jpeg?auto=compress&cs=tinysrgb&w=400'
  //     ],
  //     price: '₹800-5000',
  //     description: 'Intricate sculptures and figurines'
  //   },
  //   {
  //     name: 'Tribal Masks',
  //     images: [
  //       'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/6292/red-blue-orange-pattern.jpg?auto=compress&cs=tinysrgb&w=400',
  //       'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400'
  //     ],
  //     price: '₹600-2500',
  //     description: 'Traditional ceremonial masks'
  //   }
  // ];

  const marketplaceItems = [
  {
    name: 'Handwoven Textiles',
    images: [
      'https://thefederal.com/file/2020/01/weaving.jpg',
      'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/6292/red-blue-orange-pattern.jpg?auto=compress&cs=tinysrgb&w=400'
    ],
    price: '₹800-2500',
    description: 'Traditional tribal fabrics and sarees'
  },
  {
    name: 'Tribal Jewellery',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNthFJU7JKunWjN8AQAzp37fA8O8MvQChtZg&s',
      'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    price: '₹500-3000',
    description: 'Authentic silver and brass ornaments'
  },
  {
    name: 'Dokra Metal Craft',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZkxZu3IvbYAnyynmthkZd1hig83cTiDGQg&s',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    price: '₹1200-4000',
    description: 'Ancient lost-wax casting technique'
  },
  {
    name: 'Bamboo Products',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHjj3bOGNzFtmM2ye6_HhpY0aM4fW6QJ6kw&s',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/4226770/pexels-photo-4226770.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    price: '₹200-1500',
    description: 'Eco-friendly baskets and home decor'
  },
  {
    name: 'Stone Carvings',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36Eksg8dAfp3oZdEfP1DyP6v0KlgV1DmwzQ&s',
      'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/4226924/pexels-photo-4226924.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    price: '₹800-5000',
    description: 'Intricate sculptures and figurines'
  },
  {
    name: 'Tribal Masks',
    images: [
      'https://ethnoflorence.wordpress.com/wp-content/uploads/2023/06/gond-mask-2.jpg?w=1024',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=400'
    ],
    price: '₹600-2500',
    description: 'Traditional ceremonial masks'
  }
];


  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-1">
              <img 
                src="/logoremov.png" 
                alt="Pehchan Jharkhand" 
                className="h-16 w-16 object-contain"
              />
              <span className="text-2xl font-bold text-gray-800">Pehchan Jharkhand</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#destinations" className="text-gray-600 hover:text-emerald-600 transition-colors">Destinations</a>
              <a href="#safety" className="text-gray-600 hover:text-emerald-600 transition-colors">Safety</a>
              <a href="#marketplace" className="text-gray-600 hover:text-emerald-600 transition-colors">Marketplace</a>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-gray-500" />
                <select className="text-sm text-gray-600 bg-transparent border-none focus:outline-none">
                  <option>English</option>
                  <option>हिन्दी</option>
                  <option>संथाली</option>
                </select>
              </div>
              <Link 
                to="/login" 
                className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors font-medium"
              >
                Sign In
              </Link>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#destinations" className="block px-3 py-2 text-gray-600">Destinations</a>
                <a href="#safety" className="block px-3 py-2 text-gray-600">Safety</a>
                <a href="#marketplace" className="block px-3 py-2 text-gray-600">Marketplace</a>
                <Link to="/login" className="block px-3 py-2 text-emerald-600 font-medium">Sign In</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        ></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Explore Jharkhand
            <span className="block text-emerald-300">Like Never Before</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Plan trips, discover hidden gems, shop local, and stay safe—all in one comprehensive platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-white/30">
              Learn More
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        {/* 
        <div className="absolute bottom-1/4 right-10 animate-bounce-slow animation-delay-1000">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
            <MapPin className="h-8 w-8 text-white" />
          </div>
        </div>
        */}
      </section>
      

      {/* Popular Destinations */}
      <section id="destinations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most breathtaking places Jharkhand has to offer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <button className="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center space-x-1 group-hover:space-x-2 transition-all">
                    <span>Explore Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-gradient-to-r from-emerald-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Shield className="h-6 w-6" />
              <span className="font-semibold">Safety First</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Safety is Our Priority
            </h2>
            
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-12">
              Real-time safety alerts, emergency contacts, and travel advisories to keep you secure
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Emergency Alerts</h3>
                <p className="opacity-90">Instant notifications about weather, security, and road conditions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Local Support</h3>
                <p className="opacity-90">Connect with verified local guides and tourism officials</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <MapPin className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Safe Routes</h3>
                <p className="opacity-90">Recommended paths and trusted accommodation options</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 rounded-full px-6 py-2 mb-8">
              <ShoppingBag className="h-6 w-6" />
              <span className="font-semibold">Local Marketplace</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Shop Authentic Local Products
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Support local artisans and discover unique handicrafts and traditional items
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {marketplaceItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group hover:-translate-y-2"
              >
                <ImageCarousel 
                  images={item.images} 
                  alt={item.name}
                  className="h-48"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <p className="text-emerald-600 font-semibold text-lg mb-4">{item.price}</p>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:space-x-3">
                    <ShoppingBag className="h-4 w-4" />
                    <span>View Products</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logoremov.png" 
                  alt="Pehchan Jharkhand" 
                  className="h-16 w-16 object-contain"
                />
                <span className="text-2xl font-bold">Pehchan Jharkhand</span>
              </div>
              <p className="text-gray-400">Discover the beauty and culture of Jharkhand with our comprehensive travel platform.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#destinations" className="hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#safety" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#marketplace" className="hover:text-white transition-colors">Marketplace</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">For Users</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/login" className="hover:text-white transition-colors">Sign In</Link></li>
                <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Jharkhand Explorer. All rights reserved. Made with ❤️ for Jharkhand.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroPage;