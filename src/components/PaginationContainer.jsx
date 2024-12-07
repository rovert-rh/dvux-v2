import React, { useState } from 'react';
import PaginationButton from './PaginationButton';
import data from '../Data/Data.json';

const PaginationContainer = ({ itemsPerPage, onPaginate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Controla el cambio de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPaginate(newPage); // Notifica el cambio a Plantillas.astro
  };

  // Calcular los elementos a mostrar en función de la página actual
  const paginatedData = data.slice(0, currentPage * itemsPerPage);

  return (
    <div>
      <PaginationButton
        data={data}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationContainer;
