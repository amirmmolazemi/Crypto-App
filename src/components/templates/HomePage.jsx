import { useState, useEffect } from "react";
import { getCoinList } from "../../services/cryptoApi.js";
import TableCoin from "../modules/TableCoin.jsx";
import Pagination from "../modules/Pagination.jsx";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
  }, [page]);

  return (
    <>
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default HomePage;
