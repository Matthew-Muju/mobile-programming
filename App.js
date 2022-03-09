import React, {useState} from 'react';
import {Text, Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [username, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = () => {
    console.log({username});
    console.log({email});
    console.log({password});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TextInput Exercise</Text>
    </SafeAreaView>
  );
};
//
export default App;
