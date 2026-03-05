import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  description: string;
  tags: string[];
  categorySlug: string;
}

const Card = ({ id, title, description, tags, categorySlug }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full border-b border-gray-300 py-6 md:py-8 cursor-pointer group"
      onClick={() => navigate(`/problem/${categorySlug}/${id}`)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 md:gap-6 w-full">
          <div className="text-[#10A0CC] font-semibold font-bounded text-5xl sm:text-6xl md:text-7xl lg:text-8xl shrink-0">
            {id}
          </div>
          <div className="w-full max-w-2xl">
            <h4 className="text-base md:text-lg font-semibold font-euclid text-gray-900 mb-2 group-hover:text-[#10A0CC] transition-colors">
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
          group-hover:translate-x-1">
          <ArrowUpRight size={90} />
        </div>

      </div>
    </div>
  );
};

export default Card;