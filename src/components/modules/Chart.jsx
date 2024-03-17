import { useState } from "react";
import { convertData } from "../../helpers/convertData";
import styles from "./Chart.module.css";

import ChartComponent from "./ChartComponent";
import { iconHandler } from "../../helpers/currencyHandler";

function Chart({ setChart, chart, currency }) {
  const [type, setType] = useState("prices");

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  return (
    <div className={styles.container}>
      <span onClick={() => setChart(null)} className={styles.cross}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} alt={chart.coin.name} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
        <div className={styles.types} onClick={typeHandler}>
          <button className={type === "prices" ? styles.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? styles.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volume" ? styles.selected : null}>
            Total Volumes
          </button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Prices:</p>
            <span>
              {iconHandler(currency)}
              {chart.coin.current_price}
            </span>
          </div>
          <div>
            <p>ATH:</p>
            <span>
              {iconHandler(currency)}
              {chart.coin.ath}
            </span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>
              {iconHandler(currency)}
              {chart.coin.market_cap}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
