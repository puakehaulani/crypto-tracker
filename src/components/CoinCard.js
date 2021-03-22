import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { images } from '../Utils/CoinIcons'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15,
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold"
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    separator: {
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold"
    },
    image: {
        width: 35,
        height: 35
    },
    moneySymbol: {
        fontWeight: "bold"
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentageChangePlus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentageChangeMinus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    }
})

const {
    container,
    upperRow,
    coinSymbol,
    coinName,
    separator,
    coinPrice,
    image,
    moneySymbol,
    statisticsContainer,
    percentageChangePlus,
    percentageChangeMinus,
} = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24hr, percent_change_7d }) => {
    return (
        <View style={container}>

            <View style={upperRow}>
                <Image style={styles.image} source={{ uri: images[symbol] }} />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={separator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>{price_usd} <Text style={moneySymbol}> $ </Text></Text>
            </View>

            <View style={statisticsContainer}>
                <Text>24Hr:
                <Text style={percent_change_24hr < 0 ? percentageChangeMinus : percentageChangePlus}> {percent_change_24hr}%
                    </Text>
                </Text>
                <Text>7D:
                <Text style={percent_change_7d < 0 ? percentageChangeMinus : percentageChangePlus}> {percent_change_7d}%
                    </Text>
                </Text>
            </View>

        </View>
    )
}

export default CoinCard;