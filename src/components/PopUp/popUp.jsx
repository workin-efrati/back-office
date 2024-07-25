import './popUp.scss'

export default function PopUp({ text, confirmFunc, cancelFunc}) {
    return (
        <div className='PopUp'>
            <div className='coverDiv'></div>
            <div className='popUpContainer'>
                <h4>{text}</h4>
                <div className='btnContainer'>
                    <button onClick={confirmFunc}>אישור</button>
                    {cancelFunc&&<button onClick={cancelFunc}>ביטול</button>}
                </div>
            </div>
        </div>
    )
}
