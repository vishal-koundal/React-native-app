import React from 'react';
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import heroBg from '../assets/images/heropizza.jpg';
import Product from '../components/Product';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

const Container = styled.View``;
const Background = styled.View`
  background-color: #e5293e;
  padding: 40px 15px;
  height: 290;
`;
const Heading = styled.Text`
  font-size: 30;
  font-weight: 900;
  color: #fff;
  text-align: center;
  margin-bottom: 25;
`;
const Hero = styled.View`
  height: 230;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;
const OrderNow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 7px 18px;
`;
const Detail = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 25;
`;
const Flexleft = styled.View`
  padding: 5px 10px;
`;
const Flexright = styled.View`
  background-color: #e5293e;
  width: 30%;
  text-align: center;
  border-top-right-radius: 10;
  border-bottom-right-radius: 10;
  padding: 10px 0px;
`;
const Products = styled.View`
  padding: 55px 15px 10px;
`;
const Scroll = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function HomeScreen() {
  return (
    <Container>
      <Background>
        <Heading>HUNGRY KYA!</Heading>
        <ImageBackground
          source={heroBg}
          style={{ width: '100%', height: 230 }}
          imageStyle={{ borderRadius: 10 }}
        >
          <Hero>
            <OrderNow>
              <Flexleft>
                <Title>Seafood pesto</Title>
                <Subtitle>Pepperoni Pizza beside.</Subtitle>
                <Detail>
                  <View>
                    <Text>
                      <FontAwesome name="cutlery" size={12} color="grey" />{' '}
                      <Subtitle>Pizza </Subtitle>
                    </Text>
                  </View>
                  <View>
                    <Text>
                      <Ionicons name="md-alarm" size={12} color="grey" />{' '}
                      <Subtitle>20 Mins</Subtitle>
                    </Text>
                  </View>
                </Detail>
              </Flexleft>
              <Flexright>
                <TouchableOpacity>
                  <Title center white>
                    Order Now
                  </Title>
                </TouchableOpacity>
              </Flexright>
            </OrderNow>
          </Hero>
        </ImageBackground>
      </Background>
      <Products>
        <Title>Popular</Title>
      </Products>
      <ScrollView style={{ height: 220 }} showsVerticalScrollIndicator={false}>
        <Scroll>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Scroll>
      </ScrollView>
    </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
