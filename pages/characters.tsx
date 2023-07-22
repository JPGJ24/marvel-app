import CardList from "@/components/cards/CardsList";
import MarvelImage from "@/components/containers/MarvelImage";
import MarvelVideo from "@/components/containers/MarvelVideo";
import ProgressBar from "@/components/containers/MoviesProgress";
import useMarvelCharacters from "@/hooks/useMarvelCharacters";
import {
  Container,
  DivContainers,
  DivProgress,
  DivVideoImage,
} from "@/styles/components/ui/characters.styles";
import { Spinner } from "@material-tailwind/react";

const HerosPage: React.FC = () => {
  const { loading, error, characters } = useMarvelCharacters();

  if (loading) {
    return (
      <div className="flex gap-8flex flex-col items-center justify-center h-96">
        <Spinner className="h-12 w-12" color="amber" />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Container>
      <DivContainers>
        <DivProgress>
          <ProgressBar />
        </DivProgress>
        <DivVideoImage>
          <div className="div-video">
            <MarvelVideo />
          </div>
          <div className="div-image">
            <MarvelImage />
          </div>
        </DivVideoImage>
      </DivContainers>

      <CardList cards={characters}></CardList>
    </Container>
  );
};

export default HerosPage;
