import './table.scss'
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import TdGeneric from './TdGeneric/tdGeneric';

export default function Table({ thead, tbody = [] }) {
    const columns = Object.keys(tbody[0] || []) || [];
    return (
        <div className='Table'>

            <table >
                <thead>
                    <tr>
                        {thead.map((th, i) => (
                            <th key={"th" + i}>
                                {th.name}

                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tbody.map((row, i) => {
                        return (
                            <tr key={"tr" + i}>
                                {thead.map((column, j) => (
                                    <td key={"td" + j}>
                                        <TdGeneric type={thead[j].type} value={row[column.key]} />
                                    </td>
                                ))}
                                <td className='iconsTd' ><button><MdEdit /> </button> <button><IoMdTrash /> </button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
