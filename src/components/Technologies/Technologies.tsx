import { use, useState } from "react";
import type { TechnologiType } from "../../types/Technologi";
import Card from "./Card";
import YourStack from "../../YourStack/YourStack.js";

interface TechnologiesProps {
  TechnologiesPromise: Promise<TechnologiType[]>;
}

const Technologies = ({ TechnologiesPromise }: TechnologiesProps) => {
  const technologies = use(TechnologiesPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<TechnologiType[]>([]);

  const addToStack = (technology: TechnologiType) => {
    setSelectedTechnologies((oldtechnology) => [...oldtechnology, technology]);
  };

  const removeTechnology = (id: string) => {
    setSelectedTechnologies((oldtechnology) =>
      oldtechnology.filter((technology) => technology.id !== id)
    );
  };

  const removeAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="container mx-auto">
      
      <div>
        <h1 className="font-bold text-4xl">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="text-[#64748B] mb-10">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5">

        <div className="col-span-3">
          <Card
            technologies={technologies}
            addToStack={addToStack}
          />
        </div>

        <div className="col-span-1">
          <YourStack
            selectedTechnologies={selectedTechnologies}
            removeTechnology={removeTechnology}
            removeAll={removeAll}
          />
        </div>

      </div>
    </div>
  );
};

export default Technologies;