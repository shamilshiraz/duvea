import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: "Rajasthan-Delhi",
    description: "Experience the magic of Rajasthani culture",
    duration: "4D-5N",
    places: "Jodhpur, Jaisalmer, Jaipur, Agra",
    image: "/rj1.jpg"
  },
  {
    id: 2,
    title: "Maharashtra",
    description: "Discover the beauty of mountain landscapes of maharashtra",
    duration: "4D-5N",
    places: "Zurich, Lucerne, Interlaken",
    image: "/mum.jpg"
  },
  {
    id: 3,
    title: "Himachal-Delhi",
    description: "Immerse yourself in exciting adventures",
    duration: "7D-8N",
    places: "Agra, Old delhi, Manali ,Kullu",
    image: "/him2.avif"
  },
  {
    id: 4,
    title: "Hampi-Gokarna",
    description: "Enjoy stunning architecture blending with water sports",
    duration: "5D-6N",
    places: "Hampi-Gokarna-Dandeli",
    image: "/hampi.jpg"
  },
  {
    id: 5,
    title: "Goa",
    description: "Deep blue tropicals",
    duration: "3D-3N",
    places: "Goa",
    image: "/goa.jpg"
  }
];

const ResponsiveDestinationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNext();
    }
    if (distance < -50) {
      handlePrevious();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="h-[50vh] sm:h-[100vh] flex flex-col">
      {/* Heading Section - Responsive text sizes */}
      <div className="py-8 md:py-3 px-4 text-center">
        <div className="inline-flex items-center justify-center mb-2 md:mb-4">
          <MapPin className="w-5 h-5 md:w-6 md:h-6  mr-2" />
          <h2 className="text-2xl md:text-4xl font-bold ">Our Packages</h2>
        </div>
        <p className="text-sm md:text-base  max-w-xl mx-auto">
          Discover amazing places around the world
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-5xl mx-auto px-4 flex-1 flex items-center py-4">
        <div 
          className="relative w-full overflow-hidden rounded-lg shadow-xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons - Hidden on mobile */}
          <button 
            onClick={handlePrevious}
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button 
            onClick={handleNext}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            disabled={isTransitioning}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Destination Content */}
          <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
            <img
              src={destinations[currentIndex].image}
              alt={destinations[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Content overlay - Responsive text and spacing */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
              <div className="max-w-xl">
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                  {destinations[currentIndex].title}
                </h3>
                <p className="text-sm md:text-lg text-white/90 mb-2">
                  {destinations[currentIndex].description}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/80 text-sm md:text-base">
                  <span className="bg-white/20 px-3 py-1 rounded-full">
                    {destinations[currentIndex].duration}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span>{destinations[currentIndex].places}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots - Responsive positioning */}
          <div className="absolute bottom-2 md:bottom-4 right-0 left-0 flex justify-center space-x-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-4' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
  <p className="px-3">
    Couldn't find one that suits you? <br />
    We have introduced customized packages just for you! Describe your package and we'll see what we can do.
  </p>
  <button className="rounded-full px-3 py-2 text-white bg-green-600 hover:bg-white my-3 hover:text-green-600 duration-300">
    <a href="https://api.whatsapp.com/send/?phone=917902990856&text&type=phone_number&app_absent=0">Discuss your package</a>
  </button>
</div>
    </div>
  );
};

export default ResponsiveDestinationCarousel;