import React from 'react';
import styled from 'styled-components/native';

const Container = styled.Text`
  font-size: 24;
  color: ${props => (props.white ? '#ffffff' : 'black')};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

const Title = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Title;
