import './table.scss'
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
export default function Table({ thead, tbody = [], onEdit = () => { }, onDelete = () => { } }) {
    const columns = Object.keys(tbody[0] || []) || [];
    return (
        <table className='Table'>
            <thead>
                <tr>
                    {thead.map((th, i) => (
                        <th key={"th" + i}>{th.name} </th>
                    ))}
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {tbody.map((row, i) => {
                    return (
                        <tr key={"tr" + i}>
                            {columns.map((column, j) => (
                                <td key={"td" + j}>{row[column]}</td>
                            ))}
                            <td className='iconsTd' onClick={()=>{onEdit(row._id)}}><MdEdit/></td>
                            <td className='iconsTd' onClick={()=>{onDelete(row._id)}}><FaTrash/></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
