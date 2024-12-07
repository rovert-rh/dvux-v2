import React, { useState } from 'react';

const PaginationButton = ({ data, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    onPageChange(nextPage); // Llama a la función de cambio de página
  };

  const hasMoreData = data.length > currentPage * itemsPerPage;

  return (
    <>
      {hasMoreData && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="bg-[#6E29CC] hover:bg-[#41B6A1] text-white font-semibold py-2 px-8 rounded-lg"
          >
            Mostrar más
          </button>
        </div>
      )}
    </>
  );
};

export default PaginationButton;
