import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

const Request = ({ url, onURLChange, body, onBodyChange, onMethodChange, onSubmit }) => (
  <form className={styles.Request} onSubmit={onSubmit}>
    <input type="text" value={url} onChange={onURLChange}/>
    
    <input id="POST" type="radio" name="method" value="POST" onChange={onMethodChange}/>
    <label htmlFor="POST">POST</label>

    <input id="GET" type="radio" name="method" value="GET" onChange={onMethodChange}/>
    <label htmlFor="GET">GET</label>

    <input id="PATCH" type="radio" name="method" value="PATCH" onChange={onMethodChange}/>
    <label htmlFor="PATCH">PATCH</label>

    <input id="PUT" type="radio" name="method" value="PUT" onChange={onMethodChange}/>
    <label htmlFor="PUT">PUT</label>

    <input id="DELETE" type="radio" name="method" value="DELETE" onChange={onMethodChange}/>
    <label htmlFor="DELETE">DELETE</label>
    
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
