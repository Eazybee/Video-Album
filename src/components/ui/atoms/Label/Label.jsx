import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = ({
  hasBottomMargin,
  children,
  ...props
}) => (
  <Label.Container hasBottomMargin={hasBottomMargin} {...props}>
    {children}
  </Label.Container>
);

Label.Container = styled.label`
  ${({ hasBottomMargin }) => `
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-bottom: ${hasBottomMargin ? '.5em' : 0};
  `}`;

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string]),
  hasBottomMargin: PropTypes.bool,
};

export default Label;
