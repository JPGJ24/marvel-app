import { FC } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { CardProps } from "@/interfaces/props/CardProps";
import { CenteredContainerWrapper } from "@/styles/components/Cards/CardHero.styles";

const CardHero: FC<CardProps> = ({ name, imgURL, comics, movies }) => {
  return (
    <CenteredContainerWrapper>
      <Card>
        <CardBody>
          <Typography>{name}</Typography>
          <img src={imgURL} alt="img-blur-shadow" className="w-56" />
        </CardBody>
        <CardFooter>
          <Typography>Comics: {comics}</Typography>
          <Typography>Movies: {movies}</Typography>
        </CardFooter>
      </Card>
    </CenteredContainerWrapper>
  );
};

export default CardHero;
