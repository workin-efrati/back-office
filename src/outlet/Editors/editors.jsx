import Table from '../../components/Table/table'
import './editors.scss'
import data from "./tableData.json"
export default function Editors() {

  
  return (
    <div className='Editors'>
      <Table thead={data.thead} tbody={data.tbody}/>
    </div>
  )
}
