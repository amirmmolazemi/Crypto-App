import { RotatingLines } from "react-loader-spinner";
import TableRow from "./TableRow";
import styles from "./TableCoin.module.css";

function TableCoin({ coins, isLoading }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24H</th>
              <th>Total volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} styles={styles} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;
