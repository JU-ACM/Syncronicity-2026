import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface Props {
  id: number;
  title: string;
  description: string;
  tags: string[];
  categorySlug: string;
}

const Card = ({ id, title, description, tags, categorySlug }: Props) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      },
      {
        threshold: 0.15, // Changed from 0.8 to 0.15 for mobile safety
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      // Added transition classes and a dynamic state check (isVisible) for the fade/slide up
      className={`relative w-full  py-6 md:py-8 cursor-pointer group 
                  transition-all duration-700 ease-out transform 
                  ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"}`}
      onClick={() => navigate(`/problem/${categorySlug}/${id}`)}
    >
      {/* Hardware-accelerated background hover layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out bg-[linear-gradient(to_right,transparent_0%,rgba(239,246,255,0.6)_20%,rgba(239,246,255,0.6)_80%,transparent_100%)]" 
      />

      {/* Relative z-10 so the content naturally sits above the hover layer */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 md:gap-6 w-full">
          {/* Elegant watermark ID */}
          <div className="text-gray-700/20 font-semibold font-bounded text-5xl sm:text-6xl md:text-7xl lg:text-8xl shrink-0 group-hover:text-blue-600 transition-colors duration-300">
            {id}
          </div>
          
          <div className="w-full max-w-2xl pt-2">
            <h4 className="text-base md:text-lg font-semibold font-euclid text-gray-600 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
              {title}
            </h4>
            <p className="text-sm md:text-base font-euclid text-slate-500 mb-4 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs md:text-sm px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full font-euclid font-medium 
                             group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ArrowUpRight icon */}
        <div className="text-gray-600 shrink-0 self-start md:self-center transition-all duration-300 group-hover:text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={72} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

export default Card;