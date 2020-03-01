import React from 'react';
import { Icon } from 'react-native-elements';

import { Container, Title } from './styles';

export default function Header({ title, onPress }) {
  return (
    <Container>
      <Icon
        type='font-awesome'
        name='chevron-left'
        color='white'
        onPress={onPress}
      />
      <Title>{title}</Title>
      <Icon
        type='font-awesome'
        name='chevron-left'
        iconStyle={{ opacity: 0 }}
      />
    </Container>
  );
}