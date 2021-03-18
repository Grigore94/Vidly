import React from 'react';

const Pagination = (props) => {
    //maping eatch page number
    const {itemsCount, pageSize } = props;
    const pageCount = itemsCount / pageSize;
    return ( <nav>
        <ul>
            <li className="page-item"><a className="page-link"></a>1</li>
        </ul>
    </nav> );
}
 
export default Paginatinullon;