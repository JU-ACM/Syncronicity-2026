import React, { useMemo } from 'react';

interface EventCardProps {
  title?: string;
  duration?: string;
  eventType?: string;
  prizePool?: string;
  date?: string;
  imageUrl?: string;
  className?: string;
  tiltDirection?: 'left' | 'right';
}

const EventCard: React.FC<EventCardProps> = ({ 
  title = "Synchronicity S2",
  duration = "10-hour · on-site",
  eventType = "hackathon",
  prizePool = "₹23,000 prize pool",
  date = "11 April 2025",
  imageUrl,
  className = "",
  tiltDirection = 'left'
}) => {
  // Generate star positions once and memoize them
  const stars = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3
    }))
  , []);

  // Determine rotation based on tilt direction
  const rotationStyle = tiltDirection === 'left' 
    ? { transform: 'perspective(1000px) rotateX(22.5deg) rotateY(22.5deg) rotateZ(-15deg) scale(0.6)' }
    : { transform: 'perspective(1000px) rotateX(22.5deg) rotateY(-22.5deg) rotateZ(15deg) scale(0.6)' };

  return (
    <div className={`relative w-64 h-96 ${className}`} style={rotationStyle}>
      {/* Card container with 3D tilt effect */}
      <div className="relative w-full h-full transform transition-transform duration-300 hover:scale-105" 
           style={{ transformStyle: 'preserve-3d' }}>
        
        {/* Card background with gradient border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-200 via-cyan-100 to-white p-1 shadow-2xl">
          
          {/* Inner card content */}
          <div className="relative h-full w-full rounded-3xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 flex flex-col">
            
            {/* Image container */}
            <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 shadow-lg">
              {imageUrl ? (
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
              ) : (
                /* Astronaut illustration placeholder */
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Cosmic background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500">
                    {/* Stars */}
                    {stars.map((star) => (
                      <div
                        key={star.id}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-70"
                        style={{
                          left: `${star.left}%`,
                          top: `${star.top}%`,
                          animation: `twinkle ${star.duration}s infinite`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Central circle frame */}
                  <div className="relative z-10 w-32 h-32 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Event details */}
            <div className="flex-1 flex flex-col justify-center text-center">
              <h2 className="text-2xl font-bold text-teal-700 mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                {title}
              </h2>
              <p className="text-sm text-teal-600 mb-1">
                {duration}
              </p>
              <p className="text-sm text-teal-600 mb-2">
                {eventType}
              </p>
              <p className="text-base font-semibold text-teal-700 mb-1">
                {prizePool}
              </p>
              <p className="text-sm text-teal-600">
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// // Demo showing hero layout with tilted cards on left and right
// const HeroWithEventCards: React.FC = () => {
//   return (
//     <div className="min-h-screen relative flex items-center justify-center p-8 bg-gradient-to-br from-slate-900 to-slate-800">
      
//       {/* Left Card - tilted left */}
//       <EventCard 
//         className="absolute left-8 top-1/2 -translate-y-1/2"
//         title="Synchronicity S2"
//         duration="10-hour · on-site"
//         eventType="hackathon"
//         prizePool="₹23,000 prize pool"
//         date="11 April 2025"
//         tiltDirection="left"
//       />
      
//       {/* Center Hero Content */}
//       <div className="text-center text-white z-10">
//         <h1 className="text-6xl font-bold mb-4">Welcome to Your Event</h1>
//         <p className="text-xl mb-8">Discover amazing opportunities</p>
//         <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition-colors">
//           Get Started
//         </button>
//       </div>
      
//       {/* Right Card - tilted right */}
//       <EventCard 
//         className="absolute right-8 top-1/2 -translate-y-1/2"
//         title="CodeFest 2025"
//         duration="24-hour · virtual"
//         eventType="coding competition"
//         prizePool="₹50,000 prize pool"
//         date="25 May 2025"
//         tiltDirection="right"
//       />
//     </div>
//   );
// };

// export default HeroWithEventCards;
export { EventCard };