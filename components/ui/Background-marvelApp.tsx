import React from "react";
import Image from "next/image";
import ImgBackground from "@/assets/ui/Background-marvelApp.png"; // Asegúrate de proporcionar la ruta correcta de la imagen
import { BackgroundMarvelAppProps } from "@/interfaces/props/BackgroundMarvelApp";

const BackgroundMarvelApp: React.FC<BackgroundMarvelAppProps> = ({
  children,
}) => {
  return (
    <div className="relative min-h-screen bg-scroll">
      <Image
        src={ImgBackground}
        alt="Background Marvel App"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundMarvelApp;
