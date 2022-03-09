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

//Styling
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginLeft: 50,
    marginRight: 50,
    paddingBottom: 20,
  },
  input: {
    height: 40;
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  button: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 30,
    marginTop: 20,
  },
});

export default App;
