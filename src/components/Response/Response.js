import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  // pre tags preserve the white space
  <pre>
    {JSON.stringify(response, null, 2)}
  </pre>
);

Response.propTypes = {
  response: PropTypes.object.isRequired
};

export default Response;

// this is the object that the api returns 
