import Table from '../../components/Table/table'
import './questions.scss'
import dataJson from "./tableData.json"
import { UseAxiosRequest } from "../../hooks/useApi"
export default function Questions() {
  const { data, loading, error, setData, setLoading } = UseAxiosRequest({ method: 'POST', url: '/api/genericQuery', body: { modelName: "qa", pages: { pageLocation: 1, pageLength: 10 }, populate: [{ name: "tags", selector: { name: 1 } }] } })
  console.log("data", data)
  return (
    <div className='Questions'>
      <Table thead={dataJson.thead} tbody={data?.res || []} />
    </div>
  )
}

