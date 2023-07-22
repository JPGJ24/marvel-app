import CardList from "@/components/cards/CardsList";
import MarvelImage from "@/components/containers/MarvelImage";
import MarvelVideo from "@/components/containers/MarvelVideo";
import ProgressBar from "@/components/containers/MoviesProgress";
import MovesProgress from "@/components/containers/MoviesProgress";
import useMarvelCharacters from "@/hooks/useMarvelCharacters";

const Personajes: React.FC = () => {
  const { loading, error, characters } = useMarvelCharacters();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="px-14 mt-10">
      <div className="flex gap-6 mb-6">
        <div className="w-31.875">
          <ProgressBar />
        </div>
        <div className=" w-23.875">
          <MarvelVideo />
        </div>
        <div className=" w-23.875">
          <MarvelImage />
        </div>
      </div>

      <CardList cards={characters}></CardList>
    </div>
  );
};

export default Personajes;
