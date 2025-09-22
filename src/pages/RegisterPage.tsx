import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Lock, Eye, EyeOff, User, Phone, UserCheck, Globe, ArrowRight, Shield, ShoppingBag, Users } from 'lucide-react';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'traveller',
    language: 'english'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  const benefits = {
    traveller: [
      { icon: MapPin, text: "Discover hidden gems and local attractions" },
      { icon: Shield, text: "Stay safe with real-time alerts and support" },
      { icon: ShoppingBag, text: "Shop authentic local products" }
    ],
    official: [
      { icon: Users, text: "Manage tourism data and visitor insights" },
      { icon: Shield, text: "Coordinate safety and emergency responses" },
      { icon: MapPin, text: "Promote local destinations and events" }
    ],
    seller: [
      { icon: ShoppingBag, text: "Reach tourists with your products" },
      { icon: Users, text: "Connect with verified local guides" },
      { icon: Shield, text: "Secure payment and transaction system" }
    ]
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <img 
                src="/WhatsApp Image 2025-09-21 at 17.45.41_f0d7bec8.jpg" 
                alt="Pehchan Jharkhand" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-3xl font-bold text-gray-800">Pehchan Jharkhand</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h2>
            <p className="text-gray-600">Join thousands exploring Jharkhand</p>
          </div>

          {/* Step Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              <div className={`w-3 h-3 rounded-full ${currentStep >= 1 ? 'bg-emerald-600' : 'bg-gray-300'}`}></div>
              <div className={`w-3 h-3 rounded-full ${currentStep >= 2 ? 'bg-emerald-600' : 'bg-gray-300'}`}></div>
            </div>
          </div>

          {currentStep === 1 ? (
            /* Step 1: Role & Basic Info */
            <div className="space-y-6">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  I am a
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { value: 'traveller', label: 'Traveller', desc: 'Explore destinations and culture' },
                    { value: 'official', label: 'State Official', desc: 'Manage tourism and safety' },
                    { value: 'seller', label: 'Local Seller', desc: 'Sell products to tourists' }
                  ].map((role) => (
                    <label key={role.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="role"
                        value={role.value}
                        checked={formData.role === role.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-xl border-2 transition-all ${
                        formData.role === role.value 
                          ? 'border-emerald-500 bg-emerald-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="font-semibold text-gray-800">{role.label}</div>
                        <div className="text-sm text-gray-600">{role.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Language Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Language
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900"
                  >
                    <option value="english">English</option>
                    <option value="hindi">हिन्दी (Hindi)</option>
                    <option value="santali">संथाली (Santali)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => setCurrentStep(2)}
                className="w-full bg-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <span>Continue</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          ) : (
            /* Step 2: Personal Details */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="+91 Enter your phone"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Create Account
                </button>
              </div>
            </form>
          )}

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Benefits */}
      <div className="hidden lg:block flex-1 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.9), rgba(6, 182, 212, 0.9)), url(https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-white p-8">
            <div className="text-center max-w-md">
              <h3 className="text-4xl font-bold mb-8">
                {formData.role === 'traveller' && 'Explore Like Never Before'}
                {formData.role === 'official' && 'Empower Tourism Growth'}
                {formData.role === 'seller' && 'Grow Your Local Business'}
              </h3>
              
              <div className="space-y-6">
                {benefits[formData.role as keyof typeof benefits].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4 text-left">
                    <div className="bg-white/20 rounded-full p-3">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <p className="text-lg opacity-90">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;