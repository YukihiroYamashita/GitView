import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Overlay } from 'react-native-elements';

import { Title } from './styles';

export default function Loading({ visible, fetching }) {
  return (
    <Overlay 
      isVisible={visible} 
      overlayStyle={{ justifyContent: 'center', alignItems: 'center', elevation: 0 }}
      overlayBackgroundColor='transparent'
    >
      <ActivityIndicator
        size='large'
        color='#FFF'
      />
      <Title>Carregando {fetching}</Title>
    </Overlay>
  );
}
