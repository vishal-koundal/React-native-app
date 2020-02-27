import React from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import heroBg from '../assets/images/heropizza.jpg';
import Subtitle from '../components/Subtitle';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 5px 0px 10px;
  padding: 10px;
  border-radius: 10;
  background-color: #fff;
  shadow-color: #000;
  shadow-opacity: 0.32;
  shadow-radius: 5.45;
  elevation: 9;
`;
const ProductImage = styled.Image`
  border-radius: 7;
`;
const Detail = styled.View`
  display: flex;
  flex-direction: row;
`;
const ProductDetail = styled.View`
  padding: 5px 10px;
`;
const Timing = styled.View`
  padding-left: 25px;
`;
const Product = ({ title }) => (
  <Container>
    <View>
      <ProductImage style={{ width: 70, height: 70 }} source={heroBg} />
    </View>
    <ProductDetail>
      <Subtitle long black>
        Mozzarella Pizza
      </Subtitle>
      <Subtitle>Mozzarella, tornatoes, greeen pepper,</Subtitle>
      <Detail>
        <View>
          <Text>
            <FontAwesome name="cutlery" size={12} color="grey" />{' '}
            <Subtitle>Pizza </Subtitle>
          </Text>
        </View>
        <Timing>
          <Text>
            <Ionicons name="md-alarm" size={12} color="grey" />{' '}
            <Subtitle>20 Mins</Subtitle>
          </Text>
        </Timing>
      </Detail>
    </ProductDetail>
  </Container>
);

export default Product;
