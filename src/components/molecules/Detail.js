import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Detail = ({dateTitle, itemTitle, balanceTitle, textColor = '#1ABC9C'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{dateTitle}</Text>
      <Text style={styles.item}>{itemTitle}</Text>
      <Text style={styles.balance(textColor)}>{balanceTitle}</Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3'
  },
  item: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },
  balance: textColor => ({
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: textColor,
  }),
})