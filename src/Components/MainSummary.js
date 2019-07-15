import React from 'react'
import Summary from './Summary';

const MainSummary = (props) => {

    const summary = Object.keys(props.selected)
        .map(key => <Summary key={key} label={key} selected={props.selected} />
        )

    return (
        <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary}
            <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                        .format(props.total)}
                </div>
            </div>
        </section>
    );
}

export default MainSummary;