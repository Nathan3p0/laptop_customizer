import React from 'react';
import './SummaryTotal.css'

const SummaryTotal = (props) => {

    const total = Object.keys(props.selected)
        .reduce((acc, curr) => acc + props.selected[curr].cost, 0);

    return (
        <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                    .format(total)}
            </div>
        </div>
    );
}

export default SummaryTotal;