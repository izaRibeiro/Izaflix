import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 250px;
  height: 150px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  margin: 0;

  transition: all .5s ease;
  &:hover,
  &:focus {
    transform: scale(1.5, 1.5);
    z-index: 1;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
