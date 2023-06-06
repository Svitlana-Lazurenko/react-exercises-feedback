import { useState } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage(number) {
    return Math.round((100 / number) * good);
  }

  function handleIncrement(e) {
    const btnName = e.currentTarget.name;
    switch (btnName) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        throw new Error('No button with that name');
    }
  }

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total);

  return (
    <>
      <Section title={'Please, leave feedback'}>
        <FeedbackOptions options={options} handleIncrement={handleIncrement} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          options={options}
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </>
  );
}
