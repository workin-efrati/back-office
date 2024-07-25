import './input.scss'

export default function Input({ required = true, placeholder, key, ...props }) {
    return (<input className='Input' {...props} placeholder={placeholder} required={required} name={key} />)
}
