import React from 'react';
import { TextMask } from 'react-native-masked-text';

import { Container, Title, Label, Row } from './styles';

export default function RepoCard({ name, created, onPress }) {
  return (
    <Container onPress={onPress}>
      <Title>{name}</Title>
      <Row>
        <Label>Criado em</Label>
        <TextMask
           type={'datetime'}
           options={{
             format: 'YYYY/MM/DD'
           }}
           value={created}
        />
      </Row>
    </Container>
  );
}
