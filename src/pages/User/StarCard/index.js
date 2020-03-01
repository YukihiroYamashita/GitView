import React from 'react';
import { Icon } from 'react-native-elements';

import { Container, Title, Label, Column, Image } from './styles';

export default function StarCard({ name, owner, onPress, image }) {
  return (
    <Container onPress={onPress}>
      <Image
        source={{ uri: image }}
      />
      <Column>
        <Title>{name}</Title>
        <Label>{owner}</Label>
      </Column>
      <Icon
        type='font-awesome'
        name='chevron-right'
        color='#c7c7c7'
      />
    </Container>
  );
}
