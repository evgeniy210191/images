import React from 'react';
import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';

function Loader({ isAlreadyLoad }) {
  return (
    <Circles
      height="50"
      width="50"
      color="#4fa94d"
      ariaLabel="loading"
      wrapperStyle={{
        margin: '0 auto',
      }}
      visible={isAlreadyLoad}
    />
  );
}

export default Loader;

Loader.propTypes = {
  isAlreadyLoad: PropTypes.bool.isRequired,
};
