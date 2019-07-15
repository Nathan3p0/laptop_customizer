import React from 'react';
import Summary from './Summary';
import SummaryTotal from './SummaryTotal';

const MainSummary = (props) => {

    const summary = Object.keys(props.selected)
        .map(key => <Summary key={key} label={key} selected={props.selected} />
        )

    return (
        <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary}
            <SummaryTotal total={props.total} />
        </section>
    );
}

export default MainSummary;