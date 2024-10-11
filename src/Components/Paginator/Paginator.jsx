import React from 'react';
import { usePageContent } from '../../Context/page_content';

const Paginator = ({ totalPages, currentPage, setCurrentPage }) => {
    const handlePageChange = (page) => {
        if (page - 1 !== currentPage) {
            setCurrentPage(page - 1);
        }
    };
//     prev
// nxt
const {lang} = usePageContent();
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 3; // Puedes cambiar este valor según tus necesidades
        const halfVisiblePages = Math.floor(maxVisiblePages / 2);
    
        if (totalPages <= maxVisiblePages) {
          for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
          }
        } else {
          let startPage = currentPage - halfVisiblePages;
          let endPage = currentPage + halfVisiblePages;
    
          if (startPage <= 1) {
            startPage = 1;
            endPage = maxVisiblePages;
          } else if (endPage >= totalPages) {
            startPage = totalPages - maxVisiblePages + 1;
            endPage = totalPages;
          }
    
          if (startPage > 1) {
            pageNumbers.push(1);
            if (startPage > 2) pageNumbers.push('...');
          }
    
          for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
          }
    
          if (endPage < totalPages) {
            if (endPage < totalPages - 1) pageNumbers.push('...');
            pageNumbers.push(totalPages);
          }
        }
    
        return pageNumbers.map((number, index) => (
          (!isNaN(number))
            ? (
              <button
                className={(number === currentPage + 1) ? ("") : ("pag-btn")}
                key={index}
                onClick={() => handlePageChange(typeof number === 'number' ? number : currentPage)}
                disabled={number === currentPage + 1}
              >
                {number}
              </button>
            ) : (
              <label key={index}>...</label>
            )
        ));
      };
    

    return (
        <div className='t-center pag-cont'>
            <button
                className={(currentPage === 0) ? ("") : ("pag-btn")}
                onClick={() => handlePageChange(currentPage)}
                disabled={currentPage === 0}
            >
                {lang.pag_prev}
            </button>

            {renderPageNumbers()}

            <button
                onClick={() => handlePageChange(currentPage + 2)}
                className={(currentPage === totalPages - 1) ? ("") : ("pag-btn")}
                disabled={currentPage === totalPages - 1}
            >
                {lang.pag_nxt}
            </button>
        </div>
    );
};

export default Paginator;
