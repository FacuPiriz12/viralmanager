import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Heart, MessageCircle, Send } from 'lucide-react';

const ResXCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=600&fit=crop',
      views: '416K',
      likes: '8.3K',
      comments: '60',
      title: 'Double Chicken Please',
      description: 'The restaurant ranked one of the top 10 cocktail bars in the world.',
      tag: 'Organic Ad'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=600&fit=crop',
      views: '272K',
      likes: '731',
      comments: '19',
      title: 'RESX App',
      description: 'Find your seat with RESX.',
      tag: 'Organic Ad',
      overlay: 'WE\nHAVE\nA SEAT\nFOR\nYOU.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=600&fit=crop',
      views: '245K',
      likes: '572',
      comments: '8',
      title: 'Dinner Tonight?',
      description: 'Check RESX!',
      tag: 'Organic Ad'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=400&h=600&fit=crop',
      views: '181K',
      likes: '456',
      comments: '20',
      title: 'A Brunch Guide to The West Village',
      description: 'Discover the best brunch spots in the West Village.',
      tag: 'Organic Ad'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=600&fit=crop',
      views: '166K',
      likes: '4.9K',
      comments: '14',
      title: 'Papa San',
      description: 'Peruvian Japanese hotspot.',
      tag: 'Organic Ad'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const visiblePosts = [
    posts[(currentIndex - 1 + posts.length) % posts.length],
    posts[currentIndex],
    posts[(currentIndex + 1) % posts.length],
    posts[(currentIndex + 2) % posts.length]
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl font-bold">X</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">ResX</h1>
              <p className="text-gray-600 text-sm">Reservations On Demand</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Monthly revenue:</p>
            <p className="text-2xl font-bold text-green-600">$50,000</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">Newest</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border font-medium hover:bg-gray-50 transition-colors">Oldest</button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto relative px-4">
        <div className="flex gap-4 overflow-hidden py-4">
          {visiblePosts.map((post, idx) => (
            <div
              key={`${post.id}-${idx}`}
              className={`flex-shrink-0 transition-all duration-500 ease-in-out ${
                idx === 1 ? 'w-80 scale-105 z-10' : 'w-64 opacity-60 scale-95'
              }`}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                {/* Image Container */}
                <div className="relative h-96 bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay text for special posts */}
                  {post.overlay && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="text-center text-white font-black text-4xl leading-tight drop-shadow-2xl">
                        {post.overlay.split('\n').map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Instagram badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm">
                    <Instagram className="w-5 h-5 text-pink-600" />
                  </div>

                  {/* Views badge */}
                  <div className="absolute top-4 right-4 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {post.views} Views
                  </div>

                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg leading-tight">{post.title}</h3>
                    <p className="text-white/80 text-xs mt-1 line-clamp-2">{post.description}</p>
                  </div>
                </div>

                {/* Engagement stats */}
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs font-bold">{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-700">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs font-bold">{post.comments}</span>
                      </div>
                    </div>
                    <Send className="w-4 h-4 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors" />
                  </div>
                  
                  <span className="inline-block bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-purple-100">
                    {post.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-all z-20 border border-gray-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-all z-20 border border-gray-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {posts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-300 w-1.5'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ResXCarousel;
