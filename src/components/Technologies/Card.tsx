import { CiStar } from "react-icons/ci";
import type { TechnologiType } from "../../types/Technologi";

interface TechnologyCardProps {
  technologies: TechnologiType[];
  addToStack: (technology: TechnologiType) => void;
  selectedTechnologies: TechnologiType[];
}

const Card = ({
  technologies,
  addToStack,
  selectedTechnologies,
}: TechnologyCardProps) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {technologies.map((technologi: TechnologiType) => {
        const isSelected = selectedTechnologies.some(
          (item) => item.id === technologi.id
        );

        return (
          <div
            className="bg-white border border-gray-200 rounded-2xl p-4"
            key={technologi.id}
          >
            <div className="flex items-center justify-between">
              <img
                className="w-10 h-10"
                src={technologi.icon}
                alt=""
              />

              <p
                className={`badge ${
                  technologi.badge === "Popular"
                    ? "bg-[#EFF8FF] text-[#20A8E0] border-[#D9F0FC]"
                    : technologi.badge === "Fast"
                      ? "bg-[#FFF7ED] text-[#F97316] border-[#FED7AA]"
                      : technologi.badge === "NoSQL"
                        ? "bg-[#F3E8FF] text-[#9333EA] border-[#E9D5FF]"
                        : technologi.badge === "Essential"
                          ? "bg-[#FEF2F2] text-[#EF4444] border-[#FECACA]"
                          : technologi.badge === "Styling"
                            ? "bg-[#FDF2F8] text-[#EC4899] border-[#FBCFE8]"
                            : technologi.badge === "Automation"
                              ? "bg-[#F0FDF4] text-[#16A34A] border-[#DCFCE7]"
                              : "bg-[#F3F4F6] text-[#6B7280] border-[#E5E7EB]"
                }`}
              >
                {technologi.badge}
              </p>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mt-5">
              {technologi.name}
            </h2>

            <p className="text-sm text-gray-500 mt-2 min-h-[65px]">
              {technologi.description}
            </p>

            <div className="divider"></div>

            <div className="flex items-center justify-between mt-4">
              <p className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                {technologi.category}
              </p>

              <p className="text-xs text-gray-500">
                {technologi.difficulty}
              </p>

              <div className="flex items-center gap-2">
                <CiStar />
                <p className="text-sm text-gray-600">
                  {technologi.rating}
                </p>
              </div>
            </div>

            <button
              onClick={() => addToStack(technologi)}
              disabled={isSelected}
              className="w-full bg-[#080d1c] text-white py-2.5 rounded-lg mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSelected ? "Added" : "Add to Stack"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;