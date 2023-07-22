import { useState, useEffect } from "react";
import crypto from "crypto";
import { Hero } from "@/interfaces/Hero";

const useMarvelCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [characters, setCharacters] = useState<Hero[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const publicKey = process.env.NEXT_PUBLIC_KEY_URL as string;
        const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY_URL as string;
        const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
        const timestamp: number = new Date().getTime();
        const hash = crypto
          .createHash("md5")
          .update(timestamp + privateKey + publicKey)
          .digest("hex");

        const response = await fetch(
          `${apiUrl}/v1/public/characters?limit=20&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data from Marvel API");
        }

        const data = await response.json();
        const charactersData = data?.data?.results;

        if (charactersData && charactersData.length > 0) {
          const parsedCharacters = charactersData.map((characterData: any) => {
            const seriesList =
              characterData.series?.items?.map((item: Hero) => item.name) || [];
            return {
              id: characterData.id,
              name: characterData.name,
              comicsAvailable: characterData.comics?.available || 0,
              seriesAvailable: characterData.series?.available || 0,
              seriesList: seriesList,
              urlImg:
                characterData.thumbnail.path +
                "." +
                characterData.thumbnail.extension,
            };
          });

          setCharacters(parsedCharacters);
        } else {
          setError("Character data not found");
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { loading, error, characters };
};

export default useMarvelCharacters;
