import { useState, useEffect } from "react";
import { getCoinList } from "../../services/cryptoApi.js";
import TableCoin from "../modules/TableCoin.jsx";
import Pagination from "../modules/Pagination.jsx";
import Search from "../modules/Search.jsx";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch(getCoinList(page, currency));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
  }, [page, currency]);

  return (
    <>
      <Search setCurrency={setCurrency} currency={currency} />
      <TableCoin coins={coins} isLoading={isLoading} currency={currency} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default HomePage;
