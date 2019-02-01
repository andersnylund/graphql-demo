import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  border: 2px solid goldenrod;
  border-radius: 5px;
  font-family: inherit;
  width: 100%;
`;

const Button = styled.button`
  background: white;
  color: goldenrod;
  font-size: 1rem;
  font-weight: 800;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid goldenrod;
  border-radius: 5px;
  max-width: 200px;
`;

const TextAreaForm = ({
  onChange: handleChange,
  value,
  onSubmit: handleSubmit,
  placeholder,
  buttonText,
}) => (
  <>
    <Form onSubmit={handleSubmit}>
      <TextArea
        placeholder={placeholder}
        name="text"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <Button type="submit">{buttonText}</Button>
    </Form>
  </>
);

TextAreaForm.propTypes = {
  onChange: func.isRequired,
  value: string.isRequired,
  onSubmit: func.isRequired,
  placeholder: string.isRequired,
  buttonText: string.isRequired,
};

export default TextAreaForm;
