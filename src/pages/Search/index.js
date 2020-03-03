import React, { useState } from 'react';
import axios from 'axios';

import { Container, Input, Title, Image } from './styles';

import Button from './Button';

import Loading from '../../components/Loading'

export default function Search({ navigation }) {
  const [ loading, setLoading ] = useState(false);
  const [ fetching, setFetching ] = useState('');
  const [ userName, setUserName ] = useState('');

  const repos = [];
  const followers = [];
  const following = [];
  const stars = [];

  async function handleFinishedPress() {
    setLoading(true);
    let user = userName.replace(' ', '');
    navigation.replace('User', { user })
    // await axios({
    //   url: `https://api.github.com/users/${user}`,
    //   method:'GET'
    // }).then(res => {
    //   const { data } = res;
    //   fetchRepos(data);
    // })
  }

  async function fetchRepos(data) {
    setFetching('Repositórios')
    let user = userName.replace(' ', '');
    await axios({
      url: `https://api.github.com/users/${user}/repos`,
      method:'GET'
    }).then(res => {
      repos.push(res.data);
      fetchFollowers(data);
    })
  }

  async function fetchFollowers(data) {
    setFetching('Seguidores')
    let user = userName.replace(' ', '');
    await axios({
      url: `https://api.github.com/users/${user}/followers`,
      method:'GET'
    }).then(res => {
      followers.push(res.data)
      fetchFollowing(data);
    })
  }

  async function fetchFollowing(data) {
    setFetching('Seguindo')
    let user = userName.replace(' ', '');
    await axios({
      url: `https://api.github.com/users/${user}/following`,
      method:'GET'
    }).then(res => {
      following.push(res.data)
      fetchStars(data);
    })
  }

  async function fetchStars(data) {
    setFetching('Stars')
    let user = userName.replace(' ', '');
    await axios({
      url: `https://api.github.com/users/${user}/starred`,
      method:'GET'
    }).then(res => {
      stars.push(res.data)
    })
    setLoading(true);
    navigation.replace('User', { data, repos: repos[0], followers, following, stars: stars[0] })
  }

  return (
    <>
      <Image
        source={{ uri: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' }}
      />
      <Container>
        <Title>Insira o nome do usuário</Title>
        <Input
          onChangeText={text => setUserName(text)}
          onEndEditing={handleFinishedPress}
          value={userName}
          placeholder='Ex: Yukihiro Yamashita'
          placeholderTextColor='#212121'
        />
      </Container>
      <Button
        title='Buscar'
        onPress={handleFinishedPress}
      />
    </>
  );
}
