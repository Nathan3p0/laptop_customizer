import React from 'react';

const FeatureListItem = (props) => {

    return (
        <li key={props.index} className="feature__item">
            <div className={props.featureClass}

                onClick={e => props.updateFeature(props.title, props.item)}>
                {props.item.name}
                ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
                    .format(props.item.cost)})
                </div>
        </li>
    );
}

export default FeatureListItem;

