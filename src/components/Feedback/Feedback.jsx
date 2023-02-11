import { Component } from "react";
import { Wrapper } from './Feedback.styled';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from "components/Statistics";
import { Section } from '../Section';
import { Notification } from '../Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0  
  }

    onButtonHandle = event => {
      let stateName = event.currentTarget.name;
      console.log(stateName);
      this.setState(prevState => {
          return {[stateName]: prevState[stateName] + 1}
    })
  }
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;  
        return good + neutral + bad
    }

    countPositiveFeedbackPercentage = () => {
      const { good } = this.state;
      if (good === 0) {
        return 0
      }
        return Math.round(100 * good/this.countTotalFeedback());
    }

    render() {
      const { good, neutral, bad } = this.state
    return (
        <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions onButtonHandle={this.onButtonHandle} options={Object.keys(this.state)}></FeedbackOptions>
        </Section>

        {this.countTotalFeedback() === 0 ? (<Notification message="There is no feedback"></Notification>) :
        (<Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivpercentage={this.countPositiveFeedbackPercentage()}>
        </Statistics>
      </Section>)}
      </Wrapper>
    )
  }
}