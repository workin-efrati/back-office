import './select.scss'

export default function Select({onSelect =()=>{}, options = []}) {
    return (
        <select className='Select' onSelect={onSelect}> 
    {options.map(option=>(
        <option key={option.id} value={option.id}>{option.name}</option>
    ))}
        </select>
    )
}
