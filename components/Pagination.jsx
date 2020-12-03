import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ pageCount, currentPage, paginate }) => {
    return (
        <section className="pagination">
            <ReactPaginate
                previousLabel={'prev'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={pageCount}
                pageRangeDisplayed={12}
                marginPagesDisplayed={3}
                onPageChange={paginate}
                pageClassName={'page'}
                previousClassName={'page'}
                nextClassName={'page'}
                pageLinkClassName={'link'}
                nextLinkClassName={'link'}
                previousLinkClassName={'link'}
                activeLinkClassName={'active'}
                initialPage={currentPage}
            />
        </section>
    )
}

export default Pagination
