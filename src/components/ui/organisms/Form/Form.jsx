import React from 'react';
import PropTypes from 'prop-types';
import useformbee from 'useformbee';
import getFlexbox from '<atoms>/Flexbox/Flexbox';
import InputField from '<molecules>/InputField/InputField';
import Button from '<atoms>/Button/Button';
import theme from '<styles>/theme';

const Flexbox = getFlexbox();
const Form = ({
  inputs, rules, buttonText, submit, flexDirection, width, height,
}) => {
  const {
    values, handleChange, handleSubmit, errors,
  } = useformbee({ callback: submit, rules });

  const allInputs = inputs.map((ele, index) => {
    const inputElement = ele;
    inputElement.inputProps.value = values[inputElement.inputProps.name];
    inputElement.inputProps.onChange = handleChange;
    inputElement.inputProps.error = errors[inputElement.inputProps.name];
    return <InputField key={index} error={inputElement.inputProps.error} {...inputElement}/>;
  });


  return (
    <form role='form' onSubmit={handleSubmit}>
      <Flexbox
        justifyContent='space-between'
        flexDirection={flexDirection}
        width={width}
        height={height}
      >
        {allInputs}
        <Button
          type='submit'
        >
          {buttonText}
        </Button>
      </Flexbox>
    </form>
  );
};

Form.defaultProps = {
  buttonText: 'Submit',
  flexDirection: 'row',
  width: 'auto',
  height: 'auto',
};

Form.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string,
    showError: PropTypes.bool,
    inputProps: PropTypes.shape({
      name: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      type: PropTypes.string,
    }).isRequired,
  })).isRequired,
  buttonText: PropTypes.string,
  rules: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  flexDirection: PropTypes.oneOf(['row', 'column']),
  width: PropTypes.oneOf(Object.keys(theme.spacings)),
  height: PropTypes.oneOf(Object.keys(theme.spacings)),
};

export default Form;
