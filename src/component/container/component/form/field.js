// Dependencies
import React from 'react';
import PropTypes from 'prop-types'

// Stateless component / Functional component
const Field = (props) => (
    <div className="paddingfield" style={{margin:'10px 0px'}}>
        <label className="">{props.label}</label>
        <input
            className="input1"
            onChange={props.onChange}
            type={props.textarea ? 'textarea' : 'text'}
            value={props.value}
        />
    </div>
);

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
Field.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    textarea: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};

Field.defaultProps = {
    textarea: false,
};

export default Field;