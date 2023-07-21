import { FC, useState } from "react";
import { CardsListProps } from "@/interfaces/props/CardsListProps";
import CardHero from "./CardHero";
import { LeftButton, RightButton } from "@/assets/cards/cards-svg";

const CardList: FC<CardsListProps> = ({ cards }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {currentCards.map(
          ({ id, name, urlImg, comicsAvailable, seriesAvailable }) => (
            <CardHero
              key={id}
              name={name}
              imgURL={urlImg}
              comics={comicsAvailable}
              movies={seriesAvailable}
            />
          )
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button
          className=""
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          <LeftButton />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`${
              currentPage === index + 1
                ? "bg-blue-700"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white font-bold py-2 px-4 rounded mx-1`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className=""
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          <RightButton />
        </button>
      </div>

      <div className="flex justify-center mt-2">
        <p className="text-gray-500">
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default CardList;
