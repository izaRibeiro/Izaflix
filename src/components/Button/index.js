import styled from "styled-components";

const Button = styled.button`
  color: ${props => `var(${props.color})`};
  border: 1px solid var(--white);
  background-color: ${props => `var(${props.backgroundcolor})`}; 
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
  margin-bottom: ${props => `${props.margin}`};
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button