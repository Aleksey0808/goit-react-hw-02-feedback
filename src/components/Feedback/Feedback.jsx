import React, { Component } from 'react';
import Section from 'components/Sections/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import { Container } from 'components/Feedback/Feedback.styles';

class Feedback extends Component {
  static defaultProps = { initialValue: 0, step: 1 };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleClickButton = e => {
    const option = e.target.name;
    this.setState((prevState, props) => ({
      [option]: prevState[option] + props.step,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}`;
  }

  render() {
    const options = Object.keys(this.state);
    const totalfeadback = this.countTotalFeedback();
    const percentFeadback = this.countPositiveFeedbackPercentage();
    const clickButton = this.handleClickButton;
    return (
      <Container>
        <Section title="Please leave feedback">
          {<FeedbackOptions options={options} onLeaveFeedback={clickButton} />}
        </Section>

        <Section title="Statistics">
          {totalfeadback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalfeadback}
              positivePercentage={percentFeadback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default Feedback;
