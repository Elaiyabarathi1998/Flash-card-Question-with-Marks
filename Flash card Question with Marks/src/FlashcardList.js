
// import React, { useState } from 'react';
// import Flashcard from './Flashcard';
// import ReactPaginate from 'react-paginate';

// export default function FlashcardList({ flashcards }) {
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 1;
//   const pageCount = Math.ceil(flashcards.length / itemsPerPage);

//   const handlePageChange = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   const offset = currentPage * itemsPerPage;
//   const currentFlashcards = flashcards.slice(offset, offset + itemsPerPage);

//   return (
//     <div className="flashcard-list-container">
//       <div className="card-grid">
//         {currentFlashcards.map(flashcard => (
//           <Flashcard flashcard={flashcard} key={flashcard.id} />
//         ))}
//       </div>

//       <div className="pagination-container">
//         <ReactPaginate
//           previousLabel={'Previous'}
//           nextLabel={'Next'}
//           breakLabel={'...'}
//           breakClassName={'break-me'}
//           pageCount={pageCount}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={5}
//           onPageChange={handlePageChange}
//           containerClassName={'pagination'}
//           activeClassName={'active'}
//         />
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import Flashcard from './Flashcard';
import ReactPaginate from 'react-paginate';

export default function FlashcardList({ flashcards }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [marks, setMarks] = useState(0); // State to keep track of marks
  const itemsPerPage = 1;
  const pageCount = Math.ceil(flashcards.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleUpdateMarks = (newMarks) => {
    setMarks(marks + newMarks); // Update the marks by adding newMarks
  };

  const offset = currentPage * itemsPerPage;
  const currentFlashcards = flashcards.slice(offset, offset + itemsPerPage);

  return (
    <div className="flashcard-list-container">
      <div className="card-grid">
        {currentFlashcards.map((flashcard, index) => (
          <Flashcard
            flashcard={flashcard}
            questionNumber={offset + index + 1}
            updateMarks={handleUpdateMarks}
            key={flashcard.id}
          />
        ))}
      </div>

      <div className="pagination-container">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>

      <div className="marks" style={{ marginTop: '10px', fontWeight: 'bold' }}>
        <span className="total-marks" style={{ color: 'yellow' }}>Total Marks:</span>{' '}
        <span className="marks-count" style={{ color: 'yellow' }}>{marks}</span>
      </div>

    </div>
  );
}
