import React from 'react';

const FeatureList = (props) => {
    const featureClass = 'feature__option ' + props.selected;

    return ( 
        <li className="feature__item">
            <div className={featureClass}
                onClick={() => props.updateFeature(props.index, props.item)}>
                { props.item.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(props.item.cost) })
            </div>
        </li>
    );
}
 
export default FeatureList;

