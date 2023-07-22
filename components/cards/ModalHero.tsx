import { FC } from "react";
import { Dialog } from "@material-tailwind/react";
import { ModalHeroProps } from "@/interfaces/props/ModalHeroProps";
import CardHero from "./CardHero";

const ModalHero: FC<ModalHeroProps> = ({
  hero,
  open,
  handleOpen,
  handleClose,
}) => {
  console.log(handleClose);
  return (
    <>
      <Dialog
        className="flex items-center justify-center bg-gray-900"
        open={open}
        size={"sm"}
        handler={handleOpen}
      >
        <button
          className="absolute top-0 right-0 m-3 text-F0E6D2 border-none"
          color="blue"
          onClick={handleClose}
        >
          X
        </button>
        <div
          className="flex flex-col sm:flex-row 
        desktop: flex gap-4  bg-gray-900 p-10"
        >
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
          <div className="flex flex-col items-center ">
            <h1 className="text-6xl font-LOL text-c89b3c">Movies</h1>

            <ul className="mt-10 flex flex-col leading-9 font-LOL">
              {hero?.seriesList.slice(0, 6).map((serie) => (
                <li className="text-F0E6D2" key={serie}>
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
