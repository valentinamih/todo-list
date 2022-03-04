import {useState} from "react";
import style from './Paginator.module.css'
import classNames from "classnames";

let cn = classNames.bind(style);


export const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalTodosCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = 10
    let portionsCount = pagesCount / portionSize
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return <div className={style.paginator}>
        {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}> Prev </button>}
        {pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => {
                return <span className={cn({[style.selectedPage]: props.currentPage === page}, style.pageNumber)}
                             key={page}
                             onClick={(e) => props.onPageChanged(page)}>{page}</span>
            })
        }
        {portionNumber < portionsCount && <button onClick={() => setPortionNumber(portionNumber - 1)}> Next </button>}
    </div>
}