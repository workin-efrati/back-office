import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import "./areaCharts.scss"
const data = [
  {
    name: "Jun",
    product1: "1111",
    product2: "1223"
  },
  {
    name: "Alice",
    product1: "2222",
    product2: "2334"
  },
  {
    name: "Bob",
    product1: "3333",
    product2: "3445"
  },
  {
    name: "Charlie",
    product1: "244",
    product2: "4556"
  }
];

export default function AreaCharts({ colorStrokeArray = [], }) {
  return (
    <div className="AreaCharts">
      <ResponsiveContainer>
        <LineChart width={300} height={300} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#b4b6b8bd" />
          <Line type="monotone" dataKey="product1" stroke="#ff0000" yAxisId={0} />
          <Line type="monotone" dataKey="product2" stroke="#387908" yAxisId={1} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
