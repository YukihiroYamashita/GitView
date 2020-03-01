import React from 'react';
import { Icon } from 'react-native-elements'

import { Container, Title, Image } from './styles';

export default function FollowingCard({ name, image, onPress }) {
  return (
    <Container onPress={onPress}>
      <Image
        source={{ uri: image }}
      />
      <Title>{name}</Title>
      <Icon
        type='font-awesome'
        name='chevron-right'
        color='#c7c7c7'
      />
    </Container>
  );
}
