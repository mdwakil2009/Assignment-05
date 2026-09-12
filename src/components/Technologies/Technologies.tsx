import { use } from "react";
import type { TechnologiType } from "../../types/Technologi";
import Card from "./Card";

interface TechnologiesProps {
  TechnologiesPromise: Promise<TechnologiType[]>;
}

const Technologies = ({ TechnologiesPromise }: TechnologiesProps) => {
  console.log(TechnologiesPromise);
  const technologies = use(TechnologiesPromise);
  console.log(technologies);

  return (
    <div className=" container mx-auto">
      <div>
        <h1 className="font-bold text-4xl">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-[#64748B] mb-10">Pick one technology per category to build your ideal stack.</p>
      </div>
      <Card technologies={technologies}></Card>
    </div>
  );
};

export default Technologies;
