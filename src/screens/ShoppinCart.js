import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    useWindowDimensions
} from "react-native"
import CartListItem from "../components/CartListItem"
import { useSelector } from "react-redux";

export default function ShoppingCart() {

    const cart = useSelector((state)=>state.cart.item)
    const checkOut = () => {
        console.warn("CheckOut");
    }

    const CartAmount = () => (
        <View style={styles.totalContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal:</Text>
                <Text style={styles.text}>$960</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery Charges:</Text>
                <Text style={styles.text}>$40</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Total:</Text>
                <Text style={styles.textBold}>$1000</Text>
            </View>
        </View>
    )

    return (<>
        <View style={styles.cartContainer}>
            <FlatList
                data={cart}
                renderItem={({ item }) => (<CartListItem cartItem={item} />)}
                ListFooterComponent={CartAmount}
            />
            <Pressable
                onPress={checkOut}
                style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    cartContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    totalContainer: {
        padding: 20,
        borderTopWidth: 3,
        borderTopColor: "green",
        gap: 20
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 20,
        color: "gray"
    },
    textBold: {
        fontSize: 20,
        fontWeight: 500,

    },
    button: {
        backgroundColor: "green",
        color: "white",
        bottom: 1,
        width: "90%",
        alignSelf: "center",
        padding: 10,
        borderRadius: 100,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        paddingHorizontal: 10,
        textAlign: "center",
    }
})