import CardList from "@/components/cards/CardsList";
import MarvelImage from "@/components/containers/MarvelImage";
import MarvelVideo from "@/components/containers/MarvelVideo";
import MovesProgress from "@/components/containers/MovesProgress";
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
    <div className="px-14">
      <div className="flex gap-6 ">
        <div className=" w-31.875">
          <MovesProgress />
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
