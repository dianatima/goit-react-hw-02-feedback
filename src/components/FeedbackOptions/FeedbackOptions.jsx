import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onButtonHandle, options }) => {
  return (
    options.map((option) => {
     return ( <Button type="button" key={option} name={option} onClick={onButtonHandle}>
          {option}
        </Button>)
    })

    );
  };
  
  FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onButtonHandle: PropTypes.func.isRequired,
  };