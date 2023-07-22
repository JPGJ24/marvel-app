import { FC, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ModalHeroProps } from "@/interfaces/props/ModalHeroProps";
import CardHero from "./CardHero";

const ModalHero: FC<ModalHeroProps> = ({ hero, open, handleOpen }) => {
  return (
    <>
      <Dialog open={open} size={"sm"} handler={handleOpen}>
        <div className="flex gap-4 bg-opacity-75 bg-gray-900">
          {hero !== null && (
            <CardHero
              key={hero.id}
              name={hero.name}
              imgURL={hero.urlImg}
              comics={hero.comicsAvailable}
              movies={hero.seriesAvailable}
              handleOnClick={() => {}}
            />
          )}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl">Movies</h1>
            <ul>
              {hero?.seriesList.slice(0, 3).map((serie) => (
                <li className="text-white" key={serie}>
                  {serie}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ModalHero;
