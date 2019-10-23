import React from 'react';
import PropTypes from 'prop-types';
import Header from '<organisms>/Header/Header';

const PageLayout = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
);

PageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
};

export default PageLayout;
