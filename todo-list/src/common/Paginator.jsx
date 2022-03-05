import style from './Paginator.module.css'
import {useState} from "react";
import nextPage from '../assets/nextPage.png'
import prevPage from '../assets/prevPage.png'
import classNames from "classnames";

let cn = classNames.bind(style);

export const Paginator = ({todosPerPage, todosCount, pagination, currentPage}) => {
    let pagesNumber = [];
    for (let i = 1; i <= Math.ceil(todosCount / todosPerPage); i++) {
        pagesNumber.push(i)
    }
    let portionsCount = pagesNumber.length / todosPerPage
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * todosPerPage + 1
    let rightPortionPageNumber = portionNumber * todosPerPage
    return <nav className={style.paginator}>
        <div>
            {portionNumber > 1 && <img src={prevPage}
                                       className={style.pageArrow}
                                       onClick={() => setPortionNumber(portionNumber - 1)} />}
        </div>
        <div>
            {pagesNumber.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => <span  className={cn({[style.selectedPage]: currentPage === page}, style.paginationItem)}
                                      onClick={() => {
                                          pagination(page)
                                      }}
                                      key={page}
                >{page}</span>)}
        </div>
        <div>
            {portionNumber < portionsCount && <img src={nextPage}
                                                   className={style.pageArrow}
                                                   onClick={() => setPortionNumber(portionNumber + 1)} />}
        </div>
    </nav>
}
