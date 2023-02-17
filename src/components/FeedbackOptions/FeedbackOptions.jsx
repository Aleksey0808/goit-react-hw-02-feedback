import React from 'react';
import {
  ButtonList,
  ButtonItem,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
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
