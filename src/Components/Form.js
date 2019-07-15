import React from 'react'

const Form = (props) => {
    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {props.features}
        </section>
    );
}

export default Form;

