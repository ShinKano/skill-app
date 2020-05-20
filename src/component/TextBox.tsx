import * as React from 'react'
import styled from 'styled-components'

const TextBox: React.FC = () => {
  return (
    <InputBox />
  );
}

export default TextBox;

const InputBox = styled.input`
  border: none;
  border-bottom: 1px solid #DDD;
  margin-left: 16px;
  height: 40px;
  align-self: center;
  background-color: transparent;
`;