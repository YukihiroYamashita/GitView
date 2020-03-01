import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';

import { Container } from './styles';

import Header from './Header'
import FollowersCard from './FollowersCard'
import FollowingCard from './FollowingCard'
import RepoCard from './RepoCard'
import StarCard from './StarCard'

import Loading from '../../components/Loading'
 

export default function User({ route, navigation }) {
  const [ update, setUpdate ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ showing, setShowing ] = useState('repos');
  const [ userName, setUserName ] = useState(route.params.user);
  const [ fetching, setFetching ] = useState('');
  const [ avatar, setAvatar ] = useState('');
  const [ user, setUser ] = useState('');
  const [ bio, setBio ] = useState('');
  const [ publicRepos, setPublicRepos ] = useState(0);
  const [ repos, setRepos ] = useState('');
  const [ followers, setFollowers ] = useState('');
  const [ following, setFollowing ] = useState('');
  const [ stars, setStars ] = useState('');

  useEffect(() => {
    fetchUser()
  }, [userName]);

  function handleUserClick(item) {
    setShowing('repos')
    setUserName(item.login)
  }

  function renderItem({ item }) {
    if(showing == 'repos') {
      return (
        <RepoCard
          name={item.name}
          created={item.created_at}
          onPress={() => navigation.navigate('Web', { item: item.html_url, title: item.name })}
        />
      )
    }
    if(showing == 'followers') {
      return (
        <FollowersCard
          name={item.login}
          image={item.avatar_url}
          onPress={() => handleUserClick(item)}
        />
      )
    }
    if(showing == 'following') {
      return (
        <FollowingCard
          name={item.login}
          image={item.avatar_url}
          onPress={() => handleUserClick(item)}
        />
      )
    }
    if(showing == 'star') {
      return (
        <StarCard
          owner={item.owner.login}
          description={item.description}
          name={item.name}
          image={item.owner.avatar_url}
          onPress={() => navigation.navigate('Web', { item: item.html_url, title: item.name })}
        />
      )
    }
  }

  function renderFlatlist() {
    if(showing == 'repos') {
      return (
        <FlatList
          data={repos}
          renderItem={item => renderItem(item)}
          keyExtractor={item => String(item.id)}
        />
      )
    }
    if(showing == 'followers') {
      return (
        <FlatList
          data={followers}
          renderItem={item => renderItem(item)}
          keyExtractor={item => String(item.id)}
        />
      )
    }
    if(showing == 'following') {
      return (
        <FlatList
          data={following}
          renderItem={item => renderItem(item)}
          keyExtractor={item => String(item.id)}
        />
      )
    }
    if(showing == 'star') {
      return (
        <FlatList
          data={stars}
          renderItem={item => renderItem(item)}
          keyExtractor={item => String(item.id)}
        />
      )
    }
  }

  function handleSearch(item) {
    setShowing(item)
  }

  async function fetchUser() {
    setLoading(true);
    let user = userName.replace(' ', '');
    await axios({
      url: `https://api.github.com/users/${user}`,
      method:'GET'
    }).then(res => {
      const { data } = res;
      setAvatar(data.avatar_url);
      setUser(data.login);
      setBio(data.bio);
      setPublicRepos(data.public_repos)
      fetchRepos(data);
    })
  }

  async function fetchRepos(data) {
    setFetching('Repositórios')
    let user = userName.replace(' ', '');
    await axios({
      url: `https://api.github.com/users/${user}/repos`,
      method:'GET'
    }).then(res => {
      setRepos(res.data);
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
      setFollowers(res.data)
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
      setFollowing(res.data)
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
      setStars(res.data)
    })
    setLoading(false);
  }

  function renderLoading() {
    return <Loading visible={loading} fetching={fetching}/>
  }
  
  return (
    <Container>
      {renderLoading()}
      <Header
        selected={showing}
        image={avatar}
        name={user}
        description={bio}
        followers={followers.length}
        following={following.length}
        repo={publicRepos}
        stars={stars.length}
        selectSearch={handleSearch}
      />
      {renderFlatlist()}
    </Container>
  );
}
