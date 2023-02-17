import React from 'react';
import {
  StatisticList,
  StatisticItem,
} from 'components/Statistics/Statistics.styled';

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

export default Statistics;
