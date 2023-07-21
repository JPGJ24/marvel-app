import CardList from "@/components/Cards/CardsList";
import useMarvelCharacters from "@/hooks/useMarvelCharacters";

const Personajes: React.FC = () => {
  const { loading, error, characters } = useMarvelCharacters();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return <CardList cards={characters}></CardList>;
};

export default Personajes;
