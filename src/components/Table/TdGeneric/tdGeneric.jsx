import { useState } from "react";
import { timeFormat } from "../../../functions/timeFormat";
export default function TdGeneric({ type, value }) {
    const [showElement, setElement] = useState(false)
    function toggleElement() {
        setElement(!showElement)
    }
    switch (type) {
        case "boolean":
            return <input type="checkbox" defaultChecked={value} />;
        case "img":
            return <>
                <img src={value} className="imgInTd" onClick={toggleElement} />
                {showElement && <div className="popUp" onClick={toggleElement}><img className="popUpImg" src={value} /> </div>}
            </>;
        case "string":
            return <>
            <p className="pInTd" onClick={toggleElement}>{value} </p>
            {showElement && <div className="popUp" onClick={toggleElement}><p className="pPopUp">{value}</p> </div>}
        </>;
        case "date":
            return <p >{timeFormat(value)}</p>;
        case "array-string":
            return <p > {value.map(e => e)}</p>;
        case "array-object":
            return <> 
            {value.map(e => <span key={Math.random()}>{e.name} </span>)}
            </>;

        default:
            return value;
    }
}
