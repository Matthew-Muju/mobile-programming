import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TransactionCard = () => {
  return (
    <View style={styles.container}>
        <View >
            <Text style={styles.date}>17 April 2020</Text>
            <Text style={styles.item} >Water, Food</Text>
        </View>
      <Text style={styles.balance}>-Rp.300.000</Text>
    </View>
  )
}

export default TransactionCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        borderRadius: 8,
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.5,
        elevation: 1,
        alignItems: 'center',
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
    balance:{
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#1ABC9C',
      },
      
})