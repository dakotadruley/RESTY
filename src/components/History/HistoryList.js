import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem.js';

const HistoryList = ({ history }) => {
  const historyElements = history.map(item => (
    <li key={Math.random().toString(20).substr(2, length)}>
      <HistoryItem {...item} />
    </li>
  ));

  return (
    <ul>
      {historyElements}
    </ul>
  );
};

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList; 
