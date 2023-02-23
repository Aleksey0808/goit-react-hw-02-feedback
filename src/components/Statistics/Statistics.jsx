import React from 'react';
import {
  StatisticList,
  StatisticItem,
} from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <StatisticList>
        <StatisticItem>Good: {good}</StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>
        <StatisticItem>Total: {total}</StatisticItem>
        <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
      </StatisticList>
    </div>
  );
}

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
