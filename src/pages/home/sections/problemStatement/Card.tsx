import { ArrowUpRight } from "lucide-react";

interface Props{
  id:number;
  title:string;
  description:string;
  tags:string[];
}

const Card=({id,title,description,tags}:Props)=>{
  return (
    <div className="w-full border-b border-gray-300 py-6 md:py-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 md:gap-6 w-full">
          <div className="text-[#10A0CC] font-semibold font-bounded text-5xl sm:text-6xl md:text-7xl lg:text-8xl shrink-0">
            {id}
          </div>
          <div className="w-full max-w-2xl">
            <h4 className="text-base md:text-lg font-semibold font-euclid text-gray-900 mb-2">
              {title}
            </h4>
            <p className="text-sm md:text-base font-euclid text-gray-600 mb-4 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs md:text-sm px-3 py-1 bg-[#E6F6FA] text-[#10A0CC] rounded-full font-euclid font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="text-[#10A0CC] shrink-0 self-start md:self-center
          transition-transform duration-300
          hover:translate-x-1">
          <ArrowUpRight size={90} />
        </div>

      </div>
    </div>
  );
};

export default Card;