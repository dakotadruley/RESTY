import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

// eslint-disable-next-line react/prop-types
const RadioButtonGroup = ({ name, onChange, children }) => {
  const radioButtonsWithNameAndChange = React.Children.map(children, child => {
    return React.cloneElement(child, {
      name,
      onChange
    });
  });

  return (
    <>
      { radioButtonsWithNameAndChange }
    </>
  );
};

// eslint-disable-next-line react/prop-types
const RadioButton = ({ name, value, onChange }) => (
  <>
    <input id={value} type="radio" name={name} value={value} onChange={onChange}/>
    <label htmlFor={value}>{value}</label>
  </>
);

const Request = ({ url, onChange, body, onSubmit }) => (
  <form className={styles.Request} onSubmit={onSubmit}>
    <input type="text" name="url" value={url} onChange={onChange}/>
    
    <RadioButtonGroup name="method" onChange={onChange}>
      <RadioButton value="POST" />
      <RadioButton value="GET" />
      <RadioButton value="PATCH" />
      <RadioButton value="PUT" />
      <RadioButton value="DELETE" />
    </RadioButtonGroup>
    
    <textarea name={body} value={body} onChange={onChange}></textarea>
    <button>Go</button>
  </form>
);

Request.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Request;
