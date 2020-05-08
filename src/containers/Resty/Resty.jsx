import React, { useState } from 'react';
import Request from '../../components/Request/Request.js';

const Resty = () => {
  const [url, setURL] = useState('');
  const [method, setMethod] = useState('POST');
  const [body, setBody] = useState('');

  const handleChange = ({ target }) => {
    if(target.value === 'url')setURL(target.value);
    if(target.value === 'method')setMethod(target.value);
    if(target.value === 'body')setBody(target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest(url, method, body)
      .then(json => setResponse(json));
  };

  return (
    <Request 
      url={url} 
      method={method} 
      body={body}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );

};

export default Resty;
