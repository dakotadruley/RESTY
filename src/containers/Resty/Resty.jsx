import React, { useState } from 'react';
import { makeRequest } from '../../services/makeRequest.js';
import Request from '../../components/Request/Request.js';
import Response from '../../components/Response/Response.js';
import HistoryList from '../../components/History/HistoryList.js';

const Resty = () => {
  const [url, setURL] = useState('');
  const [method, setMethod] = useState('POST');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({});
  const [history, setHistory] = useState([]);

  const handleChange = ({ target }) => {
    if(target.value === 'url')setURL(target.value);
    if(target.value === 'method')setMethod(target.value);
    if(target.value === 'body')setBody(target.value);
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    makeRequest(url, method, body)
      .then(json => {
        setResponse(json);
        // placing the history at the top of the list
        setHistory(preHistory => [{ url, method }, ...preHistory]);
      });
  };

  return (
    <>
      <HistoryList history={history} />
      <Request 
        url={url} 
        method={method} 
        body={body}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Response response={response} />
    </>
  );

};

export default Resty;
