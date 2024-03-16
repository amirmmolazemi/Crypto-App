import styles from "./Pagination.module.css";

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page <= 1) {
      return;
    }
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= 10) {
      return;
    }
    setPage((page) => page + 1);
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={previousHandler}
        className={page === 1 ? styles.disabled : null}
      >
        previous
      </button>
      <p style={{ color: page === 1 ? "red" : "inherit" }}>1</p>
      <p style={{ color: page === 2 ? "red" : "inherit" }}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p>{page}</p>
        </>
      )}
      <p>...</p>
      <p>9</p>
      <p>10</p>
      <button
        onClick={nextHandler}
        className={page === 10 ? styles.disabled : null}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
