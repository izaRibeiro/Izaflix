import styled from "styled-components";

const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background-color: var(--black); 
  box-sizing: border-box;
  cursor: pointer;
  padding: 8px 16px;
  font-style: normal;
  font-size: 14px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button