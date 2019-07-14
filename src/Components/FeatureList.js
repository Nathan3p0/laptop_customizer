import React from 'react';

const FeatureList = (props) => {

    return (
        <div className="feature" key={props.key + 1}>
            <div className="feature__name">{props.title}</div>
            <ul className="feature__list">
                {props.options}
            </ul>
        </div>
    );
}

export default FeatureList;