import React from 'react';
import PropTypes from 'prop-types'

const Pagination = props => {

    const { itemsCount, pageSize, onPageChange, currentPage } = props;

    const pageCount = Math.ceil(itemsCount/pageSize);
    console.log('currentpage:', currentPage);

    return (
        <React.Fragment>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" >Previous</a></li>
                {console.log(itemsCount)}
                {console.log(pageCount)}
                {
                 new Array(pageCount).fill(0).map((_, i) => (
                    <li key={i+1} className={currentPage === (i+1) ? "page-item active" : "page-item"}>
                        <a className="page-link" onClick={()=> onPageChange(i+1)}>{i+1}</a>
                    </li>
                 ))
                }
                <li className="page-item"><a className="page-link" >Next</a></li>
              </ul>
            </nav>
        </React.Fragment>
    );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;