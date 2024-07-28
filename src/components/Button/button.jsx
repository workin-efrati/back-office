import './button.scss'

export default function Button({ type = "button", text = "קליק", onClick = () => { }, ...props }) {
  return (
    <button type={type} onClick={onClick} className='Button' {...props}>
      {text}
    </button>
  )
}
