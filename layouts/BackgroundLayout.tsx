import React from "react";
import Image from "next/image";
import ImgBackground from "@/assets/ui/Background-marvelApp.png"; // Asegúrate de proporcionar la ruta correcta de la imagen
import { BackgroundLayoutProps } from "@/interfaces/props/BackgroundLayoutProps";

const BackgroundLayout: React.FC<BackgroundLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-scroll">
      <Image
        src={ImgBackground}
        alt="Background Marvel App"
        layout="fill"
        object-fit="cover"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
