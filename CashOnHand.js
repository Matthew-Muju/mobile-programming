import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Detail from '../components/molecules/Detail'

const CashOnHand = () => {
  return (
    <View style={styles.page}>
        <View style={styles.transactionWrapper}>
            <Header title="Cash On Hand"/>
            <Gap height={24} />
            <TextInput title="Description" placeholder="Add desription"/>
            <Gap height={17} />
            <TextInput title="Type" placeholder="Debit / Credit"/>
            <Gap height={22} />
            <Button title="Save" />
        </View>
        <View style={styles.last3Wrapper}>
            <Text style={styles.lastTitle}>Last 3 Transactions</Text>
            <Detail dateTitle="17 April 2020" itemTitle="Water, Food" balanceTitle="-Rp.300.000" textColor='#D9435E' />
            <Detail dateTitle="18 April 2020" itemTitle="Office Supplies" balanceTitle="-Rp.300.000" textColor='#D9435E' />
            <Detail dateTitle="19 April 2020" itemTitle="Top Up" balanceTitle="+Rp.300.000" />
        </View>
    </View>
  )
}

export default CashOnHand

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    transactionWrapper: {
        backgroundColor: 'white',
    },
    last3Wrapper: {
        backgroundColor: 'white',
    },
    lastTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
    },
})
