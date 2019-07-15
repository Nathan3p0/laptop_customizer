import React from 'react'

const Summary = (props) => {
    return (<div className="summary__option">
        <div className="summary__option__label">{props.label}  </div>
        <div className="summary__option__value">{props.selected[`${props.label}`].name}</div>
        <div className="summary__option__cost">
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                .format(props.selected[`${props.label}`].cost)}
        </div>
    </div>);
}

export default Summary;