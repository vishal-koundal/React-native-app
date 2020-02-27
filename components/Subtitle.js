import React from 'react';
import styled from 'styled-components/native';

const Container = styled.Text`
  font-size: ${props => (props.long ? '18' : '14')};
  color: ${props => (props.black ? 'black' : '#b5b5b5')};
`;

const Subtitle = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Subtitle;
