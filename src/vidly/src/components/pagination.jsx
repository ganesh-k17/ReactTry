import React from 'react';

const Pagination = props => {

    const { itemsCount, pageSize, onPageChange } = props;

    const pageCount = Math.ceil(itemsCount/pageSize);

    return (
        <React.Fragment>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" >Previous</a></li>
                {console.log(itemsCount)}
                {console.log(pageCount)}
                {
                 new Array(pageCount).fill(0).map((_, i) => (
                    <li key={i+1} className="page-item">
                        <a className="page-link" onClick={()=> onPageChange(i+1)}>{i+1}</a>
                    </li>
                 ))
            }

                
                {/* <li class="page-item"><a class="page-link" >1</a></li>
                <li class="page-item"><a class="page-link" >2</a></li>
                <li class="page-item"><a class="page-link" >3</a></li> */}
                <li className="page-item"><a className="page-link" >Next</a></li>
              </ul>
            </nav>
        </React.Fragment>
    );
}

export default Pagination;