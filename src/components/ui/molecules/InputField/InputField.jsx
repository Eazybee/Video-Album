import React from 'react';
import PropTypes from 'prop-types';
import Input from '<atoms>/Input/Input';
import getFlexbox from '<atoms>/Flexbox/Flexbox';
import Label from '<atoms>/Label/Label';
import Text from '<atoms>/Text/Text';

const mediaQuery = `
  @media screen  and (max-width:480px){
    padding: .4em 0em ;
    flex-direction: column;
    width: calc(100%);
    align-items: center;
  }
`;
const Flexbox = getFlexbox();
const InputField = ({
  label,
  flexDirection,
  flexWrap,
  inputProps,
  error,
  showError,
  id,
}) => (
  <Flexbox
   flexDirection='column'
   flexWrap={flexWrap}
   mediaQuery={mediaQuery}
  >
    {label && <Label htmlFor={id} hasBottomMargin>
        <Text
          fontWeight='bold'
          padding='xxsm'
          display='block'
          hasRightMargin={flexDirection === 'row'}
        >
          {label}
        </Text>
    </Label>}
    <Input {...inputProps} id={id} error={error}/>
    {showError
     && error
     && <Text
          color='danger'
          fontSize='small'
          fontWeight='bold'
          display='inline'
          padding='xxsm'
        >
          {error}
        </Text>
    }
  </Flexbox>
);

InputField.defaultProps = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  showError: false,
};

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexDirection: PropTypes.oneOf(['row', 'column']),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap']),
  inputProps: PropTypes.object.isRequired,
  error: PropTypes.string,
  showError: PropTypes.bool,
};

export default InputField;
