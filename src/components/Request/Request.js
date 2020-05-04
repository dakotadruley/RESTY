import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

// eslint-disable-next-line react/prop-types
const RadioButtonGroup = ({ name, onChange, children }) => {
  const radioButtonsWithNameAndChange = React.Children.map(children, child => {
    // copy the radiobutton child and added additional props
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

const Request = ({ url, onURLChange, body, onBodyChange, onMethodChange, onSubmit }) => (
  <form className={styles.Request} onSubmit={onSubmit}>
    <input type="text" value={url} onChange={onURLChange}/>
    
    <RadioButtonGroup name="method" onChange={onMethodChange}>
      <RadioButton value="POST" />
      <RadioButton value="GET" />
      <RadioButton value="PATCH" />
      <RadioButton value="PUT" />
      <RadioButton value="DELETE" />
    </RadioButtonGroup>
    
    <textarea value={body} onChange={onBodyChange}></textarea>
    <button>Go</button>
  </form>
);

Request.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  onURLChange: PropTypes.func.isRequired,
  onMethodChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Request;
