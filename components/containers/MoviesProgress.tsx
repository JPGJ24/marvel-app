import { useState, useEffect } from "react";
import Image from "next/image";
import Bar from "@/assets/containers/Bar.png";
import VectorBar from "@/assets/containers/VectorBar.png";
import VectorBarWhite from "@/assets/containers/vectorBarWhite.png";
import {
  TextProgressProduction,
  TextProgressProduced,
  TitleProgress,
  BtnProgress,
} from "@/styles/components/containers/MovesProgress.style";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [produced, setProduced] = useState(50);
  const [goal, setGoal] = useState(100);

  useEffect(() => {
    const percentage = (produced / goal) * 100;
    setProgress(percentage);
  }, [produced, goal]);

  const handleClick = () => {
    const random1 = getRandomNumber(1, 200);
    const random2 = getRandomNumber(1, 200);
    setGoal(Math.max(random1, random2));
    setProduced(Math.min(random1, random2));
  };

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border-ffae00-500 h-12.022 "
      style={{ border: "1px solid #42331A" }}
    >
      <BtnProgress onClick={handleClick}>🔥</BtnProgress>
      <TitleProgress>PROGRESO DE PELICULAS PRODUCIDAS</TitleProgress>
      <TextProgressProduction>
        <p>{goal} Películas</p>
        <p>Meta de Producción</p>
      </TextProgressProduction>
      <div className="mb-14 relative w-96 h-8 rounded-lg overflow-hidden">
        <Image
          className="rounded-lg bg-gray-700 w-full h-full"
          src={VectorBarWhite}
          alt={"progress-Background"}
          style={{ border: "1px solid #6c4b24" }}
        />
        <Image
          src={Bar}
          className="absolute top-0 left-0 h-6 mt-1 pl-1 bg-gradient-to-r "
          style={{ width: `${progress}%` }}
          alt={"bar"}
        />
        <Image
          src={VectorBar}
          className="absolute top-0 pl-10 h-full pr-10 left-0"
          style={{ width: `${100}%` }}
          alt={"bar"}
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold">
          {`${progress.toFixed(0)}%`}
        </div>
      </div>
      <TextProgressProduced>
        <p>{produced} Películas</p>
        <p>Producidas</p>
      </TextProgressProduced>
    </div>
  );
};

export default ProgressBar;
