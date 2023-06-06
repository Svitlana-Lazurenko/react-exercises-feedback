import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import {
  List,
  Item,
  ItemText,
  TotalFeedback,
  PositiveFeedback,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    {total > 0 ? (
      <>
        <List>
          <Item key="good">
            <ItemText>Good: {good}</ItemText>
          </Item>
          <Item key="neutral">
            <ItemText>Neutral: {neutral}</ItemText>
          </Item>
          <Item key="bad">
            <ItemText>Bad: {bad}</ItemText>
          </Item>
        </List>
        <TotalFeedback>Total feedback: {total}</TotalFeedback>
        <PositiveFeedback>
          Positive feedback: {positivePercentage}%
        </PositiveFeedback>
      </>
    ) : (
      <Notification message="There is no feedback" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
