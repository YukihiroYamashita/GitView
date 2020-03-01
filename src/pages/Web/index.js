import React from 'react';
import { WebView } from 'react-native-webview'

import Header from '../../components/Header';

export default function Web({ navigation, route }) {
  return (
    <>
      <Header
        onPress={() => navigation.goBack()}
        title={route.params.title}
      />
      <WebView
        source={{ uri: route.params.item }}
        style={{ flex: 1 }}
      />
    </>
  );
}
