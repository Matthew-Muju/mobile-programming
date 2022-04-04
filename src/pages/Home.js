import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../components'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
      <Text style={styles.title}>Money Tracker</Text>
      <Text style={styles.alt}>Track Your Money</Text>
      <Image source={require('../assets/icon/pic.svg')} />
      </View>
      <Gap height={20} />
      <View style={styles.balanceWrapper}>
        <Text style={styles.balance}>Your Balance</Text>
        <Text style={styles.totalBalance}>Rp.10.000.000</Text>
        <View style={styles.line}></View>
        <Text>Cash On Hand    </Text><Text>Rp.4.000.000</Text>
        <Text>Cash On Bank    </Text><Text>Rp.6.000.000</Text>
      </View>
      <Gap height={20} />
      <View style={styles.transactionWrapper}>
        <Text style={styles.transaction}>Add Transaction</Text>
        <Button title="Cash On Hand" />
        <Button title="Cash On Bank" />
      </View>
      <Gap height={25} />
      <View style={styles.navigationWrapper}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
          source={require('../assets/icon/Rectangle.png')}
          style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
          source={require('../assets/icon/Vector.png')}
          style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerWrapper: {
    backgroundColor: 'white',
  },
  balanceWrapper: {
    backgroundColor: 'white',
  },
  transactionWrapper: {
    backgroundColor: 'white',
  },
  navigationWrapper: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  alt: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  image: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    alignSelf: 'stretch',
  },
  balance: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  totalBalance: {
    fontFamily: 'Poppins-Semi Bold',
    fontSize: 24,
  },
  transaction: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  }
})
