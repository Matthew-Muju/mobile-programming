import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../components'

const SignIn = ({navigation}) => {
  return (
    <View>
      <Header title='Sign In'/>
      <View style={styles.contentWrapper}>
      <TextInput title="Email Address" placeholder="Type your email address"/>
      <Gap height={16} />
      <TextInput title="Password" placeholder="Type your password"/>
      <Gap height={24} />
      <Button title="Sign In" onPress={() => navigation.navigate('Home')}/>
      <Gap height={12} />
      <Button title="Create New Account" color="#8D92A3" textColor="white" onPress={() => navigation.navigate('SignUp')}/>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    contentWrapper: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 26,
        marginTop: 24,
        paddingBottom: 200,
    },
    page: {
        flex: 1,
    }
})