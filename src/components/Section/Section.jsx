import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <h1 className="section__title">{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
