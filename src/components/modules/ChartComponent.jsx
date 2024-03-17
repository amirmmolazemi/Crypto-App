import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ChartComponent({ data, type }) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={400} height={400} data={data}>
          <Line
            type="monotone"
            dataKey={type}
            stroke="#3874ff"
            strokeWidth="2px"
          />
          <CartesianGrid stroke="#404042" />
          <YAxis dataKey={type} domain={["auto", "auto"]} />
          <XAxis dataKey="date" hide />
          <Legend />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default ChartComponent;
