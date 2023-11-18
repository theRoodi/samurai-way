import style from './Paginator.module.css';
import React, {useState} from 'react';

type Props = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    onPageChange: (page: number) => void


}
export const Paginator: React.FC<Props> = ({totalUsersCount, currentPage, pageSize, onPageChange, portionSize = 10}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize
    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>}
            {pages
                .filter(portion => portion >= leftPortionPageNumber && portion <= rightPortionPageNumber)
                .map((page, i) => {
                    return (
                        <span key={i}
                              className={currentPage === page ? `${style.selectedPage}` : ''}
                              onClick={() => onPageChange(page)}>{page + ' '}</span>
                    )
                })}
            {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}
        </div>
    )
}