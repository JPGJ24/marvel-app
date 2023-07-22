import { FC } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { CardProps } from "@/interfaces/props/CardProps";
import { CenteredContainerWrapper } from "@/styles/components/cards/CardHero.styles";
import BackgroundImgHero from "@/assets/cards/background-img-hero.png";
import Image from "next/image";

const CardHero: FC<CardProps> = ({
  name,
  imgURL,
  comics,
  movies,
  handleOnClick,
}) => {
  const handleClick = () => {
    handleOnClick();
  };
  return (
    <CenteredContainerWrapper onClick={handleClick}>
      <Card className="card h-96 w-60 bg-cover bg-center cursor-pointer">
        <CardBody>
          <div className="div-text">
            <h1 className="text-name mb-1 ">{name}</h1>
          </div>
          <div className="div-hero-img flex justify-center mt-1 ">
            <Image
              className="animated-hero"
              src={BackgroundImgHero}
              alt="PNG animado"
            />
            <img
              src={imgURL}
              alt="img-blur-shadow"
              className="w-28 h-28 rounded-full mt-5 absolute"
            />
          </div>
        </CardBody>
        <CardFooter>
          <div className="div-box-comics-movies -mt-5">
            <Typography className="text-box">Comics:</Typography>
            <Typography className="text-number-box ">{comics}</Typography>
          </div>
          <div className="div-box-comics-movies mt-5">
            <Typography className="text-box">Movies:</Typography>
            <Typography className="text-number-box ">{movies}</Typography>
          </div>
        </CardFooter>
      </Card>
    </CenteredContainerWrapper>
  );
};

export default CardHero;
