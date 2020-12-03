import React from 'react'
import ReactPaginate from 'react-paginate'


const Pagination = ({ pageCount, currentPage }) => {
    return (
        <ReactPaginate 
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={pageCount}
            pageRangeDisplayed={12}
            marginPagesDisplayed={3}
            // onPageChange={paginate}
            containerClassName={'pagination'}
            pageClassName={'page'}
            previousClassName={'page'}
            nextClassName={'page'}
            pageLinkClassName={'link'}
            nextLinkClassName={'link'}
            previousLinkClassName={'link'}
            activeLinkClassName={'active'}
            initialPage={currentPage}
        />
    )
}

export default Pagination
