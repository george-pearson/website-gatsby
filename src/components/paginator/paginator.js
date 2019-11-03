import React from "react";
import { Link } from "gatsby";
import * as style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();
  return (
    <nav className={style.paginator}>
      <ul className={style.paginatorList}>
        {!isFirst && (
          <li className={style.paginatorListItem}>
            <Link className={style.paginatorLink} to={prevPage}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Link>
          </li>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <li key={`pagination-number${i + 1}`}>
            <Link
              className={
                i === currentPage - 1
                  ? style.paginatorLinkActive
                  : style.paginatorLink
              }
              to={`/${i === 0 ? "" : i + 1}`}
            >
              {i + 1}
            </Link>
          </li>
        ))}
        {!isLast && (
          <li className={style.paginatorListItem}>
            <Link className={style.paginatorLink} to={`/${nextPage}`}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
