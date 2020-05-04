import React, { useState } from 'react';
import Request from '../../components/Request/Request.js';

const Resty = () => {
  const [url, setURL] = useState('');
  const [method, setMethod] = useState('POST');
  const [body, setBody] = useState('');

  const handleURLChange = () => {};
  const handleMethodChange = () => {};
  const handleBodyChange = () => {};

  const handleSubmit = () => {
    //   makeRequest(this.state.url, this.state.method, this.state.body)
    // .then(response => save in state)
  };

  return (
    <Request url={url} method={method} body={body} />
  );

};

export default Resty;
