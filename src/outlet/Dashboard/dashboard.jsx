import { NavLink } from 'react-router-dom'
import AreaCharts from '../../components/AreaCharts/areaCharts'
import './dashboard.scss'
import data from "./data.json"
import Select from '../../components/Select/select'
export default function Dashboard() {

  return (
    <div className='Dashboard'>
      <div className='navInDashboard'>
        {data.links.map(links => (
          <NavLink className={(isActive) => (isActive ? "active" : "")} to={links.to}> <span>{links.title} </span> </NavLink>
        ))}
      </div>
      <div className="mainData">
        <Select options={[]} />
      <AreaCharts/>
      </div>
    </div>
  )
}
