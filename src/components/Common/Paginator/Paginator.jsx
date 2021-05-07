import styles from "./Paginator.module.css";
import React, {useState} from "react";

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, countOfDisplayingPages}) => {

  const pages = [];
  const totalPagesCount = Math.ceil(totalUsersCount / pageSize);
  const countOfBlocks = Math.ceil(totalPagesCount / countOfDisplayingPages);
  const [blockNumber, setBlockNumber] = useState(1);
  const firstPageNumber = (blockNumber - 1) * countOfDisplayingPages + 1;
  let lastPageNumber = firstPageNumber + (countOfDisplayingPages - 1);

  if (totalPagesCount && lastPageNumber > totalPagesCount) {
    lastPageNumber = totalPagesCount
  }

  for (let i = firstPageNumber; i <= lastPageNumber; i++) {
    pages.push(i)
  }

  return (
      <div className={styles.pagination}>
        <button className={styles.buttonWithArrow}
                onClick={() => {
                  setBlockNumber(1)
                }}
                disabled={blockNumber === 1}>
          ≪
        </button>
        <button className={styles.buttonWithArrow}
                onClick={() => {
                  setBlockNumber(blockNumber - 1)
                }}
                disabled={blockNumber === 1}>
          &#60;
        </button>
        <div className={styles.numbersWrapper}>
          {
            pages.map((pageNumber) => {
              return (
                  <div key={pageNumber}
                       className={`${styles.numbers} ${pageNumber === currentPage ? styles.active : undefined}`}
                       onClick={() => {
                         onPageChanged(pageNumber)
                       }}>
                    {pageNumber}
                  </div>
              )
            })
          }
        </div>
        <button className={styles.buttonWithArrow}
                onClick={() => {
                  setBlockNumber(blockNumber + 1)
                }}
                disabled={!totalPagesCount || blockNumber === countOfBlocks}>
          &#62;
        </button>
        <button className={styles.buttonWithArrow}
                onClick={() => {
                  setBlockNumber(countOfBlocks)
                }}
                disabled={!totalPagesCount || blockNumber === countOfBlocks}>
          ≫
        </button>
      </div>
  )
}