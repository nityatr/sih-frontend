import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, MapPin, Camera, ShoppingBag, Shield, Clock, ChevronDown } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Namaste! 🙏 I'm your Jharkhand travel assistant. I can help you with destinations, local culture, safety tips, shopping, and more. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      suggestions: [
        "Best places to visit in Jharkhand",
        "Local food recommendations",
        "Safety tips for travelers",
        "Shopping for local handicrafts"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickResponses = {
    destinations: {
      keywords: ['place', 'visit', 'destination', 'tourist', 'attraction', 'sightseeing'],
      response: "🏞️ Here are some must-visit places in Jharkhand:\n\n• **Betla National Park** - Wildlife sanctuary with tigers and elephants\n• **Hundru Falls** - 98m high waterfall, perfect for photography\n• **Deoghar** - Sacred Jyotirlinga temple town\n• **Netarhat** - Hill station known as 'Queen of Chotanagal'\n• **Ranchi** - Capital city with Rock Garden and Tagore Hill\n• **Jamshedpur** - Industrial city with beautiful parks\n\nWould you like detailed information about any specific destination?",
      suggestions: ["Tell me about Betla National Park", "Best time to visit Hundru Falls", "Hotels near Deoghar temple"]
    },
    food: {
      keywords: ['food', 'eat', 'restaurant', 'cuisine', 'dish', 'meal'],
      response: "🍽️ Jharkhand offers amazing local cuisine! Try these:\n\n• **Litti Chokha** - Traditional stuffed wheat balls\n• **Dhuska** - Deep-fried rice and lentil pancakes\n• **Pittha** - Steamed rice cakes\n• **Rugra** - Wild mushroom curry\n• **Bamboo Shoot Curry** - Local tribal delicacy\n• **Handia** - Traditional rice beer\n\nFor restaurants, I recommend trying local dhabas and tribal cuisine centers in Ranchi and Jamshedpur.",
      suggestions: ["Where to find best Litti Chokha?", "Vegetarian food options", "Street food safety tips"]
    },
    safety: {
      keywords: ['safe', 'safety', 'security', 'emergency', 'help', 'danger'],
      response: "🛡️ Safety tips for traveling in Jharkhand:\n\n• **Emergency Numbers**: Police (100), Medical (108), Tourist Helpline (1363)\n• **Best Travel Times**: October to March for pleasant weather\n• **Transportation**: Use registered taxis and government buses\n• **Health**: Carry basic medicines and stay hydrated\n• **Local Customs**: Respect tribal traditions and dress modestly at religious sites\n• **Wildlife Areas**: Follow park guidelines and stay with guides\n\nAlways inform someone about your travel plans and carry emergency contacts.",
      suggestions: ["Tourist helpline numbers", "Medical facilities in Ranchi", "Safe transportation options"]
    },
    shopping: {
      keywords: ['shop', 'buy', 'market', 'handicraft', 'souvenir', 'local'],
      response: "🛍️ Great shopping options in Jharkhand:\n\n• **Handicrafts**: Dokra metal craft, bamboo products, tribal jewelry\n• **Textiles**: Handwoven fabrics, tribal costumes, silk sarees\n• **Markets**: Main Road Market (Ranchi), Sakchi Market (Jamshedpur)\n• **Souvenirs**: Tribal masks, wooden artifacts, stone carvings\n• **Prices**: ₹300-3000 for most handicrafts\n\nBargaining is common in local markets. Look for government emporiums for authentic products.",
      suggestions: ["Best markets in Ranchi", "Authentic tribal jewelry", "How to identify genuine handicrafts"]
    },
    weather: {
      keywords: ['weather', 'climate', 'temperature', 'rain', 'season'],
      response: "🌤️ Jharkhand Weather Guide:\n\n• **Winter (Oct-Feb)**: 10-25°C, best time to visit\n• **Summer (Mar-Jun)**: 25-42°C, can be quite hot\n• **Monsoon (Jul-Sep)**: Heavy rainfall, lush greenery\n\n**Current Season Tips**: Pack light cotton clothes for summer, warm clothes for winter, and rain gear during monsoons. Check weather forecasts before visiting waterfalls or trekking.",
      suggestions: ["Best time to visit waterfalls", "What to pack for winter", "Monsoon travel precautions"]
    }
  };

  const generateBotResponse = (userMessage: string): { response: string; suggestions: string[] } => {
    const message = userMessage.toLowerCase();
    
    for (const [category, data] of Object.entries(quickResponses)) {
      if (data.keywords.some(keyword => message.includes(keyword))) {
        return { response: data.response, suggestions: data.suggestions };
      }
    }

    // Default response for unmatched queries
    return {
      response: "I'd be happy to help you with that! I can assist you with:\n\n🏞️ **Destinations** - Places to visit and attractions\n🍽️ **Food & Dining** - Local cuisine and restaurants\n🛡️ **Safety** - Travel safety and emergency contacts\n🛍️ **Shopping** - Local markets and handicrafts\n🌤️ **Weather** - Climate and best travel times\n\nWhat would you like to know more about?",
      suggestions: [
        "Show me popular destinations",
        "Local food recommendations",
        "Safety tips for travelers",
        "Best shopping places"
      ]
    };
  };

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const { response, suggestions } = generateBotResponse(messageText);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date(),
        suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            1
          </div>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ask me anything about Jharkhand! 🗺️
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 rounded-full p-2">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Jharkhand Travel Assistant</h3>
                <p className="text-xs opacity-90">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                  <div className={`flex items-end space-x-2 ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.isBot 
                        ? 'bg-white text-gray-800 shadow-sm' 
                        : 'bg-emerald-600 text-white'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isBot ? 'text-gray-500' : 'text-emerald-100'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-2 space-y-1">
                      {message.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="block w-full text-left text-xs bg-white hover:bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-lg px-3 py-2 transition-colors duration-200"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-2 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me about Jharkhand..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 text-white p-2 rounded-full transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by AI • Available 24/7 for your travel needs
            </p>
          </div>
        </div>
      )}

      {/* Mobile Responsive Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
          {/* Mobile Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 rounded-full p-2">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Travel Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything about Jharkhand</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                  <div className={`flex items-end space-x-2 ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                    </div>
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.isBot 
                        ? 'bg-white text-gray-800 shadow-sm' 
                        : 'bg-emerald-600 text-white'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isBot ? 'text-gray-500' : 'text-emerald-100'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                  
                  {/* Mobile Suggestions */}
                  {message.suggestions && (
                    <div className="mt-3 space-y-2">
                      {message.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="block w-full text-left text-sm bg-white hover:bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-lg px-4 py-3 transition-colors duration-200"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Mobile Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Mobile Input */}
          <div className="p-4 bg-white border-t border-gray-200 safe-area-bottom">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me about Jharkhand..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-base"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors duration-200"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;