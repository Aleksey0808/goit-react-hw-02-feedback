import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonList,
  ButtonItem,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonList>
      {options.map(option => (
        <ButtonItem key={option}>
          <Button type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        </ButtonItem>
      ))}
    </ButtonList>
  );
}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
