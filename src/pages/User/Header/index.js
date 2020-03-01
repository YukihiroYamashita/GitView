import React, { useState } from 'react';

import { Container, Image, Name, Description, Row, Label } from './styles';

export default function Header({ selected, image, name, description, followers, following, repo, stars, selectSearch }) {
  function handleSelectedPress(item) {
    selectSearch(item);
  }
  
  return (
    <Container>
      <Image
        source={{ uri: image }}
      />
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Row>
        <Label onPress={() => handleSelectedPress('repos')} style={selected == 'repos' ? { color: '#5cb85c' } : null }>{repo} Repositórios</Label>
        <Label onPress={() => handleSelectedPress('star')} style={selected == 'star' ? { color: '#5cb85c' } : null }>{stars} Stars</Label>
      </Row>
      <Row>
        <Label onPress={() => handleSelectedPress('followers')} style={selected == 'followers' ? { color: '#5cb85c' } : null }>{followers} Seguidores</Label>
        <Label onPress={() => handleSelectedPress('following')} style={selected == 'following' ? { color: '#5cb85c' } : null }>{following} Seguindo</Label>
      </Row>
    </Container>
  );
}
