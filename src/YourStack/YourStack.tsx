import { IoCloseOutline } from "react-icons/io5";
import type { TechnologiType } from "../types/Technologi";

interface YourStackProps {
  selectedTechnologies: TechnologiType[];
  handleTechnology: (id: string) => void;
  removeAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  handleTechnology,
  removeAll,
}: YourStackProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <h2 className="text-xl font-bold">Your Stack</h2>

      <p className="text-sm text-gray-500 mt-1">
        {selectedTechnologies.length > 0
          ? `${selectedTechnologies.length} Technologies Selected `
          : "No Technology Selected yet."}
      </p>

      <div className="mt-5 space-y-3">
        {selectedTechnologies.map((technology) => (
          <div
            key={technology.id}
            className="border border-gray-200 rounded-lg p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img src={technology.icon} alt="" className="w-8 h-8" />

              <div>
                <h3 className="font-medium">{technology.name}</h3>
                <p className="text-xs text-gray-400">{technology.category}</p>
              </div>
            </div>

            <button
              onClick={() => handleTechnology(technology.id)}
              className="text-red-500"
            >
              <IoCloseOutline />
            </button>
          </div>
        ))}
      </div>
      {selectedTechnologies.length === 0 && (
        <div className="mt-5 border border-dashed border-gray-200 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      )}

      {selectedTechnologies.length > 0 && (
        <button
          onClick={removeAll}
          className="w-full mt-5 border border-red-300 text-red-500 rounded-lg py-2"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;
