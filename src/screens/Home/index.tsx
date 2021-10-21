import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import MessageList from '../../components/MessageList';
import SendMessageForm from '../../components/SendMessageForm';
import SigninBox from '../../components/SigninBox';
import { useAuth } from '../../hooks/auth';
import { styles } from './style';

function Home() {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      {user ? <SendMessageForm /> : <SigninBox />}
    </View>
  )
}

export default Home;