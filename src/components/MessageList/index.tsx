import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import api from '../../services/api';
import io from 'socket.io-client';
import Message, { MessageProps } from '../Message';

import { styles } from './styles';

let messagesQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', message => {
  messagesQueue.push(message);
  console.log(message);
});

function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const response = await api.get<MessageProps[]>('messages/last3');
      setCurrentMessages(response.data);
    }

    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if(messagesQueue.length > 0) {
        setCurrentMessages(prevState => [messagesQueue[0], prevState[0], prevState[1]]);
        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"  
    >
      {currentMessages.map(message => (
        <Message key={message.id} data={message}/>
      ))}
    </ScrollView>
  )
}

export default MessageList;