import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Honda Iroha",
    role: "Japan",
    content: "Yes the place: Wayanad and the members traveled together were amazing 🌸 Aslam and Adhnan, thank you very much for organizing the beautiful trip, and for adjusting again and again😂🙏I wish all of you had a good rest . And let’s enjoy the rest days in Kerala 💛",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 2,
    name: "Ana C",
    role: "Mexico",
    content: "Sweet days, sweet eyes, sweet smiles of each of you came straight of my hart. Its beaitiful find the love and friendship on each, thank you so much to every one of each you 🩷🩷🩷 it such been a lovely trip, and still continue😍😍",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 3,
    name: "Tsenguun",
    role: "Mongolia",
    content: "Thank you my lovely team! 🌞🥰 Never forget this amazing trip 🙏💙💙💙💙",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 4,
    name: "Abdullah, Mudassir, Faraz, Saad, FJ, Rehan",
    role: "India",
    content: "I would like to take a moment to express our heartfelt gratitude to Aslam Bhai, for making our journey so enriching and unforgettable.Your vast knowledge, passion, and enthusiasm for the places we visited were truly inspiring. Your ability to weave together history, culture, and anecdotes kept us engaged and fascinated throughout our tour.Your dedication, patience, and attention to detail ensured that every aspect of our trip ran smoothly, and we appreciated the extra effort you put in. We will cherish the memories, Thank you once again for an unforgettable adventure!!!❤.",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 5,
    name: "Bindu",
    role: "India",
    content: "To run away from the Hectic schedule we head towards the lap of nature, and trust me this trip was such a great example of this. Had a sooo many cherishable moments and Thanks to you bhaiya for making this trip wonderful....😇",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 6,
    name: "Simran",
    role: "Iran",
    content: "That's so true....and I think we all are still in the Hangover of the trip......and will never get over it or rather don't want to get over it 🥹Thank you Aslam Bhai 🌸",
    avatar: "/api/placeholder/40/40"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-[94%] max-w-4xl border m mx-auto px-4 py-12">
      <div 
        className="relative rounded-lg shadow-lg p-8"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 " />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 " />
        </button>

        {/* Testimonial Content */}
        <div className="flex flex-col items-center text-center">
          <Quote className="w-12 h-12 text-blue-500 mb-4" />
          <p className=" text-lg mb-6">"{testimonials[currentIndex].content}"</p>
  
          <h3 className="font-semibold text-lg">{testimonials[currentIndex].name}</h3>
          <p className="text-gray-500">{testimonials[currentIndex].role}</p>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;