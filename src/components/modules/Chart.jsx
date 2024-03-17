import { useState } from "react";
import { convertData } from "../../helpers/convertData";
import styles from "./Chart.module.css";

import ChartComponent from "./ChartComponent";

function Chart({ setChart, chart }) {
  const [type, setType] = useState("prices");
  return (
    <div className={styles.container}>
      <span onClick={() => setChart(null)} className={styles.cross}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <ChartComponent data={convertData(chart, type)} type={type} />
        </div>
      </div>
    </div>
  );
}

export default Chart;
