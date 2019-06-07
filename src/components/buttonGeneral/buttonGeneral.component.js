import React from 'react'

export default function ButtonGeneral(props) {
    function onClick() {
        props.onClick();
    }
    return (
        <div>
            <button onClick={onClick}>General Button!</button>
        </div>
    )
}
